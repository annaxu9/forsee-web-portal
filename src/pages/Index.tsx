import { Hero } from "@/components/Hero";
import Demo from "@/components/Demo";
import { Features } from "@/components/Features";
import { GuiOverview } from "@/components/GuiOverview";
import { AnalysisModes } from "@/components/AnalysisModes";
import { HardwareLibrary } from "@/components/HardwareLibrary";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/NavBar";
import { TeamSection } from "@/components/TeamSection";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Hero />
        <Demo />
        <Features />
        <GuiOverview />
        <AnalysisModes />
        <HardwareLibrary />
        <TeamSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
