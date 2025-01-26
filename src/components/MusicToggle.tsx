import { useState, useRef } from "react";
import { Music, MicOff } from "lucide-react";
import noBgm from "../assets/img/no-copyright-bgm.mp3";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing music:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="music-toggle-container">
      <button
        onClick={toggleMusic}
        className="music-toggle-button"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        <span className="tooltip">
          {isPlaying ? "Pause Music" : "Play Music"}
        </span>
        {isPlaying ? <MicOff size={24} /> : <Music size={24} />}
      </button>
      <audio ref={audioRef} loop>
        <source src={noBgm} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicToggle;
