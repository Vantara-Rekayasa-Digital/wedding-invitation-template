import { motion } from "framer-motion";
import coupleSilhouette from "@/assets/couple-silhouette.png";

const CoupleSection = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            Bismillahirrahmanirrahim
          </p>
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-6">
            Kami yang Berbahagia
          </h2>
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="px-4 text-primary">✦</span>
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
            <h3 className="font-script text-3xl md:text-4xl text-primary mb-4">
              Aditya Pratama
            </h3>
            <p className="text-muted-foreground font-serif text-lg mb-6">
              Putra dari
            </p>
            <div className="space-y-2">
              <p className="text-foreground font-semibold">
                Bapak H. Ahmad Pratama
              </p>
              <p className="text-muted-foreground">&</p>
              <p className="text-foreground font-semibold">
                Ibu Hj. Siti Aminah
              </p>
            </div>
          </motion.div>

          {/* Ornament divider for mobile */}
          <div className="md:hidden flex items-center justify-center">
            <motion.span
              className="text-4xl text-primary"
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
            <h3 className="font-script text-3xl md:text-4xl text-primary mb-4">
              Sarah Amelia
            </h3>
            <p className="text-muted-foreground font-serif text-lg mb-6">
              Putri dari
            </p>
            <div className="space-y-2">
              <p className="text-foreground font-semibold">
                Bapak H. Muhammad Ridwan
              </p>
              <p className="text-muted-foreground">&</p>
              <p className="text-foreground font-semibold">
                Ibu Hj. Nur Hasanah
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
          <span className="font-script text-6xl text-primary absolute left-1/2 -translate-x-1/2 top-1/2">
            &
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection;
