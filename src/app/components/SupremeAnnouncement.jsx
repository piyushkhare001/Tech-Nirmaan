import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import CourseCard from "./DsaCard"; // Import your existing CourseCard component
import { FaCrown, FaFire, FaRocket, FaStar } from "react-icons/fa";
import Dsa from "./DsaCard"; // Import your existing DsaCard component
import Web from "./Web"; // Import your existing Web component
const SupremeAnnouncement = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const courses = [
    // Your course data array
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative overflow-hidden py-16 bg-gray-900">
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 text-yellow-400 text-4xl opacity-20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaStar />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 right-20 text-red-500 text-5xl opacity-20"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaFire />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* King Announcement Header */}
        <motion.div
          className="relative mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div 
            className="absolute -top-6 -left-6 text-yellow-400 text-6xl z-10"
            variants={headerVariants}
          >
            <FaCrown />
          </motion.div>
          
          <motion.div
            className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-8 shadow-2xl overflow-hidden"
            variants={headerVariants}
          >
            <div className="relative z-10">
              <motion.div
                className="absolute -top-10 -right-10 text-white opacity-10 text-9xl"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <FaRocket />
              </motion.div>
              
              <motion.h2 
                className="text-4xl font-extrabold text-white mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                NIRMAAN COURSES ANNOUNCEMENT
              </motion.h2>
              <motion.p 
                className="text-xl text-red-100 max-w-3xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Unlock your potential with our elite courses designed to catapult your career to new heights!
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <AnimatePresence>
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={childVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                custom={index}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
   
     <div className="flex-wrap md:flex gap-8">
      <Dsa/>
      <Web/>
      </div>
          
      </div>
    </div>
  );
};

export default SupremeAnnouncement;