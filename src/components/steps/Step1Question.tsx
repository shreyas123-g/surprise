import { useState } from "react";
import { motion } from "framer-motion";

const Step1Question = ({ onNext }: { onNext: () => void }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim().toLowerCase().includes("shreyas")) {
      onNext();
    }
  };

  return (
    <div className="glass-card p-8 md:p-10 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        className="text-5xl mb-6"
      >
        💖
      </motion.div>
      <h1 className="text-romantic text-4xl md:text-5xl font-bold text-foreground mb-3">
        Hey Beautiful! 🌸
      </h1>
      <p className="text-muted-foreground text-lg mb-8">
        Who is your husband? 😌❤️
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="Type his name..."
        className="w-full px-6 py-4 rounded-2xl bg-background/60 border border-border text-foreground text-center text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground/60 mb-6"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSubmit}
        className="btn-heart text-lg px-10 py-4"
      >
        💝 Submit
      </motion.button>
      {name.trim().length > 0 && !name.trim().toLowerCase().includes("shreyas") && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-primary mt-4 text-sm"
        >
          Hmm... try again! 😏
        </motion.p>
      )}
    </div>
  );
};

export default Step1Question;
