import type { CaseStudy } from "@/lib/case-studies/types";

export const fakturaOneCaseStudy: CaseStudy = {
  slug: "fakturaone",
  title: "FakturaOne",
  tagline:
    "An invoicing and business management platform for freelancers and small businesses in the Balkans — documents, clients, PDFs, and email delivery in one place.",
  gradient: "from-[#05070A] via-[#0c1824] to-[#05070A]",
  meta: {
    role: "Design & Development",
    year: "2025–2026",
    type: "SaaS Product",
  },
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "@react-pdf/renderer",
    "Resend",
    "Vercel",
  ],
  liveUrl: "https://fakturaone.app",
  images: {
    hero: {
      src: "/FakturaOneHero.png",
      alt: "FakturaOne invoicing dashboard",
    },
  },
  overview: {
    problem: {
      label: "Problem",
      title: "Invoicing tools are either too heavy or too foreign",
      body: "Small businesses and freelancers in the region either fight with spreadsheets and Word templates, or pay for enterprise ERP systems built for other markets. Existing tools rarely speak the local language — literally and figuratively: local document types, bank account formats, and business customs are an afterthought.",
    },
    solution: {
      label: "Solution",
      title: "One focused app for the whole billing flow",
      body: "FakturaOne covers the full document lifecycle: invoices, quotes (predračuni), and delivery notes (otpremnice) with automatic numbering per type, a client database, per-company settings with logos and bank accounts, real PDF export, and sending documents by email — all localized for how businesses here actually work.",
    },
  },
  features: [
    {
      title: "Three document types, one flow",
      description:
        "Invoices, quotes, and delivery notes share a single creation flow with type-specific numbering prefixes (INV, PRO, OTP), due-date labels, totals, and default notes — so switching document type never means relearning the UI.",
    },
    {
      title: "Multi-company support",
      description:
        "One account can manage multiple companies, each with its own logo, bank accounts, document numbering, and settings. The active company context follows you across the dashboard.",
    },
    {
      title: "Real PDF generation",
      description:
        "Documents render server-side with @react-pdf/renderer into properly named files — not a window.print() hack. The same document model drives the on-screen preview and the PDF, so they never drift apart.",
    },
    {
      title: "Email delivery with attachments",
      description:
        "Documents go straight from the app to the client's inbox via Resend, with the PDF attached and a localized message template — no downloading and re-attaching in a mail client.",
    },
  ],
  flow: [
    {
      step: "01",
      title: "Set up a company",
      description:
        "Add company details, logo, and bank accounts once — they appear on every document automatically.",
    },
    {
      step: "02",
      title: "Create a document",
      description:
        "Pick invoice, quote, or delivery note. Client data auto-fills from the client base; numbering is automatic.",
    },
    {
      step: "03",
      title: "Preview & export",
      description:
        "Review the document exactly as the client will see it, then download a named PDF.",
    },
    {
      step: "04",
      title: "Send & track",
      description:
        "Email the document with one click and track statuses — draft, sent, paid, overdue.",
    },
  ],
  technical: {
    label: "Architecture",
    title: "Next.js App Router on a Supabase backbone",
    body: "The app is a Next.js 16 application with Supabase handling auth, Postgres storage, and row-level security so each user only ever sees their own companies and documents. Server actions drive document mutations; a shared document model feeds both the live preview and the server-side PDF renderer. Emails are sent through Resend with generated PDFs attached. Typed database definitions keep the Supabase schema and the TypeScript layer in sync.",
  },
  learnings: {
    label: "Learnings",
    title: "Localization is a feature, not a translation",
    body: "The hardest problems weren't technical — they were about matching how local businesses actually issue documents: grammatical cases in UI copy (kreiraj fakturu vs. nova faktura), document-type-specific labels, and defaults that make sense for the region. Building the document model around those differences from day one made features like PDF export and email templates dramatically simpler later.",
  },
};
