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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(current => (current + 1) % welcomePhrases.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-24 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center"
        >
          {welcomePhrases[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTitle;