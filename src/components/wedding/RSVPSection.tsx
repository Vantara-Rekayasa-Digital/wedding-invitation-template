import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const RSVPSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        attendance: "",
        guests: "1",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.attendance) {
            toast.error("Mohon lengkapi nama dan konfirmasi kehadiran");
            return;
        }

        setIsSubmitting(true);

        try {
            // Determine API URL based on environment
            const apiUrl = import.meta.env.DEV
                ? 'http://localhost:3001/api/rsvp'
                : '/api/rsvp';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Terima kasih atas konfirmasi kehadiran Anda!");

                // Reset form
                setFormData({
                    name: "",
                    attendance: "",
                    guests: "1",
                    message: "",
                });
            } else {
                toast.error(result.message || "Gagal menyimpan data");
            }
        } catch (error) {
            console.error('Error submitting RSVP:', error);
            toast.error("Terjadi kesalahan. Silakan coba lagi.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            className="mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="bg-card rounded-xl p-6 md:p-8 border border-primary/20 shadow-lg">
                <h3 className="font-script text-3xl md:text-4xl text-primary mb-2 text-center">
                    Konfirmasi Kehadiran
                </h3>
                <p className="text-muted-foreground text-sm text-center mb-8">
                    Mohon konfirmasi kehadiran Anda
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-serif">
                            Nama Lengkap <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Masukkan nama Anda"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="border-primary/30 focus:border-primary"
                            required
                        />
                    </div>

                    {/* Attendance Radio */}
                    <div className="space-y-3">
                        <Label className="text-foreground font-serif">
                            Konfirmasi Kehadiran <span className="text-red-500">*</span>
                        </Label>
                        <RadioGroup
                            value={formData.attendance}
                            onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                            className="flex flex-col space-y-2"
                        >
                            <div className="flex items-center space-x-3 p-3 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors">
                                <RadioGroupItem value="hadir" id="hadir" />
                                <Label htmlFor="hadir" className="cursor-pointer flex-1 font-serif">
                                    Insya Allah hadir
                                </Label>
                            </div>
                            <div className="flex items-center space-x-3 p-3 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors">
                                <RadioGroupItem value="tidak-hadir" id="tidak-hadir" />
                                <Label htmlFor="tidak-hadir" className="cursor-pointer flex-1 font-serif">
                                    Mohon maaf tidak bisa hadir
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Number of Guests */}
                    {formData.attendance === "hadir" && (
                        <motion.div
                            className="space-y-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Label htmlFor="guests" className="text-foreground font-serif">
                                Jumlah Tamu
                            </Label>
                            <Input
                                id="guests"
                                type="number"
                                min="1"
                                max="5"
                                value={formData.guests}
                                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                className="border-primary/30 focus:border-primary"
                            />
                            <p className="text-xs text-muted-foreground">
                                Termasuk Anda (maksimal 5 orang)
                            </p>
                        </motion.div>
                    )}

                    {/* Message */}
                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground font-serif">
                            Ucapan & Doa
                        </Label>
                        <Textarea
                            id="message"
                            placeholder="Tuliskan ucapan dan doa untuk kedua mempelai..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="border-primary/30 focus:border-primary min-h-[100px] resize-none"
                            rows={4}
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-serif text-base py-6"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Mengirim...
                            </span>
                        ) : (
                            "Kirim Konfirmasi"
                        )}
                    </Button>
                </form>
            </div>
        </motion.div>
    );
};

export default RSVPSection;
