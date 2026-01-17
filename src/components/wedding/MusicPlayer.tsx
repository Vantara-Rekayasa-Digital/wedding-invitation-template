import mashaAllahMusic from "@/assets/music/alhijratu.mp3";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(0.3);
    const audioRef = useRef<HTMLAudioElement>(null);
    const wasPlayingRef = useRef(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = volume;
            audio.muted = isMuted;

            // Auto-play attempt (may be blocked by browser)
            const playAudio = async () => {
                try {
                    await audio.play();
                    setIsPlaying(true);
                } catch (error) {
                    console.log("Auto-play blocked by browser");
                }
            };

            playAudio();
        }
    }, [volume, isMuted]);

    // Auto-pause/resume when tab visibility changes
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden && audioRef.current && !audioRef.current.paused) {
                // Pause when tab becomes hidden
                wasPlayingRef.current = true;
                audioRef.current.pause();
                setIsPlaying(false);
            } else if (!document.hidden && audioRef.current && audioRef.current.paused && wasPlayingRef.current) {
                // Resume when tab becomes visible (only if it was playing before)
                const resumeAudio = async () => {
                    try {
                        await audioRef.current?.play();
                        setIsPlaying(true);
                        wasPlayingRef.current = false;
                    } catch (error) {
                        console.log("Resume blocked by browser");
                        wasPlayingRef.current = false;
                    }
                };
                resumeAudio();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const togglePlay = async () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
                wasPlayingRef.current = false; // Reset auto-resume flag when manually paused
            } else {
                try {
                    await audio.play();
                    setIsPlaying(true);
                } catch (error) {
                    console.log("Play blocked by browser");
                }
            }
        }
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return (
        <>
            {/* Hidden audio element */}
            <audio
                ref={audioRef}
                loop
                preload="metadata"
            >
                <source src={mashaAllahMusic} type="audio/mpeg" />
                Browser Anda tidak mendukung pemutaran audio.
            </audio>

            {/* Music Control Button - Fixed Position */}
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
            >
                <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-primary/20 p-3">
                    <div className="flex items-center space-x-2">
                        {/* Play/Pause Button */}
                        <Button
                            onClick={togglePlay}
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 rounded-full hover:bg-primary/10"
                        >
                            {isPlaying ? (
                                <Pause className="h-4 w-4 text-primary" />
                            ) : (
                                <Play className="h-4 w-4 text-primary" />
                            )}
                        </Button>

                        {/* Volume Control */}
                        <div className="flex items-center space-x-2">
                            <Button
                                onClick={toggleMute}
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0 rounded-full hover:bg-primary/10"
                            >
                                {isMuted ? (
                                    <VolumeX className="h-4 w-4 text-primary" />
                                ) : (
                                    <Volume2 className="h-4 w-4 text-primary" />
                                )}
                            </Button>

                            {/* Volume Slider - Hidden on mobile, shown on larger screens */}
                            <div className="hidden sm:block">
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    className="w-16 h-1 bg-primary/20 rounded-lg appearance-none cursor-pointer slider"
                                    disabled={isMuted}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default MusicPlayer;