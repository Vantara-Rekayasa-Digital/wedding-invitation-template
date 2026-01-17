import eventBackground from "@/assets/background-undangan-3.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const EventSection = () => {
  const handleOpenMaps = () => {
    window.open(
      "https://maps.app.goo.gl/ALch4CSkH7ZZsy2U6"
    );
  };

  return (
    <section
      className="relative py-10 px-6 overflow-hidden bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${eventBackground})`,
        backgroundSize: "cover"
      }}
    >
      <div className="absolute inset-0 bg-emerald-light/70" />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-4xl text-primary mb-2">
            Waktu & Tempat
          </h2>
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="px-4 text-accent">☪</span>
          </div>
        </motion.div>

        {/* Event Card */}
        <motion.div
          className="bg-card rounded-2xl shadow-xl p-6 border border-primary/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            {/* Arabic text for Akad */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-arabic text-xl text-primary" dir="rtl">عَقْدُ النِّكَاحِ</p>
            </motion.div>

            <motion.div
              className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <span className="text-primary font-semibold tracking-widest uppercase text-sm">
                Akad Nikah
              </span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {/* Date */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/20">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Tanggal</h3>
                <p className=""><span className="text-xl">Senin, 26 Januari 2026</span></p>
                <p className="text-sm"><span className="text-md">07 Sya'ban 1447 H</span></p>
              </motion.div>

              {/* Time */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/20">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Waktu</h3>
                <p className="text-lg"><span className="text-xl">09:30</span> WIB - Selesai</p>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/20">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Tempat</h3>
                <p className="text-lg">Masjid Jami' Al-Mustaqiim</p>
              </motion.div>
            </div>

            {/* Address */}
            <motion.div
              className="bg-muted/50 rounded-xl p-6 mb-8 border border-primary/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-foreground font-serif text-lg leading-relaxed">
                Jl. Alamanda Mas III No.17, Bambu Apus, Kec. Pamulang, Kota Tangerang Selatan, Banten 15415
              </p>
            </motion.div>

            {/* Map Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <Button
                onClick={handleOpenMaps}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full font-semibold"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Buka Google Maps
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;
