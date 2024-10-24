
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const YearsExperience = () => {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber((prevNumber) => {
                if (prevNumber < 30) {
                    return prevNumber + 1;
                } else {
                    return 30; // Mantén el número en 30
                }
            });
        }, 70);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-5xl font-bold"
        >
            {number.toString().padStart(2, '0')}
        </motion.div>
    );
};
