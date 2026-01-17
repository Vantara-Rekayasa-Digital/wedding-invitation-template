import mosqueHeader from "@/assets/background-undangan.png";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface HeroSectionProps {
  isOpen: boolean;
  onOpen: () => void;
}

const HeroSection = ({ isOpen, onOpen }: HeroSectionProps) => {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to");

  const targetDate = new Date("2026-01-26T10:00:00+07:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" },
  ];

  const handleOpenInvitation = () => {
    onOpen();
    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.section
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-auto"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Mosque Header Background */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative">
              <img
                src={mosqueHeader}
                alt="Dekorasi Masjid"
                className="max-w-none"
                style={{ height: "100vh", width: "auto" }}
              />
              {/* Overlay on image */}
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="relative z-10 text-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Bismillah */}
            <motion.div
              className="mb-3 sm:mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="font-arabic text-3xl sm:text-4xl md:text-5xl text-white mb-2" dir="rtl" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </p>
              <p className="text-white text-sm tracking-wide" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}>
                Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang
              </p>
            </motion.div>

            <motion.div
              className="ornament-divider max-w-xs mx-auto mb-8 sm:mb-10"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
            </motion.div>

            <motion.p
              className="text-white text-lg md:text-2xl mb-6 tracking-widest uppercase font-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
            >
              Undangan Walimatul Ursy
            </motion.p>

            <motion.div
              className="flex justify-center items-center max-w-4xl mx-auto mb-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-bold" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
                Aulia
              </h1>
              <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white mx-4" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
                &
              </span>
              <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-bold" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
                Wibowo
              </h1>
            </motion.div>

            <motion.div
              className="ornament-divider max-w-xs mx-auto mb-10 sm:mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <span className="px-4 text-white text-2xl" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}>✦</span>
            </motion.div>

            {/* Guest Name */}
            {guestName && (
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.6 }}
              >
                <p className="text-white text-sm mb-2 tracking-wide" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}>
                  Kepada Yth.
                </p>
                <p className="text-white font-serif text-xl md:text-2xl font-semibold" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
                  {decodeURIComponent(guestName)}
                </p>
              </motion.div>
            )}

            {/* Countdown */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <p className="text-white text-lg md:text-xl mb-3 tracking-wide" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}>
                Senin, 26 Januari 2026 • 09:30 WIB
              </p>
              <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto mb-4">
                {timeUnits.map((unit, index) => (
                  <motion.div
                    key={unit.label}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-white/20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.9 + index * 0.1 }}
                  >
                    <motion.span
                      className="block text-xl sm:text-2xl font-bold text-white"
                      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
                      key={unit.value}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {String(unit.value).padStart(2, "0")}
                    </motion.span>
                    <span className="text-white text-xs mt-1 block" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}>
                      {unit.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Open Invitation Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.6 }}
            >
              <Button
                onClick={handleOpenInvitation}
                className="bg-white/90 hover:bg-white text-primary font-serif text-lg px-8 py-6 rounded-full shadow-2xl backdrop-blur-sm border-2 border-white/50"
                size="lg"
              >
                <span className="flex items-center gap-2">
                  <span>✉</span>
                  <span>Buka Undangan</span>
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default HeroSection;
