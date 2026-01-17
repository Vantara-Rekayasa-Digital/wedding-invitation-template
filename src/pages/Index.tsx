import ClosingSection from "@/components/wedding/ClosingSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import EventSection from "@/components/wedding/EventSection";
import HeroSection from "@/components/wedding/HeroSection";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import SurahSection from "@/components/wedding/SurahSection";

const SectionDivider = () => (
  <div className="flex justify-center items-center py-4">
    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-24"></div>
    <span className="text-primary/40 mx-4 text-lg">✦</span>
    <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-24"></div>
  </div>
);

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <SectionDivider />
      <SurahSection />
      <SectionDivider />
      <CoupleSection />
      <SectionDivider />
      <EventSection />
      <SectionDivider />
      <ClosingSection />
      <SectionDivider />
      <MusicPlayer />
    </main>
  );
};

export default Index;
