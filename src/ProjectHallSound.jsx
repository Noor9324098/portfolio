import { useRef, useEffect } from "react";

let triggerProjectSoundGlobal = null;

export const triggerProjectSound = () => {
  if (triggerProjectSoundGlobal) {
    triggerProjectSoundGlobal();
  }
};

export const ProjectSound = () => {
  const soundRef = useRef(new Audio("/sounds/shhh-ho.mp3"));

  const playSound = () => {
    soundRef.current.currentTime = 0;
    soundRef.current.play();
  };

  useEffect(() => {
    triggerProjectSoundGlobal = playSound;
  }, []);

  return null;
};