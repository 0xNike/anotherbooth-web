import CursorGlow from "@/components/CursorGlow";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Nav from "@/components/Nav";
import Rooms from "@/components/Rooms";
import ScrollReveal from "@/components/ScrollReveal";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <GrainOverlay />
      <CursorGlow />
      <ScrollReveal />

      <Nav />

      <main id="main">
        <Hero />
        <Rooms />
        <HowItWorks />
        <Stats />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
