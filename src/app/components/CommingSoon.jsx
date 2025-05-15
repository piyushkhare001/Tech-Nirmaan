'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email);
    setSubscribed(true);
    setEmail('');
  };

  // Particle background component
  const Particles = () => {
    const particles = Array.from({ length: 30 }).map((_, i) => {
      const size = Math.random() * 5 + 1;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      return (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-purple-400 to-blue-500"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}%`,
            top: `${y}%`,
            opacity: 0.6,
          }}
          animate={{
            y: [0, -100, -200, -300],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            opacity: [0.6, 0.8, 0.4, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        />
      );
    });

    return <div className="fixed inset-0 overflow-hidden pointer-events-none">{particles}</div>;
  };

  return (
    <>
      <Head>
        <title>Coming Soon | Our Amazing Product</title>
        <meta name="description" content="We're working on something incredible. Stay tuned!" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
        {/* Particle background */}
        <Particles />

        {/* Glowing orb background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-10 mix-blend-screen"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 mix-blend-screen"></div>
          <div className="absolute top-3/4 left-2/3 w-48 h-48 bg-pink-600 rounded-full filter blur-3xl opacity-10 mix-blend-screen"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Logo/Brand */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-8"
            >
              <motion.h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 mb-4">
                
              </motion.h1>
              <motion.p className="text-xl text-gray-400">
                This future is coming
              </motion.p>
            </motion.div>

            {/* Main heading */}
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Something
              </span>{' '}
              <motion.span
                animate={{ 
                  textShadow: [
                    '0 0 8px rgba(165, 180, 252, 0)',
                    '0 0 8px rgba(165, 180, 252, 0.8)',
                    '0 0 8px rgba(165, 180, 252, 0)',
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                Amazing
              </motion.span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Is Coming
              </span>
            </motion.h2>

            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              We're crafting an extraordinary experience that will revolutionize how you interact with technology. Stay tuned for the launch!
            </motion.p>
          </motion.div>

          {/* Countdown timer */}
          <motion.div
            className="grid grid-cols-4 gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {[
              { value: '5', label: 'Days' },
              { value: '12', label: 'Hours' },
              { value: '45', label: 'Minutes' },
              { value: '30', label: 'Seconds' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50">
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.9, 1, 0.9]
                    }}
                    transition={{ 
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity
                    }}
                  >
                    {item.value}
                  </motion.div>
                  <div className="text-gray-400 mt-2 text-sm uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Email subscription */}
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-green-900/50 border border-green-700/50 rounded-xl p-6 text-center backdrop-blur-md"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-green-400 mx-auto mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-green-100 mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-green-200">
                    We'll notify you when we launch. Get ready for something special!
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h3 className="text-xl font-bold text-center mb-6">
                    Get notified when we launch
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <motion.input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-grow bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
                        whileFocus={{ scale: 1.02 }}
                      />
                      <motion.button
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => setHovered(true)}
                        onHoverEnd={() => setHovered(false)}
                      >
                        <AnimatePresence>
                          {hovered && (
                            <motion.span
                              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.3 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </AnimatePresence>
                        <span className="relative z-10">Notify Me</span>
                      </motion.button>
                    </div>
                  </form>
                  <p className="text-gray-400 text-sm mt-3 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex gap-4 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {['twitter', 'facebook', 'instagram', 'linkedin'].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700/50 flex items-center justify-center hover:bg-gray-700/50 transition-colors duration-300"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-5 h-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d={
                      social === 'twitter'
                        ? "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                        : social === 'facebook'
                        ? "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        : social === 'instagram'
                        ? "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        : "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    }
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-16 text-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <p>© {new Date().getFullYear()} TECH NIRMAAN. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;