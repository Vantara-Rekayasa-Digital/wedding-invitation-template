import surahBackground from "@/assets/background-undangan-copy-2.webp";
import { motion } from "framer-motion";

const SurahSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center py-2 px-4 bg-gradient-to-b from-primary/5 to-card">
            <div className="max-w-3xl mx-auto w-full relative z-10 space-y-6">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Combined Surah Section: Ayat & Terjemahan */}
                    <motion.div
                        className="relative rounded-2xl p-8 border-2 border-gold/30 overflow-hidden shadow-2xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        style={{
                            backgroundImage: `url(${surahBackground})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%"
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-white/70 to-white/75" />
                        <div className="relative z-10">
                            {/* Decorative Top Line */}
                            <div className="w-16 h-1 bg-gradient-to-r from-gold via-primary to-gold mx-auto mb-6 rounded-full" />

                            {/* Bismillah */}
                            <p className="font-arabic text-3xl md:text-4xl text-primary mb-3" dir="rtl" style={{ letterSpacing: "0.1em" }}>
                                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
                                lkjhasdkjhaslkdjhasldkjhasdlkjhasdlkjh
                            </p>

                            {/* Decorative Middle Line */}
                            <div className="w-12 h-0.5 bg-gold mx-auto mb-4" />

                            {/* Ayat with digital Quran styling */}
                            <div className="bg-gradient-to-br from-primary/8 to-gold/5 rounded-xl p-4 md:p-10 border border-primary/10 mb-4">
                                <p className="font-arabic text-3xl md:text-4xl lg:text-5xl text-primary leading-relaxed md:leading-relaxed lg:leading-relaxed mb-0" dir="rtl" style={{ lineHeight: "2.8" }}>
                                    وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
                                </p>
                            </div>

                            {/* Decorative Divider */}
                            <div className="w-12 h-0.5 bg-gold mx-auto mb-3" />

                            {/* Terjemahan */}
                            <p className="text-foreground text-base md:text-lg text-justify leading-loose mb-6">
                                "Dan di antara tanda-tanda kekuasaan-Nya ialah bahwa Dia menciptakan untukmu istri-istri dari jenismu sendiri,
                                supaya kamu cenderung dan merasa tenteram kepadanya, dan menjadikan di antaramu rasa kasih dan sayang.
                                Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
                            </p>

                            {/* Decorative Bottom Line */}
                            <div className="w-16 h-1 bg-gradient-to-r from-gold via-primary to-gold mx-auto rounded-full mb-4" />
                            <p className="text-primary text-sm md:text-base font-semibold tracking-wider text-center">
                                (Surah Ar-Rum: 21)
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SurahSection;
