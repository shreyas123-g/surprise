import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeartConfetti from "../HeartConfetti";

interface Balloon {
  id: number;
  x: number;
  popped: boolean;
  delay: number;
  color: string;
}

const Step8Finale = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [poppedMessages, setPoppedMessages] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 100);

    const colors = ["❤️", "💖", "💕", "💗", "💘", "💝", "🩷"];
    setBalloons(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: 5 + (i * 8),
        popped: false,
        delay: Math.random() * 2,
        color: colors[i % colors.length],
      }))
    );
  }, []);

  const popBalloon = (id: number, e: React.MouseEvent) => {
    setBalloons((prev) =>
      prev.map((b) => (b.id === id ? { ...b, popped: true } : b))
    );
    setPoppedMessages((prev) => [
      ...prev,
      { id: Date.now(), x: e.clientX, y: e.clientY },
    ]);
    setTimeout(() => {
      setPoppedMessages((prev) => prev.filter((m) => m.id !== Date.now()));
    }, 2000);
  };

  return (
    <div className="text-center relative min-h-[80vh] flex flex-col items-center justify-center">
      <HeartConfetti trigger={showConfetti} />

      {/* Floating balloons */}
      {balloons.map((b) =>
        !b.popped ? (
          <motion.div
            key={b.id}
            initial={{ y: "100vh" }}
            animate={{ y: "-20vh" }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: b.delay,
              ease: "linear",
            }}
            onClick={(e) => popBalloon(b.id, e)}
            className="absolute cursor-pointer text-4xl hover:scale-125 transition-transform z-20"
            style={{ left: `${b.x}%` }}
          >
            {b.color}
          </motion.div>
        ) : (
          <motion.div
            key={`pop-${b.id}`}
            initial={{ scale: 1.5, opacity: 1 }}
            animate={{ scale: 0, opacity: 0 }}
            className="absolute text-4xl"
            style={{ left: `${b.x}%`, top: "50%" }}
          >
            💥
          </motion.div>
        )
      )}

      {/* Popped messages */}
      {poppedMessages.map((m) => (
        <motion.div
          key={m.id}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -60 }}
          transition={{ duration: 1.5 }}
          className="fixed z-50 text-romantic text-xl font-bold pointer-events-none"
          style={{ left: m.x - 40, top: m.y - 20, color: "hsl(340 82% 62%)" }}
        >
          Love You ❤️
        </motion.div>
      ))}

      {/* Main text */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="relative z-10"
      >
        <motion.h1
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-romantic text-6xl md:text-8xl font-bold mb-6"
          style={{ 
            color: "hsl(340 82% 62%)",
            textShadow: "0 0 30px hsla(340, 82%, 62%, 0.5), 0 0 60px hsla(340, 82%, 62%, 0.3)"
          }}
        >
          I LOVE YOU ❤️
        </motion.h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-foreground text-lg md:text-xl mt-4 relative z-10"
      >
        Click the heart balloons! 🎈
      </motion.p>

      {/* Final message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="glass-card p-6 md:p-8 mt-10 relative z-10"
      >
        <p className="text-romantic text-xl md:text-2xl font-semibold text-foreground mb-2">
          Thank you for your beautiful time.
        </p>
        <p className="text-romantic text-2xl md:text-3xl font-bold" style={{ color: "hsl(340 82% 62%)" }}>
          You are my forever ❤️
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 }}
          className="mt-6 pt-4 border-t border-border"
        >
          <p className="text-muted-foreground text-sm mb-1">A beautiful creation by your loved one</p>
          <p className="text-romantic text-3xl font-bold" style={{ color: "hsl(280 60% 70%)" }}>
            ✨ Shreyas ✨
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Step8Finale;
