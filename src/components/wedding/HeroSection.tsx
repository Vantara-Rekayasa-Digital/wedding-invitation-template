import { motion } from "framer-motion";
import floralHeader from "@/assets/floral-header.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-islamic islamic-pattern">
      {/* Floral Header */}
      <motion.img
        src={floralHeader}
        alt="Floral decoration"
        className="absolute top-0 left-0 w-full h-auto object-cover pointer-events-none opacity-80"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      
      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 py-20 mt-32 md:mt-40"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Bismillah */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="font-arabic text-3xl md:text-4xl text-primary mb-2" dir="rtl">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <p className="text-muted-foreground text-sm tracking-wide">
            Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang
          </p>
        </motion.div>

        <motion.div
          className="ornament-divider max-w-xs mx-auto mb-8"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span className="px-4 text-accent text-lg">☪</span>
        </motion.div>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl mb-4 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Undangan Pernikahan
        </motion.p>

        <motion.h1
          className="font-script text-5xl md:text-7xl lg:text-8xl text-primary mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Aditya & Sarah
        </motion.h1>

        <motion.p
          className="text-foreground text-lg md:text-xl font-serif italic max-w-2xl mx-auto mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu 
          pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa 
          tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
        </motion.p>

        <motion.p
          className="text-muted-foreground text-sm tracking-wide mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          — QS. Ar-Rum: 21
        </motion.p>

        <motion.div
          className="ornament-divider max-w-xs mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="px-4 text-accent">✦</span>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <p className="text-muted-foreground text-sm mb-2">Sabtu, 15 Februari 2026</p>
          <p className="text-primary font-semibold">Insya Allah akan dilaksanakan</p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2 },
          y: { repeat: Infinity, duration: 1.5 }
        }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
