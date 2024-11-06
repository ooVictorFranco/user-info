import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const welcomePhrases = [
  "Welcome",
  "Bem-vindo",
  "Bienvenido",
  "Bienvenue",
  "Willkommen",
  "أهلا بك"
];

const AnimatedTitle: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(welcomePhrases[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * welcomePhrases.length);
      setCurrentPhrase(welcomePhrases[randomIndex]);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-16 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentPhrase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold absolute"
        >
          {currentPhrase}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTitle;