import { GiRaven, GiFeather } from "react-icons/gi";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// shared trigger reference
let triggerRavenGlobal = null;

// export function you can import anywhere
export const triggerRaven = () => {
  if (triggerRavenGlobal) {
    triggerRavenGlobal();
  }
};

export const RavenFly = () => {
  const [isFlying, setIsFlying] = useState(false);

  const trigger = () => {
    setIsFlying(false);
    // Restart animation by toggling state
    setTimeout(() => setIsFlying(true), 10);
  };

  // register this component's trigger
  useEffect(() => {
    triggerRavenGlobal = trigger;
  }, []);

  // Hardcoded feather trajectories for cinematic, consistent feel
  const feathers = [
    { id: 1, startX: "10vw", endX: "20vw", delay: 0.2, duration: 3.5, size: "30px", sizeEnd: "10px" },
    { id: 2, startX: "40vw", endX: "30vw", delay: 0.5, duration: 4, size: "24px", sizeEnd: "12px" },
    { id: 3, startX: "70vw", endX: "80vw", delay: 0.1, duration: 3.8, size: "35px", sizeEnd: "15px" },
    { id: 4, startX: "90vw", endX: "85vw", delay: 0.8, duration: 3.2, size: "28px", sizeEnd: "14px" },
    { id: 5, startX: "25vw", endX: "15vw", delay: 1.2, duration: 4.5, size: "20px", sizeEnd: "8px" },
    { id: 6, startX: "60vw", endX: "65vw", delay: 0.4, duration: 3.6, size: "26px", sizeEnd: "11px" }
  ];

  return (
    <>
      {isFlying && (
        <>
          <motion.div
            initial={{ opacity: 0, x: "-10vw", y: "-20vh", scale: 0.8, rotate: 25 }}
            animate={{ opacity: [0, 1, 1, 0], x: "110vw", y: "120vh", scale: 2.5, rotate: 45 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              fontSize: "60px",
              color: "#12151d", // Dark stylized raven to fit theme
              zIndex: 10000,
              pointerEvents: "none",
              filter: "drop-shadow(0px 15px 15px rgba(0,0,0,0.6))"
            }}
          >
            <GiRaven />
          </motion.div>

          {feathers.map((f) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, x: f.startX, y: "-10vh", rotate: 0 }}
              animate={{ 
                opacity: [0, 0.8, 0.8, 0], 
                x: [f.startX, f.endX, f.startX, f.endX], 
                y: "110vh", 
                rotate: [0, 45, -45, 90],
                fontSize: [f.size, f.size, f.size, f.sizeEnd]
              }}
              transition={{ 
                duration: f.duration, 
                delay: f.delay, 
                ease: "linear" 
              }}
              style={{
                position: "fixed",
                left: 0,
                top: 0,
                color: "#1e232f",
                zIndex: 9999,
                pointerEvents: "none",
                filter: "drop-shadow(0px 5px 5px rgba(0,0,0,0.4))"
              }}
            >
              <GiFeather />
            </motion.div>
          ))}
        </>
      )}
    </>
  );
};