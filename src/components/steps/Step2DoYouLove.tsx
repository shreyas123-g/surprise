import { motion } from "framer-motion";

const Step2DoYouLove = ({ onNext }: { onNext: (choice: string) => void }) => {
  return (
    <div className="glass-card p-8 md:p-10 text-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="text-6xl mb-6"
      >
        💞
      </motion.div>
      <h1 className="text-romantic text-4xl md:text-5xl font-bold text-foreground mb-3">
        Do you love him? 💕
      </h1>
      <p className="text-muted-foreground text-lg mb-8">
        Be honest now... 🥰
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNext("YES ❤️")}
          className="btn-heart text-lg px-8 py-4"
        >
          YES ❤️
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNext("Of course 😍")}
          className="btn-heart text-lg px-8 py-4"
          style={{
            background: "linear-gradient(135deg, hsl(280 60% 70%), hsl(320 70% 65%))",
          }}
        >
          Of course 😍
        </motion.button>
      </div>
    </div>
  );
};

export default Step2DoYouLove;
