import { motion } from "framer-motion";
import floralHeader from "@/assets/floral-header.png";

const ClosingSection = () => {
  return (
    <section className="relative py-20 px-6 gradient-islamic islamic-pattern overflow-hidden">
      {/* Floral Footer - flipped */}
      <motion.img
        src={floralHeader}
        alt="Floral decoration"
        className="absolute bottom-0 left-0 w-full h-auto object-cover pointer-events-none transform rotate-180 opacity-80"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Islamic ornament */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <span className="text-4xl text-accent">☪</span>
          </motion.div>

          <h2 className="font-script text-4xl md:text-5xl text-primary mb-6">
            Jazakumullahu Khairan
          </h2>
          
          <p className="text-muted-foreground text-sm mb-8">
            Semoga Allah membalas kebaikan Anda
          </p>

          <motion.p
            className="text-foreground font-serif text-lg md:text-xl leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami 
            apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan 
            doa restu kepada kedua mempelai.
          </motion.p>

          {/* Dua/Prayer */}
          <motion.div
            className="bg-card/50 rounded-xl p-6 mb-8 border border-primary/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-arabic text-xl md:text-2xl text-primary mb-3" dir="rtl">
              بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
            </p>
            <p className="text-muted-foreground text-sm italic">
              "Semoga Allah memberkahimu dan memberkahi atasmu, serta mengumpulkan kalian berdua dalam kebaikan"
            </p>
          </motion.div>

          <motion.p
            className="text-muted-foreground font-serif text-lg italic mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
          </motion.p>

          <motion.div
            className="ornament-divider max-w-xs mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <span className="px-4 text-accent">✦</span>
          </motion.div>

          <motion.p
            className="font-arabic text-xl text-primary mb-4"
            dir="rtl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
          </motion.p>
          
          <motion.p
            className="text-muted-foreground text-sm tracking-wide mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.85 }}
          >
            Wassalamu'alaikum Warahmatullahi Wabarakatuh
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <p className="font-script text-3xl md:text-4xl text-primary">
              Aditya & Sarah
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-20 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <p className="text-muted-foreground text-sm">
          Made with ❤️ for Aditya & Sarah
        </p>
      </motion.footer>
    </section>
  );
};

export default ClosingSection;
