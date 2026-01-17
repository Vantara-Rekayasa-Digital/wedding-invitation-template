import mosqueHeader from "@/assets/background-undangan.png";
import { motion } from "framer-motion";

const CoupleSection = () => {
  // Define text shadow constants to reduce repetition
  const textShadowLight = { textShadow: "1px 1px 3px rgba(0,0,0,0.5)" };
  const textShadowMedium = { textShadow: "1px 1px 4px rgba(0,0,0,0.6)" };
  const textShadowHeavy = { textShadow: "1px 1px 5px rgba(0,0,0,0.6)" };
  const textShadowVeryHeavy = { textShadow: "1px 1px 5px rgba(0,0,0,0.7)" };
  return (
    <section>

      {/* Main Content with Mosque Background */}
      <div
        className="py-8 px-6 bg-cover bg-center relative text-white"
        style={{ backgroundImage: `url(${mosqueHeader})`, backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Bismillah & Invitation */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-arabic text-2xl mb-3" dir="rtl" style={textShadowVeryHeavy}>
                اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
              </p>
              <p className="text-sm tracking-wide font-serif" style={textShadowLight}>
                Assalamu'alaikum Warahmatullahi Wabarakatuh
              </p>
            </motion.div>
            <br />
            <p
              className="font-serif text-lg max-w-xl mx-auto mb-12"
              style={textShadowLight}
            >
              Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
              mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara walimatul ursy putra-putri
              kami:
            </p>

            {/* Couple Details */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 items-center mb-12">
              <div className="lg:col-span-2 text-center">
                <h3
                  className="font-script text-3xl mb-2"
                  style={textShadowMedium}
                >
                  Putri Aulia Rachma
                </h3>
                <p
                  className="font-serif text-base"
                  style={textShadowLight}
                >
                  Putri Kedua dari Alm. Mulyantono Yakub & Alm. Rahmawati
                </p>
              </div>
              <span className="font-script text-3xl sm:text-4xl text-white mx-4" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}>
                &
              </span>
              <div className="lg:col-span-2 text-center">
                <h3
                  className="font-script text-3xl mb-2"
                  style={textShadowMedium}
                >
                  Trisilo Bambang Setyo Wibowo
                </h3>
                <p
                  className="font-serif text-base"
                  style={textShadowLight}
                >
                  Putra Ketiga dari Alm. H. R. Moelyono & Hj. Sutiyatmi
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
