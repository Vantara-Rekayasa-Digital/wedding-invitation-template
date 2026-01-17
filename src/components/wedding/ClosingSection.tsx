import mosqueBackground from "@/assets/background-undangan-2.png";
import { motion } from "framer-motion";

const ClosingSection = () => {
  const textShadowLight = { textShadow: "1px 1px 3px rgba(0,0,0,0.5)" };
  return (
    <>
      {/* Part 1: Jazakumullahu Khairan */}
      <section
        className="py-10 sm:py-20 px-4 sm:px-6 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${mosqueBackground})` }}
      >
        <div className="absolute inset-0 bg-gray-900/60" />
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
              <span className="text-4xl text-gold" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>☪</span>
            </motion.div>

            <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-white mb-2" style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}>
              Jazakumullahu Khairan
            </h2>

            <p className="text-white text-sm mb-8" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}>
              Semoga Allah membalas kebaikan Anda
            </p>

            <motion.p
              className="text-white font-serif text-lg md:text-xl leading-relaxed mb-8 text-justify"
              style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.7)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Merupakan suatu kehormatan dan kebahagiaan bagi kami
              apabila Bapak/Ibu/Saudara/i berkenan hadir
              untuk memberikan doa restu kepada kedua mempelai.
              Semoga Allah SWT memberkahi walimatul ursy ini,
              menjadikannya keluarga yang sakinah, mawaddah, wa rahmah.
            </motion.p>

          </motion.div>
        </div>
      </section>

      {/* Part 2: Sakinah Mawaddah Warahmah */}
      <section className="py-10 px-6 bg-primary/5 islamic-pattern">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Islamic ornament */}
            {/* <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <span className="text-4xl text-accent">☪</span>
            </motion.div> */}

            <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-primary mb-8">
              Sakinah Mawaddah Warahmah
            </h2>

            {/* Sakinah Mawaddah Warahmah Card */}
            <motion.div
              className="bg-card rounded-xl p-8 mb-8 border border-primary/20 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="font-arabic text-3xl text-primary mb-4" dir="rtl">
                السَّكِينَةُ وَالْمَوَدَّةُ وَالرَّحْمَةُ
              </p>
              <p className="text-foreground font-serif text-xl leading-relaxed mb-4">
                Sakinah Mawaddah Warahmah
              </p>
              <p className="text-muted-foreground text-base italic mb-6 border-t border-primary/20 pt-6">
                "Ketenangan, Kasih Sayang, dan Belas Kasihan"
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-primary mb-2">Sakinah (السَّكِينَةُ) - Ketenangan</p>
                  <p className="text-muted-foreground text-sm">
                    Ketenangan hati dan jiwa dalam menjalani kehidupan berumah tangga bersama pasangan.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Mawaddah (الْمَوَدَّةُ) - Kasih Sayang</p>
                  <p className="text-muted-foreground text-sm">
                    Kasih sayang yang tulus dan ikhlas yang tumbuh dari hati untuk saling mencintai dan menghormati.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Warahmah (الرَّحْمَةُ) - Belas Kasihan</p>
                  <p className="text-muted-foreground text-sm">
                    Belas kasihan dan kepedulian dalam setiap langkah kehidupan, saling memaafkan dan memahami.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm italic mt-6 pt-6 border-t border-primary/20">
                Semoga Allah memberikan ketiga hal ini dalam perjalanan hidup kami sebagai suami istri,
                dan semoga menjadi teladan keluarga yang sakinah bagi yang lain.
              </p>
            </motion.div>

            <motion.div
              className="ornament-divider max-w-xs mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="px-4 text-accent">✦</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Final Closing Message */}
        <motion.div
          className="mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-10 border border-primary/20 shadow-lg">
            <p className="text-foreground font-serif text-base md:text-lg leading-relaxed mb-4 text-center">
              Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i,<br />
              kami ucapkan jazakumullahu khairan katsiran.
            </p>

            <p className="font-arabic text-xl md:text-2xl text-primary mb-6 text-center" dir="rtl">
              وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </p>

            <p className="text-muted-foreground text-sm mb-4 text-center">
              Wassalamu'alaikum Warahmatullahi Wabarakatuh
            </p>

            <div className="border-t border-primary/20 pt-6 mt-6">
              <p className="text-foreground text-sm mb-2 text-center">
                Hormat kami,
              </p>
              <p className="text-muted-foreground text-xs mb-3 text-center">
                Keluarga Besar
              </p>
              <p className="font-script text-2xl md:text-3xl text-primary text-center">
                Putri Aulia Rachma & Trisilo Bambang Setyo Wibowo
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground text-sm">
            Made with ❤️ by Aulia-Wibowo Invitation
          </p>
        </motion.footer>
      </section>
    </>
  );
};

export default ClosingSection;
