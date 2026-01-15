import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import floralHeader from "@/assets/floral-header.png";

const ClosingSection = () => {
  return (
    <section className="relative py-20 px-6 gradient-romantic overflow-hidden">
      {/* Floral Footer - flipped */}
      <motion.img
        src={floralHeader}
        alt="Floral decoration"
        className="absolute bottom-0 left-0 w-full h-auto object-cover pointer-events-none transform rotate-180"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
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
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <Heart className="w-12 h-12 text-primary mx-auto fill-current" />
          </motion.div>

          <h2 className="font-script text-4xl md:text-5xl text-primary mb-8">
            Terima Kasih
          </h2>

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

          <motion.p
            className="text-muted-foreground font-serif text-lg italic mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
          </motion.p>

          <motion.div
            className="ornament-divider max-w-xs mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <span className="px-4 text-primary">♥</span>
          </motion.div>

          <motion.p
            className="text-muted-foreground text-sm tracking-wide mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            Wassalamu'alaikum Warahmatullahi Wabarakatuh
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
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
