import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";

const RSVPSection = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [attendance, setAttendance] = useState<"yes" | "no" | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log({ name, message, attendance });
    };

    const sampleMessages = [
        {
            name: "Nayla",
            message: "Samawa rafi & hana",
            time: "2 hari yang lalu"
        },
        {
            name: "Gubuk Pulsa",
            message: "Happy Wedding, Kiranya Tuhan melimpahkan berkat sepanjang usia.Jika Tuhan mempersatukan, tak seorangpun bisa memisahkan.",
            time: "2 hari yang lalu"
        },
        {
            name: "Pakdhe Trisilo Bambang SW",
            message: "Selamat Menempuh Hidup Baru...",
            time: "2 hari yang lalu"
        }
    ];

    return (
        <section className="py-20 px-6 bg-card">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-script text-4xl md:text-5xl text-primary mb-6">
                        Ucapan & Doa
                    </h2>
                    <p className="text-muted-foreground font-serif text-lg max-w-2xl mx-auto mb-6">
                        Doakan dan berikan ucapan terbaik untuk Kami di hari pernikahan
                    </p>
                    <p className="text-muted-foreground text-sm">
                        Kepada tamu undangan diharapkan untuk mengisi form Ucapan & RSVP kehadiran di bawah ini
                    </p>
                    <div className="ornament-divider max-w-xs mx-auto mt-6">
                        <span className="px-4 text-accent">✦</span>
                    </div>
                </motion.div>

                {/* RSVP Form */}
                <motion.div
                    className="bg-muted/50 rounded-2xl p-8 mb-12 border border-primary/10"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Input
                                placeholder="Nama Anda"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="text-center text-lg"
                            />
                        </div>

                        <div>
                            <Textarea
                                placeholder="Tulis ucapan dan doa untuk mempelai..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                className="resize-none"
                            />
                        </div>

                        <div className="flex justify-center space-x-4">
                            <Button
                                type="button"
                                variant={attendance === "yes" ? "default" : "outline"}
                                onClick={() => setAttendance("yes")}
                                className="flex-1 max-w-xs"
                            >
                                Saya Akan Hadir
                            </Button>
                            <Button
                                type="button"
                                variant={attendance === "no" ? "default" : "outline"}
                                onClick={() => setAttendance("no")}
                                className="flex-1 max-w-xs"
                            >
                                Maaf, Saya Tidak Hadir
                            </Button>
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                            Kirim Ucapan
                        </Button>
                    </form>
                </motion.div>

                {/* Sample Messages */}
                <div className="space-y-6">
                    {sampleMessages.map((msg, index) => (
                        <motion.div
                            key={index}
                            className="bg-card rounded-xl p-6 shadow-sm border border-primary/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary font-semibold text-sm">
                                        {msg.name.charAt(0)}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <h4 className="font-semibold text-foreground">{msg.name}</h4>
                                        <span className="text-muted-foreground text-sm">{msg.time}</span>
                                    </div>
                                    <p className="text-muted-foreground">{msg.message}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RSVPSection;