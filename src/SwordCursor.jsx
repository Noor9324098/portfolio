import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { GiBroadsword } from 'react-icons/gi';

export const SwordCursor = () => {
  // Directly bind raw motion values without springs to ensure zero latency (behaves exactly like a standard OS cursor).
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // States to handle visual interactions globally
  const [clashes, setClashes] = useState([]);
  const [isStriking, setIsStriking] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseDown = (e) => {
      setIsStriking(true);

      // We only execute the elaborate sword crash animation if the user is clicking on a button or link.
      const isInteractable = e.target.closest('button') || e.target.closest('a');
      
      if (isInteractable) {
        const newClash = { id: Date.now(), x: e.clientX, y: e.clientY };
        setClashes((prev) => [...prev, newClash]);

        // Clean up the clashing element from state after the animation length ends (350ms)
        setTimeout(() => {
          setClashes((prev) => prev.filter((c) => c.id !== newClash.id));
        }, 350);
      }
    };

    const handleMouseUp = () => {
      setIsStriking(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Primary Gold Sword Cursor */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorX,   // Direct mapping, no spring
          y: cursorY,   // Direct mapping, no spring
          pointerEvents: 'none',   // Pass-through clicks
          zIndex: 9999,
          color: '#d3b47a',
          fontSize: '32px',
          filter: 'drop-shadow(0 0 7px rgba(211, 180, 122, 0.7))',
        }}
        // When user mousedowns anywhere, the protagonist's sword will quickly slash from -45deg to +10deg
        animate={{
          rotate: isStriking ? 10 : -45,
          scale: isStriking ? 0.9 : 1
        }}
        transition={{ type: 'spring', stiffness: 700, damping: 20 }}
      >
        <GiBroadsword />
      </motion.div>

      {/* Opposing Clashing Sword Animations (Triggers on links/buttons) */}
      {clashes.map((clash) => (
        <motion.div
          key={clash.id}
          // The opposing sword starts from the top right angling downward, fading in.
          initial={{ opacity: 0, scale: 0.8, rotate: -135, x: clash.x + 32, y: clash.y - 48 }}
          // And then "swings" out towards the user sword, clashing down at the coordinates exactly. 
          animate={{ opacity: [0, 1, 0], scale: 1.2, rotate: -45, x: clash.x - 16, y: clash.y - 12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            pointerEvents: 'none',
            zIndex: 9998,
            color: '#b5bdcb', // Iron/Steel color to contrast with the gold
            fontSize: '40px',
            filter: 'drop-shadow(0 0 10px rgba(181, 189, 203, 0.9))',
          }}
        >
          <GiBroadsword />
        </motion.div>
      ))}
    </>
  );
};
