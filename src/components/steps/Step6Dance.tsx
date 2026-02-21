import { useEffect } from "react";
import { motion } from "framer-motion";
import coupleImage from "@/assets/couple-dance.jpg";

const Step6Dance = ({ onNext }: { onNext: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onNext, 8000);
    return () => clearTimeout(timer);
  }, [onNext]);

  // Music note particles
  const notes = ["🎵", "🎶", "♪", "♫", "🎵", "🎶"];

  return (
    <div className="text-center relative">
      {/* Floating music notes */}
      {notes.map((note, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl pointer-events-none z-0"
          initial={{ opacity: 0, x: `${10 + i * 15}%`, y: "80%" }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [80, 20, -20, -60],
            x: `${10 + i * 15 + (Math.random() - 0.5) * 20}%`,
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut",
          }}
          style={{ top: 0 }}
        >
          {note}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="glass-card p-6 md:p-8 relative z-10"
      >
        {/* Music indicator */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="flex justify-center gap-1 mb-4"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              animate={{ height: [8, 20 + Math.random() * 15, 8] }}
              transition={{ repeat: Infinity, duration: 0.5 + Math.random() * 0.3, delay: i * 0.1 }}
              className="w-1.5 rounded-full"
              style={{ background: "hsl(340 82% 62%)" }}
            />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">♪ Playing...</span>
        </motion.div>

        <motion.div
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <img
            src={coupleImage}
            alt="Couple dancing"
            className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full object-cover border-4 mb-6"
            style={{
              borderColor: "hsl(340 82% 62%)",
              boxShadow: "0 0 30px hsla(340, 82%, 62%, 0.4), 0 0 60px hsla(280, 60%, 70%, 0.2)",
            }}
          />
        </motion.div>
        <h1
          className="text-romantic text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "hsl(340 82% 85%)" }}
        >
          Dancing with you forever... 💃🕺
        </h1>
        <div className="flex justify-center gap-3 mt-4">
          {["💖", "💕", "💗", "💘", "💝"].map((h, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -12, 0], scale: [1, 1.4, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: i * 0.2,
              }}
              className="text-2xl"
            >
              {h}
            </motion.span>
          ))}
        </div>
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-muted-foreground mt-6 text-sm"
        >
          🎵 Enjoying the moment... 🎵
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Step6Dance;
