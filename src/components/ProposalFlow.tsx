import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import HeartConfetti from "./HeartConfetti";
import Sparkles from "./Sparkles";
import AdminPanel from "./AdminPanel";
import Step1Question from "./steps/Step1Question";
import Step2DoYouLove from "./steps/Step2DoYouLove";
import Step3HowMuch from "./steps/Step3HowMuch";
import Step4Proposal from "./steps/Step4Proposal";
import Step5Reaction from "./steps/Step5Reaction";
import Step6Dance from "./steps/Step6Dance";
import Step7Letter from "./steps/Step7Letter";
import Step8Finale from "./steps/Step8Finale";
import { createEmptyEntry, saveSubmission, SubmissionEntry } from "@/lib/submissions";

const ProposalFlow = () => {
  const [step, setStep] = useState(0);
  const [confetti, setConfetti] = useState(false);
  const entryRef = useRef<SubmissionEntry>(createEmptyEntry());

  const nextStep = useCallback(() => {
    setStep((s) => s + 1);
  }, []);

  const triggerConfetti = useCallback(() => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 100);
  }, []);

  const updateEntry = useCallback((field: keyof SubmissionEntry, value: string) => {
    entryRef.current = { ...entryRef.current, [field]: value };
  }, []);

  const finalSave = useCallback(() => {
    saveSubmission(entryRef.current);
  }, []);

  const steps = [
    <Step1Question key={0} onNext={(name: string) => { updateEntry("name", name); nextStep(); }} />,
    <Step2DoYouLove key={1} onNext={(choice: string) => { updateEntry("loveChoice", choice); triggerConfetti(); nextStep(); }} />,
    <Step3HowMuch key={2} onNext={(msg: string) => { updateEntry("loveMessage", msg); nextStep(); }} />,
    <Step4Proposal key={3} onNext={nextStep} />,
    <Step5Reaction key={4} onNext={(choice: string) => { updateEntry("reactionChoice", choice); finalSave(); triggerConfetti(); nextStep(); }} />,
    <Step6Dance key={5} onNext={nextStep} />,
    <Step7Letter key={6} onNext={nextStep} />,
    <Step8Finale key={7} />,
  ];

  const isDarkStep = step === 3 || step === 5;

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkStep ? "romantic-bg-dark" : "romantic-bg"}`}>
      <AdminPanel />
      <FloatingHearts count={isDarkStep ? 8 : 15} />
      <Sparkles />
      <HeartConfetti trigger={confetti} />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full max-w-lg"
          >
            {steps[step]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProposalFlow;
