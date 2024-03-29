import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

export const MotionWrapper = (Component: React.FC) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.15 }}
      >
        <Component />
      </motion.section>
    )
  };
