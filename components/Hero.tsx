 "use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import VscodeVisual from './VscodeVisual';

const Hero: React.FC = () => {
  // Explicitly type containerVariants as Variants to avoid inference issues with motion components
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Explicitly type itemVariants as Variants and cast the ease array to any
  // to avoid 'number[] is not assignable to Easing' error caused by TypeScript's default array inference
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-28 md:pt-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/30 blur-[120px] rounded-full"
        />
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full" />
      </div>

      {/* Copy + CTA container (kept narrower for readability) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl text-center z-10 w-full"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-neutral-400 text-[10px] uppercase tracking-widest mb-8"
        >
          <span className="flex w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          <span>Building and shipping at the speed of thought</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.85] bg-gradient-to-b from-white to-neutral-600 bg-clip-text text-transparent"
        >
          B9 LABS: <br />
          REDEFINING OPEN SOURCE
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          A hub for distributed systems, high-performance builds, and human-centric designs.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link
            href="/projects"
            className="
              w-full sm:w-auto
              px-10 py-4
              bg-neutral-900 text-white
              border border-purple-800
              rounded-full font-bold
              transition-all duration-300
              hover:scale-105
            "
          >
            Explore Projects
          </Link>

          <button className="w-full sm:w-auto px-10 py-4 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white rounded-full font-bold transition-all">
            GitHub Ecosystem
          </button>
        </motion.div>
      </motion.div>

      {/* VS Code visual (wider than the copy container) */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mt-12 mx-auto w-full max-w-5xl items-center justify-center z-10"
      >
        <VscodeVisual />
      </motion.div>

    </section>
  );
};

export default Hero;
