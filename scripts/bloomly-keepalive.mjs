export const BLOOMLY_PROJECT_REF = "xmhyjttyarskimsxcfhl";
export const BLOOMLY_SUPABASE_URL = `https://${BLOOMLY_PROJECT_REF}.supabase.co`;
export const MANAGEMENT_API = "https://api.supabase.com/v1";
export const INACTIVE_STATUSES = new Set(["INACTIVE", "PAUSED", "COMING_UP", "RESTORING"]);
export const ACTIVE_STATUSES = new Set(["ACTIVE_HEALTHY", "ACTIVE_UNHEALTHY"]);

const UA = "Mozilla/5.0 (compatible; BloomlyKeepalive/1.0)";

export function managementHeaders(token) {
  return {
    Authorization: `Bearer ${String(token || "").trim()}`,
    Accept: "application/json",
    "User-Agent": UA,
  };
}

export function parseProjectStatus(payload) {
  if (!payload || typeof payload !== "object") return "";
  return String(payload.status || "");
}

export function needsRestore(status) {
  return INACTIVE_STATUSES.has(String(status || "").toUpperCase());
}

export function isActive(status) {
  return ACTIVE_STATUSES.has(String(status || "").toUpperCase());
}

export async function pingAuthHealth(fetchImpl = fetch) {
  const url = `${BLOOMLY_SUPABASE_URL}/auth/v1/health`;
  const response = await fetchImpl(url, {
    headers: { "User-Agent": UA, Accept: "application/json" },
  });
  const text = await response.text();
  return { ok: response.status > 0 && response.status < 500, status: response.status, text };
}

export async function getProject(token, fetchImpl = fetch) {
  const response = await fetchImpl(`${MANAGEMENT_API}/projects/${BLOOMLY_PROJECT_REF}`, {
    headers: managementHeaders(token),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`Project lookup failed (HTTP ${response.status})`);
  }
  return payload;
}

export async function restoreProject(token, fetchImpl = fetch) {
  const response = await fetchImpl(
    `${MANAGEMENT_API}/projects/${BLOOMLY_PROJECT_REF}/restore`,
    { method: "POST", headers: managementHeaders(token) }
  );
  if (response.status >= 400) {
    const text = await response.text();
    throw new Error(`Restore failed (HTTP ${response.status}): ${text.slice(0, 200)}`);
  }
}

export async function keepAlive({
  token,
  fetchImpl = fetch,
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  maxWaitMs = 180000,
} = {}) {
  const logs = [];
  const log = (message) => {
    logs.push(message);
    console.log(message);
  };

  try {
    const ping = await pingAuthHealth(fetchImpl);
    log(`Auth health HTTP ${ping.status}`);
    if (ping.ok) {
      return { ok: true, restored: false, logs };
    }
  } catch (err) {
    log(`Auth health failed: ${err instanceof Error ? err.message : String(err)}`);
  }

  if (!String(token || "").trim()) {
    log("SUPABASE_ACCESS_TOKEN missing; cannot restore a paused project.");
    return { ok: false, restored: false, logs };
  }

  const project = await getProject(token, fetchImpl);
  const status = parseProjectStatus(project);
  log(`Project status: ${status || "unknown"}`);

  if (needsRestore(status) || !isActive(status)) {
    log("Restoring Bloomly Supabase project…");
    await restoreProject(token, fetchImpl);
    const started = Date.now();
    let latest = status;
    while (Date.now() - started < maxWaitMs) {
      await sleep(8000);
      latest = parseProjectStatus(await getProject(token, fetchImpl));
      log(`Restore wait: ${latest || "unknown"}`);
      if (isActive(latest)) break;
    }
    if (!isActive(latest)) {
      throw new Error(`Project did not become active (last status: ${latest || "unknown"})`);
    }
  }

  const ping = await pingAuthHealth(fetchImpl);
  log(`Auth health after restore HTTP ${ping.status}`);
  return { ok: ping.ok, restored: true, logs };
}

const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  keepAlive({ token: process.env.SUPABASE_ACCESS_TOKEN })
    .then((result) => {
      if (!result.ok) process.exit(1);
    })
    .catch((err) => {
      console.error(err instanceof Error ? err.message : err);
      process.exit(1);
    });
}
