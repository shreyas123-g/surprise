import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Step7Letter = ({ onNext }: { onNext: () => void }) => {
  const [opened, setOpened] = useState(false);

  const letterText = `My love,

From the moment you came into my life, everything became more beautiful. You are my peace, my happiness, my forever.

Every day with you feels like a dream I never want to wake up from. Your smile lights up my darkest days, and your love gives me strength I never knew I had.

I choose you. Today. Tomorrow. Always.

You are not just my love — you are my whole world.

Forever yours,
Shreyas ❤️`;

  return (
    <div className="text-center">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-10"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-7xl mb-6"
            >
              💌
            </motion.div>
            <h1 className="text-romantic text-4xl md:text-5xl font-bold text-foreground mb-4">
              A Letter For You
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Something from my heart... 💖
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpened(true)}
              className="btn-heart text-lg px-10 py-4"
            >
              Open My Heart ❤️
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="letter-paper rounded-2xl p-8 md:p-10 max-w-lg mx-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <pre className="text-romantic text-lg md:text-xl whitespace-pre-wrap text-left leading-relaxed"
                   style={{ color: "hsl(340 30% 25%)", fontFamily: "'Dancing Script', cursive" }}>
                {letterText}
              </pre>
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="btn-heart text-lg px-10 py-4 mt-8"
            >
              Continue 💫
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Step7Letter;
