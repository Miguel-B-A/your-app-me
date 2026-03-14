import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          <BlurFade delay={0.4} inView>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hello World 👋
            </h1>
          </BlurFade>
          <BlurFade delay={0.8} inView>
            <p className="text-xl md:text-2xl text-white/70">
              Nice to meet you
            </p>
          </BlurFade>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
