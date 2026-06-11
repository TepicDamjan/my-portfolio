import { ContactCTA } from "@/components/ContactCTA";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WorkGrid } from "@/components/WorkGrid";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkGrid />
        <Expertise />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
