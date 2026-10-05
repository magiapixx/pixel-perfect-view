export const practices = [
  { slug: "family-law", title: "Family law", short: "Divorce, separation, parenting plans and support — handled with steadiness and care.", accent: "bg-blush", topics: ["Divorce & separation", "Child custody & support", "Prenuptial agreements"] },
  { slug: "employment-law", title: "Employment law", short: "Clear advice when discrimination, harassment or unfair treatment follows you to work.", accent: "bg-sage", topics: ["Discrimination", "Pregnancy rights", "Workplace harassment"] },
  { slug: "personal-safety", title: "Personal safety", short: "Practical, confidential help with protective orders and the legal steps that keep you safe.", accent: "bg-lavender", topics: ["Protective orders", "Safety planning", "Court representation"] },
] as const;

export const resources = [
  { slug: "first-steps-after-separation", title: "Your first steps after separation", type: "Checklist", read: "8 min", summary: "A calm, practical list for the first days and weeks after deciding to separate." },
  { slug: "preparing-for-custody-mediation", title: "Preparing for custody mediation", type: "Guide", read: "12 min", summary: "Know what to gather, what to expect and how to keep your children at the center." },
  { slug: "workplace-discrimination-notes", title: "How to document workplace discrimination", type: "Worksheet", read: "6 min", summary: "A simple way to record patterns, preserve evidence and prepare for a first conversation." },
] as const;

export const testimonials = [
  ["I walked in shaking and walked out with a plan. They never once made me feel small.", "Danielle R."],
  ["Custody was the hardest year of my life. Mara made it the most bearable.", "Priya S."],
  ["They explained everything twice, gently, without me asking.", "Leah M."],
] as const;
