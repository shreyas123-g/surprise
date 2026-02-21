import { motion } from "framer-motion";

const Step5Reaction = ({ onNext }: { onNext: (choice: string) => void }) => {
  return (
    <div className="glass-card p-8 md:p-10 text-center">
      <motion.div
        animate={{ rotate: [0, -15, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="text-6xl mb-6"
      >
        🥰
      </motion.div>
      <h1 className="text-romantic text-4xl md:text-5xl font-bold text-foreground mb-3">
        Did you like this surprise? 🥰
      </h1>
      <p className="text-muted-foreground text-lg mb-8">
        Tell me honestly... 💖
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNext("Loved it 😍")}
          className="btn-heart text-lg px-8 py-4"
        >
          Loved it 😍
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNext("Loved it more ❤️")}
          className="btn-heart text-lg px-8 py-4"
          style={{
            background: "linear-gradient(135deg, hsl(0 80% 55%), hsl(340 82% 62%))",
          }}
        >
          Loved it more ❤️
        </motion.button>
      </div>
    </div>
  );
};

export default Step5Reaction;
