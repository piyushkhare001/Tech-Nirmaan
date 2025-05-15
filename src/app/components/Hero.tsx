 
"use client";
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { AuroraBackground } from '@/app/components/ui/aurora-background';
import { Button } from './ui/button';
import { FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const handleNavigation = () => {
    router.push('/resources');
  };

  // Binary code rain animation
  const BinaryRain = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.span
            key={i}
            className="text-xs text-green-400/20 font-mono absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, typeof window !== "undefined" ? window.innerHeight : 0],
              opacity: [0, Math.random(), 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.span>
        ))}
      </div>
    );
  };

  // Floating tech icons
  const TechIcons = () => {
    const icons = ['</>', '{ }', '[]', '=>', '()', '∞', 'Σ'];
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            className="text-xl text-white/10 absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 200],
              x: [0, (Math.random() - 0.5) * 200],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <AuroraBackground>
        {/* Special background animations */}
        <BinaryRain />
        <TechIcons />
        
        {/* Animated grid overlay */}
        <motion.div 
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-600/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [20, -20, 20],
            y: [10, -10, 10],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          style={{ y }}
          className="relative flex flex-col items-center justify-center h-full gap-8 px-4 z-10"
        >
          {/* Tagline with border animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 3 }}
            className="relative text-sm sm:text-md px-4 py-1 text-purple-200 font-medium bg-gradient-to-r from-indigo-800/60 via-violet-800/60 to-indigo-900/60 rounded-full border border-white/10 backdrop-blur-sm"
          >
            Your Ultimate Guide to Conquer MNCs and FAANG!
            <motion.div 
              className="absolute inset-0 rounded-full border border-white/5 pointer-events-none"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Main heading with character stagger */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3}}
            className="text-4xl sm:text-4xl md:text-5xl font-bold text-center text-white font-sans leading-tight"
          >
            <AnimatedText text=" Tech Nirmaan" className="gradient-primary bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500" />
            <br />
            <AnimatedText text="Your Skills, Open Endless Doors," delay={0.1} />
            <br />
            <AnimatedText text="and Achieve Your " delay={0.2} />
            <AnimatedText text="Dream Career" className="gradient-primary bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-blue-700" delay={0.3} />
          </motion.h2>

          {/* Description with fade-in */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 3 }}
            className="text-sm sm:text-md md:text-lg text-zinc-300 text-center max-w-xs sm:max-w-md md:max-w-2xl"
          >
            Empowering you to Explore DSA, Sharpen Competitive Skills, Master Core CS Concepts, and Build Real-World Projects For Career Success.
          </motion.p>

          {/* Button with shine effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <Button
              onClick={handleNavigation}
              className="group relative py-3 px-6 w-48 sm:w-56 h-12 z-30 inline-flex items-center gap-x-2 text-lg font-semibold rounded-full border border-violet-600 bg-gradient-to-br from-violet-700 to-indigo-800 text-white shadow-lg hover:from-violet-800 hover:to-indigo-900 overflow-hidden"
            >
              <span>Get Started</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaArrowRight className="text-sm" />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Button>
          </motion.div>

          {/* Animated scroll indicator */}
          <motion.div
            className="absolute bottom-8 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-1 h-2 bg-white/70 rounded-full mt-1" />
            </motion.div>
            
          </motion.div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

// Component for character animation
const AnimatedText = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const letters = Array.from(text);
  
  return (
    <span className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 0.03,
            type: "spring",
            damping: 12,
            stiffness: 200
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

export default Hero;