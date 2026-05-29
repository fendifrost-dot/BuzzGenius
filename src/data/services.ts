export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  startingPrice: string;
  deliverables: string[];
  idealClients?: string[];
  upsell?: string;
  pricingTiers?: { label: string; price: string }[];
  packages?: { label: string; price: string }[];
  addOns?: string[];
  platforms?: string[];
  services?: string[];
  recurringNote?: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "brand",
    name: "Brand Development & Identity",
    description:
      "Strategic brand systems that position your business for credibility, recognition, and scalable growth.",
    startingPrice: "$1,500",
    deliverables: [
      "Brand strategy",
      "Logo design",
      "Brand guidelines",
      "Typography systems",
      "Color systems",
      "Messaging development",
      "Brand positioning",
      "Social branding assets",
    ],
    idealClients: ["Startups", "Rebrands", "Public figures", "New businesses"],
    upsell: "Monthly brand management retainers available.",
  },
  {
    id: "web",
    name: "Website Design & Development",
    description:
      "Conversion-focused websites with CRM, payments, and analytics built for operational scale.",
    startingPrice: "$2,500+",
    pricingTiers: [
      { label: "Starter Website", price: "$2,500+" },
      { label: "Business Website", price: "$5,000+" },
      { label: "Enterprise Build", price: "$10,000+" },
    ],
    deliverables: [
      "Custom responsive website",
      "SEO optimization",
      "CRM integrations",
      "Booking systems",
      "Lead capture forms",
      "Stripe integrations",
      "CMS integration",
      "Analytics setup",
      "Mobile optimization",
      "Conversion optimization",
    ],
    recurringNote: "Website hosting & maintenance: $149–$499/month",
  },
  {
    id: "ai",
    name: "AI Automation Systems",
    description:
      "Technology-enabled workflows that reduce manual work and improve lead handling, reporting, and operations.",
    startingPrice: "$3,500",
    deliverables: [
      "AI workflow development",
      "CRM automations",
      "AI customer support systems",
      "Lead qualification systems",
      "AI content pipelines",
      "Business process automation",
      "Internal operational automations",
      "AI-assisted reporting systems",
    ],
    recurringNote: "Monthly support plans: $500–$5,000/month",
  },
  {
    id: "social",
    name: "Social Media Management",
    description:
      "Consistent multi-platform presence with strategy, creative, and performance reporting.",
    startingPrice: "$750/month",
    packages: [
      { label: "Starter", price: "$750/month" },
      { label: "Growth", price: "$1,500/month" },
      { label: "Enterprise", price: "$3,500+/month" },
    ],
    deliverables: [
      "Content scheduling",
      "Caption writing",
      "Graphic creation",
      "Audience engagement",
      "Platform growth strategy",
      "Analytics reporting",
      "Trend research",
      "Multi-platform posting",
    ],
    addOns: ["Influencer campaigns", "Paid ads management", "Short-form video editing"],
  },
  {
    id: "content",
    name: "Content Production",
    description:
      "Professional media production for brands, artists, and organizations that need consistent visual storytelling.",
    startingPrice: "$1,200",
    services: [
      "Commercial video production",
      "Music content",
      "Brand photography",
      "Product photography",
      "Podcast production",
      "Interview production",
      "Reels/TikTok editing",
      "YouTube production",
      "Event coverage",
    ],
    deliverables: ["Project-based production", "Monthly content packages available"],
    recurringNote: "Monthly content retainers available.",
  },
  {
    id: "ads",
    name: "Paid Advertising Management",
    description:
      "Full-funnel paid media with creative testing, conversion tracking, and weekly optimization.",
    startingPrice: "$1,000+ setup",
    pricingTiers: [
      { label: "Setup Fee", price: "$1,000+" },
      { label: "Management Fee", price: "10–20% of ad spend" },
      { label: "Recommended Minimum", price: "$1,500/month" },
    ],
    platforms: ["Meta Ads", "Google Ads", "TikTok Ads", "YouTube Ads", "Spotify Ads"],
    deliverables: [
      "Campaign setup",
      "Creative testing",
      "Audience targeting",
      "Funnel optimization",
      "Weekly reporting",
      "Conversion tracking",
    ],
  },
  {
    id: "music",
    name: "Music & Entertainment Marketing",
    description:
      "Release strategy, DSP campaigns, and artist branding built for sustainable audience growth.",
    startingPrice: "$1,000",
    services: [
      "DSP campaign strategy",
      "Playlist marketing",
      "Rollout planning",
      "Cover art development",
      "Artist branding",
      "Content campaigns",
      "Influencer outreach",
      "Press strategy",
    ],
    deliverables: ["Campaign strategy", "Creative rollout", "Performance reporting"],
    recurringNote: "Monthly artist development retainers: $2,000–$10,000/month",
  },
  {
    id: "consulting",
    name: "Business Consulting & Growth Strategy",
    description:
      "Executive-level guidance on revenue systems, operations, and funding readiness.",
    startingPrice: "$250/hour",
    pricingTiers: [
      { label: "Consultation", price: "$250/hour" },
      { label: "Growth Packages", price: "$2,500+" },
    ],
    deliverables: [
      "Business audits",
      "Revenue strategy",
      "Operations consulting",
      "Marketing systems",
      "Scaling strategy",
      "Funding preparation",
      "Digital transformation consulting",
    ],
  },
  {
    id: "design",
    name: "Graphic Design & Creative Services",
    description:
      "Fast-turn creative assets for campaigns, merchandise, print, and digital channels.",
    startingPrice: "$250",
    services: [
      "Flyers",
      "Album covers",
      "Ad creatives",
      "Print materials",
      "Merchandise graphics",
      "Packaging design",
      "Presentation decks",
      "Digital assets",
    ],
    deliverables: ["Per-project creative", "Monthly design retainers"],
    recurringNote: "Recurring monthly design packages available.",
  },
];
