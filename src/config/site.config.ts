export const siteConfig = {
  name: "Aman",
  role: "Content Creator & Personal Brand Builder",
  tagline: "I turn talking-head footage into videos people actually finish.",
  bio: "Self-taught video editor from Himachal Pradesh specializing in short-form storytelling, talking-head retention, and visual branding.",

  email: "amanxmedia@gmail.com",
  phone: "", // used by the contact call button; blank hides it
  siteUrl: "https://yourportfolio.com",

  avatar: "/images/avatar.png",
  resume: "",
  calLink: "your-calendly-link", // your Cal.com handle

  githubUsername: "", 

  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/amankumar458/",
    github: "",
    instagram: "https://www.instagram.com/raw.byaman/",
    medium: "",
  },

  seo: {
    defaultTitle: "Aman | Video Editor",
    defaultDescription: "Portfolio of Aman, Video Editor & Motion Designer.",
    twitterHandle: "",
    keywords: "video editor, motion designer, youtube editor, premiere pro",
  },

  nav: [
    { name: "Case Studies", path: "/projects", description: "Breakdowns of my edits." },
    { name: "Experience", path: "/experience", description: "Where I've worked." },
    { name: "Tools", path: "/tools", description: "Software and hardware I use." },
    { name: "Contact", path: "/contact", description: "Get in touch." },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
