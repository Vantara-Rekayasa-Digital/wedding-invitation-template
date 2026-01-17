import { motion } from "framer-motion";

const SurahSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-b from-primary/5 to-card islamic-pattern">
            <div className="max-w-3xl mx-auto w-full">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Quranic reference */}
                    <motion.div
                        className="bg-card/50 rounded-xl p-8 md:p-12 mb-8 border border-primary/10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        {/* Bismillah */}
                        <p className="font-arabic text-2xl md:text-3xl text-foreground mb-8" dir="rtl">
                            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                        </p>

                        {/* Ayat with digital Quran styling */}
                        <div className="bg-primary/5 rounded-lg p-6 md:p-8 mb-8 border-l-4 border-primary">
                            <p className="font-arabic text-2xl md:text-3xl lg:text-4xl text-foreground leading-loose md:leading-loose lg:leading-loose mb-0" dir="rtl" style={{ lineHeight: "2.5" }}>
                                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
                            </p>
                        </div>

                        <p className="text-muted-foreground text-base text-justify italic mb-4 leading-relaxed">
                            "Dan di antara tanda-tanda kekuasaan-Nya ialah bahwa Dia menciptakan untukmu istri-istri dari jenismu sendiri,
                            supaya kamu cenderung dan merasa tenteram kepadanya, dan menjadikan di antaramu rasa kasih dan sayang.
                            Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
                        </p>
                        <p className="text-muted-foreground text-sm md:text-base font-semibold">
                            (Surah Ar-Rum: 21)
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SurahSection;
