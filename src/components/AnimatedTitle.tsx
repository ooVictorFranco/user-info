"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = ["Welcome", "Hello", "Hi", "Greetings"];

const AnimatedTitle: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Troca a frase a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-24 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait"> {/* 'mode="wait"' garante que o próximo texto só apareça depois que o anterior desaparecer */}
        <motion.h1
          key={phrases[index]} // A chave única para cada frase
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }} // Animação de saída
          transition={{ duration: 0.5 }} // Duração da animação
          className="text-4xl font-bold"
        >
          {phrases[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTitle;