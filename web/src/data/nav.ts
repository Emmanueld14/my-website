/**
 * Central nav config — only targets that already exist in the app.
 *
 * Routes that exist: `/` (homepage). There is no `/blog/` or other standalone pages.
 * Homepage section ids: hero, story, proof, building, photography, places, contact.
 */
export type NavItem = {
  id: string
  label: string
  /** Homepage section id to scroll to */
  sectionId: string
  /** Optional standalone route — none exist yet beyond `/` */
  path?: string
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', sectionId: 'hero' },
  { id: 'story', label: 'My Story', sectionId: 'story' },
  { id: 'proof', label: 'Proof', sectionId: 'proof' },
  { id: 'building', label: 'Building', sectionId: 'building' },
  { id: 'photography', label: 'Photography', sectionId: 'photography' },
  { id: 'places', label: 'Where I’ve Been', sectionId: 'places' },
  { id: 'contact', label: 'Contact', sectionId: 'contact' },
]

/** Primary CTA — scrolls to the existing Contact section */
export const navCta = {
  id: 'lets-talk',
  label: "Let's talk",
  sectionId: 'contact',
} as const

/** Section ids observed for scroll-spy active state */
export const sectionIds = navItems.map((item) => item.sectionId)

/** @deprecated Use navItems — kept for CommandMenu compatibility during migration */
export const navSections = navItems.map(({ sectionId, label }) => ({
  id: sectionId,
  label,
}))
