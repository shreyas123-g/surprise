import { useState } from "react";
import { motion } from "framer-motion";

const Step3HowMuch = ({ onNext }: { onNext: (message: string) => void }) => {
  const [text, setText] = useState("");
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleType = (value: string) => {
    setText(value);
    if (value.length > text.length) {
      setHearts((prev) => [
        ...prev.slice(-10),
        {
          id: Date.now(),
          x: Math.random() * 80 + 10,
          y: Math.random() * 30 + 60,
        },
      ]);
    }
  };

  return (
    <div className="glass-card p-8 md:p-10 text-center relative overflow-hidden">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="absolute pointer-events-none text-xl"
          style={{ left: `${h.x}%`, top: `${h.y}%` }}
        >
          💖
        </motion.div>
      ))}
      <motion.div
        initial={{ rotate: -10 }}
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-5xl mb-6"
      >
        🥺
      </motion.div>
      <h1 className="text-romantic text-4xl md:text-5xl font-bold text-foreground mb-3">
        How much do you love him? 🥺
      </h1>
      <p className="text-muted-foreground text-lg mb-6">
        Tell him in words, numbers, anything... 💌
      </p>
      <textarea
        value={text}
        onChange={(e) => handleType(e.target.value)}
        placeholder="Write your heart out..."
        rows={5}
        className="w-full px-6 py-4 rounded-2xl bg-background/60 border border-border text-foreground text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground/60 mb-6 resize-none"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNext(text.trim())}
        disabled={text.trim().length === 0}
        className="btn-heart text-lg px-10 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        💝 Submit
      </motion.button>
    </div>
  );
};

export default Step3HowMuch;
