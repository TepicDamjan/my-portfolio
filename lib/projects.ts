export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  layout: "wide-left" | "narrow-right" | "wide-full";
  gradient: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  caseStudyHref?: string;
};

export const projects: Project[] = [
  {
    id: "fakturaone",
    index: "01",
    title: "FakturaOne",
    description:
      "Invoicing and business management platform for freelancers and small businesses — create invoices, estimates, and delivery notes, manage clients, export PDFs, and send documents by email.",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    layout: "wide-left",
    gradient: "from-[#05070A] via-[#0c1824] to-[#05070A]",
    image: "/FakturaOneHero.png",
    imageAlt: "FakturaOne invoicing dashboard",
    href: "https://fakturaone.app",
  },
  {
    id: "musicone",
    index: "02",
    title: "MusicOne",
    description:
      "Web app for downloading music from Spotify and YouTube — paste a link, pick a format (MP3, FLAC, or MP4), and save tracks locally with a clean, minimal interface.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    layout: "narrow-right",
    gradient: "from-[#35524A] via-[#57C785] to-[#BCF4DE]",
    image: "/MusicOneHero.png",
    imageAlt: "MusicOne home screen with Spotify and YouTube URL input",
    caseStudyHref: "/work/musicone",
  },
  {
    id: "glazure-cubak",
    index: "03",
    title: "Glazure Cubak",
    description:
      "Business website for a floor screeding company in Banja Luka — service overview, process steps, project gallery, FAQ, and direct contact via phone, Viber, and WhatsApp.",
    tags: ["Next.js", "TypeScript", "Tailwind", "SEO"],
    layout: "wide-full",
    gradient: "from-[#3a3228] via-[#5c5348] to-[#2a2520]",
    image: "/GlazureCubakHero.png",
    imageAlt: "Glazure Cubak business website homepage",
    href: "https://glazurecubak.com",
  },
];

export const expertise = [
  "React & Next.js",
  "UI/UX Design",
  "Motion Systems",
  "Digital Strategy",
] as const;
