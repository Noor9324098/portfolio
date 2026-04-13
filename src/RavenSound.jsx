import { useRef, useEffect } from "react";

let triggerRavenSoundGlobal = null;

export const triggerRavenSound = () => {
  if (triggerRavenSoundGlobal) {
    triggerRavenSoundGlobal();
  }
};

export const RavenSound = () => {
  const soundRef = useRef(new Audio(`${process.env.PUBLIC_URL}/sounds/RavenSound.mp3`));

  const playSound = () => {
    soundRef.current.currentTime = 0;
    soundRef.current.play();
  };

  useEffect(() => {
    triggerRavenSoundGlobal = playSound;
  }, []);

  return null;
};