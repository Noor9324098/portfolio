import { useEffect, useRef, useState } from "react";
import { FaMusic } from "react-icons/fa";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      // Set starting volume low
      audioRef.current.volume = 0.2; 
    }

    const playAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.muted = false;
        audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log(e));
        window.removeEventListener("click", playAudio);
      }
    };

    window.addEventListener("click", playAudio);
    return () => window.removeEventListener("click", playAudio);
  }, [isPlaying]);

  const toggleMusic = (e) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.muted = false;
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000 }}>
      <button onClick={toggleMusic} className="btn btn-gold" style={{ padding: "10px", display: "flex", gap: "8px", alignItems: "center" }}>
        <FaMusic /> {isPlaying ? "Pause Music" : "Play Music"}
      </button>
      <audio
        ref={audioRef}
        src="/music.mp3"
        autoPlay
        loop
        muted
      />
    </div>
  );
}