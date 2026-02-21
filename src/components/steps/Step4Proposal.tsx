import { motion } from "framer-motion";
import proposalScene from "@/assets/proposal-scene.jpg";

const Step4Proposal = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-card p-6 md:p-8 overflow-hidden"
      >
        <div className="relative rounded-2xl overflow-hidden mb-6">
          <img
            src={proposalScene}
            alt="Romantic proposal scene"
            className="w-full rounded-2xl"
          />
          {/* Petals overlay */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-lg"
              initial={{ x: `${Math.random() * 100}%`, y: "-10%" }}
              animate={{ y: "110%", rotate: 360 }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
              style={{ left: `${Math.random() * 100}%` }}
            >
              🌹
            </motion.div>
          ))}
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-romantic text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "hsl(340 82% 85%)" }}
        >
          Will you stay with me forever? ❤️
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {/* Stars */}
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="inline-block mx-1"
              style={{
                animation: `twinkle ${1 + Math.random() * 2}s ease-in-out ${Math.random() * 2}s infinite`,
              }}
            >
              ⭐
            </span>
          ))}
        </motion.div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="btn-heart text-lg px-10 py-4 mt-6"
        >
          Next 💫
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Step4Proposal;
