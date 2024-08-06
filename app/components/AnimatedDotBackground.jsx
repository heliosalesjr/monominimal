// components/AnimatedDotBackground.jsx

"use client"; // Necessário se estiver usando o app directory do Next.js 13

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedDotBackground = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const newPosition = {
        x: Math.random() * 50 - 25, // Movimento aleatório no eixo X
        y: Math.random() * 50 - 25, // Movimento aleatório no eixo Y
      };
      setPosition(newPosition);
    };

    updatePosition(); // Atualiza a posição na montagem
    const interval = setInterval(updatePosition, 3000); // Atualiza a cada 3 segundos

    return () => clearInterval(interval); // Limpeza na desmontagem
  }, []);

  return (
    <div className="dot-background">
      <motion.div
        className="dot-pattern"
        animate={position}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 50,
          duration: 3,
        }}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`, // Aplica a posição
        }}
      />
      <div className="content">{children}</div>
    </div>
  );
};

export default AnimatedDotBackground;

