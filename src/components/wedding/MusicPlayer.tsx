import mashaAllahMusic from "@/assets/music/alhijratu.mp3";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Pause, Play, Volume, Volume1, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface MusicPlayerProps {
    shouldPlay?: boolean;
}

const MusicPlayer = ({ shouldPlay = false }: MusicPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1.0);
    const [showVolumeBar, setShowVolumeBar] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const wasPlayingRef = useRef(false);

    // Detect if screen is mobile/small
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640); // sm breakpoint is 640px
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = volume;
            audio.muted = isMuted;
        }
    }, [volume, isMuted]);

    // Play music when shouldPlay prop becomes true
    useEffect(() => {
        const audio = audioRef.current;
        if (audio && shouldPlay && !isPlaying) {
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
    }, [shouldPlay]);

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

    const handleVolumeIconClick = () => {
        if (isMobile) {
            // On mobile, toggle volume bar visibility
            setShowVolumeBar(!showVolumeBar);
        } else {
            // On desktop, toggle mute
            toggleMute();
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    // Get volume icon based on current volume level
    const getVolumeIcon = () => {
        if (isMuted || volume === 0) {
            return <VolumeX className="h-4 w-4 text-primary" />;
        } else if (volume < 0.33) {
            return <Volume className="h-4 w-4 text-primary" />;
        } else if (volume < 0.66) {
            return <Volume1 className="h-4 w-4 text-primary" />;
        } else {
            return <Volume2 className="h-4 w-4 text-primary" />;
        }
    };

    return (
        <>
            {/* Hidden audio element */}
            <audio
                ref={audioRef}
                loop
                preload="auto"
                crossOrigin="anonymous"
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
                        <div
                            className="flex items-center space-x-2 relative"
                            onMouseEnter={() => !isMobile && setShowVolumeBar(true)}
                            onMouseLeave={() => !isMobile && setShowVolumeBar(false)}
                        >
                            <Button
                                onClick={handleVolumeIconClick}
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0 rounded-full hover:bg-primary/10"
                            >
                                {getVolumeIcon()}
                            </Button>

                            {/* Volume Slider - Show on click for mobile, on hover for desktop */}
                            <motion.div
                                className="overflow-hidden"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{
                                    width: showVolumeBar ? 64 : 0,
                                    opacity: showVolumeBar ? 1 : 0
                                }}
                                transition={{ duration: 0.2 }}
                            >
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
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default MusicPlayer;