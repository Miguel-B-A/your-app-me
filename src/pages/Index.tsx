import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/IntroScreen";

const Index = () => {
  const [showIntro, setShowIntro] = useState(
    () => !sessionStorage.getItem("intro_seen")
  );

  const handleIntroComplete = () => {
    sessionStorage.setItem("intro_seen", "true");
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
