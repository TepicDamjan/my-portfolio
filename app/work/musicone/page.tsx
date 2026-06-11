import type { Metadata } from "next";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { musicOneCaseStudy } from "@/lib/case-studies/musicone";

export const metadata: Metadata = {
  title: "MusicOne — Case Study | Damjan Tepic",
  description: musicOneCaseStudy.tagline,
};

export default function MusicOneCaseStudyPage() {
  return (
    <>
      <Header />
      <main>
        <CaseStudyView study={musicOneCaseStudy} />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
