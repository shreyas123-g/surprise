import { useEffect } from "react";
import { motion } from "framer-motion";
import coupleImage from "@/assets/couple-dance.jpg";

const Step6Dance = ({ onNext }: { onNext: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onNext, 7000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="glass-card p-6 md:p-8"
      >
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img
            src={coupleImage}
            alt="Couple dancing"
            className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full object-cover border-4 mb-6"
            style={{ borderColor: "hsl(340 82% 62%)" }}
          />
        </motion.div>
        <h1
          className="text-romantic text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "hsl(340 82% 85%)" }}
        >
          Dancing with you forever... 💃🕺
        </h1>
        {/* Glowing hearts */}
        <div className="flex justify-center gap-3 mt-4">
          {["💖", "💕", "💗", "💘", "💝"].map((h, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -10, 0], scale: [1, 1.3, 1] }}
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
        <p className="text-muted-foreground mt-6 text-sm">Auto-transitioning...</p>
      </motion.div>
    </div>
  );
};

export default Step6Dance;
