import { motion } from "framer-motion";

const WelcomeSection = () => {
    return (
        <section className="relative py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-b from-primary/5 to-card islamic-pattern">
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
                        className="mb-6"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring" }}
                    >
                        <span className="text-5xl text-accent">☪</span>
                    </motion.div> */}

                    {/* Main greeting */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <p className="font-arabic text-2xl md:text-3xl text-primary mb-3" dir="rtl">
                            اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
                        </p>
                        <p className="text-muted-foreground text-sm tracking-wide font-serif">
                            Assalamu'alaikum Warahmatullahi Wabarakatuh
                        </p>
                    </motion.div>

                    {/* Welcome message */}
                    <motion.p
                        className="text-foreground font-serif text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        Alhamdulillahi Rabbil 'Alamin, kami panjatkan puji syukur ke hadirat Allah SWT yang telah
                        memberikan nikmat, taufik, dan hidayah-Nya sehingga hati kami dapat bersatu dalam
                        ikatan suci pernikahan menurut agama Islam.
                    </motion.p>

                    {/* Quranic reference
                    <motion.div
                        className="bg-card/50 rounded-xl p-6 mb-8 border border-primary/10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="font-arabic text-lg md:text-xl text-primary mb-3" dir="rtl">
                            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
                        </p>
                        <p className="text-muted-foreground text-sm italic mb-2">
                            "Dan di antara tanda-tanda kekuasaan-Nya ialah bahwa Dia menciptakan untukmu istri-istri dari jenismu sendiri,
                            supaya kamu cenderung dan merasa tenteram kepadanya, dan menjadikan di antaramu rasa kasih dan sayang.
                            Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
                        </p>
                        <p className="text-muted-foreground text-xs font-semibold">
                            (Surah Ar-Rum: 21)
                        </p>
                    </motion.div> */}

                    {/* Invitation message */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <p className="text-foreground font-serif text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                            Dengan sepenuh hati, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa
                            serta restu kepada kami di acara akad nikah ini.
                        </p>
                    </motion.div>

                    {/* Ornament divider */}
                    <motion.div
                        className="ornament-divider max-w-xs mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                    >
                        <span className="px-4 text-accent">✦</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WelcomeSection;
