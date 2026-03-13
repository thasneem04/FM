import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const PremiumCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Smooth trailing for outer ring
  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const onEnter = () => setHover(true);
    const onLeave = () => setHover(false);

    window.addEventListener("mousemove", move);

    document.querySelectorAll("a, button, [data-cursor]").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* INNER 3D DOT */}
      <motion.div
        style={{
          position: "fixed",
          left: x,
          top: y,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "radial-gradient(circle, #0b0b0bff 30%, #0d0d0dff 70%)",
          boxShadow: `
            0 0 8px rgba(255,255,255,0.9),
            inset 0 -1px 2px rgba(0,0,0,0.4)
          `,
          pointerEvents: "none",
          zIndex: 20000,
          opacity: visible ? 1 : 0,
          transform: "translate(-50%, -50%)",
        }}
        animate={{ scale: hover ? 1.8 : 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* OUTER 3D RING */}
      <motion.div
        style={{
          position: "fixed",
          left: springX,
          top: springY,
          width: hover ? 52 : 38,
          height: hover ? 52 : 38,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.04)",
          border: "1.5px solid rgba(237,28,36,0.9)",
          boxShadow: `
            0 0 20px rgba(237,28,36,0.45),
            inset 0 0 6px rgba(255,255,255,0.3)
          `,
          backdropFilter: "blur(6px)",
          pointerEvents: "none",
          zIndex: 19999,
          opacity: visible ? 1 : 0,
          transform: "translate(-50%, -50%)",
        }}
        transition={{ type: "spring", stiffness: 110, damping: 18 }}
      />
    </>
  );
};

export default PremiumCursor;

