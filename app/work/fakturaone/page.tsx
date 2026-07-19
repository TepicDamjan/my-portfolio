import type { Metadata } from "next";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { fakturaOneCaseStudy } from "@/lib/case-studies/fakturaone";

export const metadata: Metadata = {
  title: "FakturaOne — Case Study",
  description: fakturaOneCaseStudy.tagline,
};

export default function FakturaOneCaseStudyPage() {
  return (
    <>
      <Header />
      <main>
        <CaseStudyView study={fakturaOneCaseStudy} />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
