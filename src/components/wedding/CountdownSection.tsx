import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CountdownSection = () => {
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

  return (
    <section className="py-16 px-6 bg-primary/10 islamic-pattern">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Arabic title for Akad */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="font-arabic text-2xl md:text-3xl text-primary" dir="rtl">عَقْدُ النِّكَاحِ</p>
            <p className="text-muted-foreground text-xs tracking-widest uppercase mt-1">Akad Nikah (Ijab & Qabul)</p>
          </motion.div>

          <h2 className="font-script text-3xl md:text-4xl text-primary mb-2">
            Menghitung Hari Istimewa
          </h2>
          <p className="text-muted-foreground text-sm mb-2">
            Senin, 26 Januari 2026 • 10:00 WIB
          </p>
          <p className="text-muted-foreground text-xs mb-8 italic">
            07 Sya'ban 1447 H
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-lg mx-auto">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                className="bg-card rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-primary/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.span
                  className="block text-2xl md:text-4xl font-bold text-primary"
                  key={unit.value}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {String(unit.value).padStart(2, "0")}
                </motion.span>
                <span className="text-muted-foreground text-xs md:text-sm mt-1 block">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;
