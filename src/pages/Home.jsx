import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import WhatsAppButton from "@/components/portfolio/WhatsAppButton";
import { HERO_IMAGE, PORTRAIT_IMAGE } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="bg-[#080808] min-h-screen">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <ProjectsSection />
      <AboutSection portraitImage={PORTRAIT_IMAGE} />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
