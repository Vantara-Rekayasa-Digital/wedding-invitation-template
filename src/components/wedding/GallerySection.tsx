import { motion } from "framer-motion";

const GallerySection = () => {
    const images = [
        "https://invitinaja.id/wp-content/uploads/elementor/thumbs/MONO0021-scaled-ram1u4g08bblymoozc2k0o1vc80scjr0fjsgk89ggw.webp",
        "https://invitinaja.id/wp-content/uploads/elementor/thumbs/MONO0034-scaled-ram1ujhfvl7uuq4f8my3smfdmr1kd3492tsk71ij84.webp",
        "https://invitinaja.id/wp-content/uploads/elementor/thumbs/MONO0080-scaled-ram1ujhfvl7uuq4f8my3smfdmr1kd3492tsk71ij84.webp"
    ];

    return (
        <section className="py-20 px-6 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-script text-4xl md:text-5xl text-primary mb-6">
                        Galeri
                    </h2>
                    <div className="ornament-divider max-w-xs mx-auto">
                        <span className="px-4 text-accent">✦</span>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                                <img
                                    src={image}
                                    alt={`Wedding photo ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;