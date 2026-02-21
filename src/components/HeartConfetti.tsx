import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
  size: number;
}

const HeartConfetti = ({ trigger }: { trigger: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!trigger) return;
    const emojis = ["💖", "💕", "❤️", "💗", "✨", "🌹", "💘"];
    const newParticles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      size: 16 + Math.random() * 24,
    }));
    setParticles(newParticles);
    const timer = setTimeout(() => setParticles([]), 3000);
    return () => clearTimeout(timer);
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ 
              x: `${p.x}vw`, 
              y: "-10%", 
              opacity: 1, 
              scale: 0 
            }}
            animate={{ 
              y: `${p.y + 100}vh`, 
              opacity: 0, 
              scale: 1,
              rotate: Math.random() * 360 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 + Math.random() * 2, ease: "easeOut" }}
            className="absolute"
            style={{ fontSize: `${p.size}px` }}
          >
            {p.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default HeartConfetti;
