import HeroSection from "@/components/wedding/HeroSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import EventSection from "@/components/wedding/EventSection";
import ClosingSection from "@/components/wedding/ClosingSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <CoupleSection />
      <CountdownSection />
      <EventSection />
      <ClosingSection />
    </main>
  );
};

export default Index;
