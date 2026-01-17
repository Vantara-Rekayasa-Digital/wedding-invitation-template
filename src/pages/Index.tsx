import ClosingSection from "@/components/wedding/ClosingSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import EventSection from "@/components/wedding/EventSection";
import HeroSection from "@/components/wedding/HeroSection";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import SurahSection from "@/components/wedding/SurahSection";
import { useState } from "react";

const SectionDivider = () => (
  <div className="flex justify-center items-center py-4">
    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-24"></div>
    <span className="text-primary/40 mx-4 text-lg">✦</span>
    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-24"></div>
  </div>
);

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="overflow-x-hidden">
      <MusicPlayer />
      <HeroSection isOpen={isOpen} onOpen={() => setIsOpen(true)} />
      {isOpen && (
        <>
          <SurahSection />
          <SectionDivider />
          <CoupleSection />
          <SectionDivider />
          <EventSection />
          <SectionDivider />
          <ClosingSection />
        </>
      )}
    </main>
  );
};

export default Index;
