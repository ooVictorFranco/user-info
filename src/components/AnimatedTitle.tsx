"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedTitle: React.FC = () => {
  const phrases = ["Welcome", "Hello", "Hi", "Greetings"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Remover `phrases.length` das dependências, pois não muda

  return (
    <div className="h-24 flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        <motion.h1
          key={phrases[index]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold"
        >
          {phrases[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTitle;