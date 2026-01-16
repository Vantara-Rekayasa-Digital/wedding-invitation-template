import { motion } from "framer-motion";
import coupleSilhouette from "@/assets/couple-silhouette.png";

const CoupleSection = () => {
  return (
    <section className="py-20 px-6 bg-card islamic-pattern">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Assalamu'alaikum */}
          <motion.p 
            className="font-arabic text-2xl md:text-3xl text-primary mb-2" 
            dir="rtl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
          </motion.p>
          <p className="text-muted-foreground text-sm tracking-wide mb-6">
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </p>
          
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            Bismillahirrahmanirrahim
          </p>
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-4">
            Kami yang Berbahagia
          </h2>
          <p className="text-muted-foreground font-serif text-lg max-w-xl mx-auto mb-6">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i 
            untuk menghadiri acara pernikahan kami
          </p>
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="px-4 text-accent">☪</span>
          </div>
        </motion.div>

        {/* Couple Image */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/50 rounded-full" />
            <div className="absolute -inset-4 border-2 border-accent/30 rounded-full" />
            <img
              src={coupleSilhouette}
              alt="Pasangan pengantin"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary/20 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Couple Details */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Groom */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="text-accent text-2xl">✦</span>
            </div>
            <h3 className="font-script text-3xl md:text-4xl text-primary mb-4">
              Trisilo Bambang Setyo Wibowo
            </h3>
            <p className="text-muted-foreground font-serif text-lg mb-6">
              Putra dari
            </p>
            <div className="space-y-2">
              <p className="text-foreground font-semibold">
                Alm. H. R. Moelyono
              </p>
            </div>
          </motion.div>

          {/* Ornament divider for mobile */}
          <div className="md:hidden flex items-center justify-center">
            <motion.span
              className="text-4xl text-accent"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              &
            </motion.span>
          </div>

          {/* Bride */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="text-accent text-2xl">✦</span>
            </div>
            <h3 className="font-script text-3xl md:text-4xl text-primary mb-4">
              Putri Aulia Rachma
            </h3>
            <p className="text-muted-foreground font-serif text-lg mb-6">
              Putri dari
            </p>
            <div className="space-y-2">
              <p className="text-foreground font-semibold">
                Alm. Mulyantono Yakub
              </p>
            </div>
          </motion.div>
        </div>

        {/* Hidden & divider on desktop */}
        <motion.div
          className="hidden md:flex items-center justify-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-script text-6xl text-accent absolute left-1/2 -translate-x-1/2 top-1/2">
            &
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection;
