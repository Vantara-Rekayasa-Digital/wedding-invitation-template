import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventSection = () => {
  const handleOpenMaps = () => {
    window.open(
      "https://maps.google.com/?q=Masjid+Istiqlal+Jakarta",
      "_blank"
    );
  };

  return (
    <section className="py-20 px-6 bg-blush">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-6">
            Waktu & Tempat
          </h2>
          <div className="ornament-divider max-w-xs mx-auto">
            <span className="px-4 text-primary">✦</span>
          </div>
        </motion.div>

        {/* Event Card */}
        <motion.div
          className="bg-card rounded-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
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

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Date */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Tanggal</h3>
                <p className="text-muted-foreground">Sabtu, 15 Februari 2026</p>
              </motion.div>

              {/* Time */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Waktu</h3>
                <p className="text-muted-foreground">09:00 - 12:00 WIB</p>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Tempat</h3>
                <p className="text-muted-foreground">Masjid Istiqlal</p>
              </motion.div>
            </div>

            {/* Address */}
            <motion.div
              className="bg-muted/50 rounded-xl p-6 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-foreground font-serif text-lg leading-relaxed">
                Jl. Taman Wijaya Kusuma, Ps. Baru, Kecamatan Sawah Besar, 
                Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710
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
