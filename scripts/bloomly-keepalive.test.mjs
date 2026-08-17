import assert from "node:assert/strict";
import test from "node:test";
import {
  BLOOMLY_PROJECT_REF,
  BLOOMLY_SUPABASE_URL,
  isActive,
  keepAlive,
  needsRestore,
  parseProjectStatus,
  pingAuthHealth,
} from "./bloomly-keepalive.mjs";

test("Bloomly API URL uses the live project ref", () => {
  assert.equal(BLOOMLY_PROJECT_REF, "xmhyjttyarskimsxcfhl");
  assert.equal(
    BLOOMLY_SUPABASE_URL,
    "https://xmhyjttyarskimsxcfhl.supabase.co"
  );
});

test("paused and restoring projects need a restore", () => {
  assert.equal(needsRestore("INACTIVE"), true);
  assert.equal(needsRestore("PAUSED"), true);
  assert.equal(needsRestore("ACTIVE_HEALTHY"), false);
  assert.equal(isActive("ACTIVE_HEALTHY"), true);
  assert.equal(isActive("INACTIVE"), false);
  assert.equal(parseProjectStatus({ status: "COMING_UP" }), "COMING_UP");
});

test("healthy auth ping succeeds without restore", async () => {
  const fetchImpl = async () =>
    new Response(JSON.stringify({ name: "GoTrue" }), { status: 401 });
  const result = await keepAlive({ token: "", fetchImpl, sleep: async () => {} });
  assert.equal(result.ok, true);
  assert.equal(result.restored, false);
});

test("unreachable auth without a token fails closed", async () => {
  const fetchImpl = async () => {
    throw new TypeError("Failed to fetch");
  };
  const result = await keepAlive({ token: "", fetchImpl, sleep: async () => {} });
  assert.equal(result.ok, false);
  assert.equal(result.restored, false);
});

test("inactive project is restored then re-pinged", async () => {
  let restoreCalls = 0;
  const fetchImpl = async (url, init = {}) => {
    const href = String(url);
    if (href.endsWith("/auth/v1/health")) {
      if (restoreCalls === 0) throw new TypeError("Failed to fetch");
      return new Response("{}", { status: 200 });
    }
    if (href.includes("/projects/") && href.endsWith("/restore")) {
      restoreCalls += 1;
      return new Response("", { status: 200 });
    }
    if (href.includes("/projects/")) {
      return new Response(
        JSON.stringify({
          status: restoreCalls ? "ACTIVE_HEALTHY" : "INACTIVE",
        }),
        { status: 200 }
      );
    }
    throw new Error(`unexpected url ${href} ${init.method || "GET"}`);
  };

  const result = await keepAlive({
    token: "sbp_test",
    fetchImpl,
    sleep: async () => {},
    maxWaitMs: 1000,
  });
  assert.equal(restoreCalls, 1);
  assert.equal(result.ok, true);
  assert.equal(result.restored, true);
});

test("pingAuthHealth treats 5xx as down", async () => {
  const result = await pingAuthHealth(async () => new Response("no", { status: 503 }));
  assert.equal(result.ok, false);
  assert.equal(result.status, 503);
});
