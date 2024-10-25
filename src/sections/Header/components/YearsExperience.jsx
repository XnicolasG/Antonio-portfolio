
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const YearsExperience = () => {
    const [number, setNumber] = useState(0);
    const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!animated) {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setNumber(i);
        if (i === 30) {
          clearInterval(interval);
          setAnimated(true);
        }
      }, 70);
    }
  }, [animated]);
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-amber-500 to bg-amber-300 text-transparent inline-block bg-clip-text "
        >
            {number.toString().padStart(2, '0')}
        </motion.div>
    );
};
