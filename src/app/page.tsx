import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Nav from "@/components/Nav";
import Rooms from "@/components/Rooms";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      {/* Menu band sits below the hero on the home page. */}
      <Nav />
      <Rooms />
      <HowItWorks />
      <Stats />
      <FinalCTA />
    </main>
  );
}
