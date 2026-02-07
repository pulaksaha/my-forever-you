import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a romantic royalty-free music
    audioRef.current = new Audio(
      "https://cdn.pixabay.com/audio/2024/11/29/audio_06e96a8d63.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {
          // Autoplay was prevented
        });
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <Button
      onClick={toggleMusic}
      variant="outline"
      size="icon"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm border-2 border-rose/30 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label={isMuted ? "Play music" : "Mute music"}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 text-primary" />
      ) : (
        <Volume2 className="w-5 h-5 text-primary animate-pulse" />
      )}
    </Button>
  );
};

export default MusicPlayer;
