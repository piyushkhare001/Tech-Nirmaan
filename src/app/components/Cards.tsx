import React from "react";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";
import MasterDSA from "../MasterDSA.jpg";
import Roadmaps from "../Roadmaps.avif";
import Projects from "../Projects.avif";



const Cards = () => {
  const router = useRouter();
  const data = [
    {
      img: MasterDSA,
      title: "Master DSA",
      description:
        "Learn Data Structures & Algorithms with structured exercises and guides.",
      color: "from-purple-600 to-indigo-600",
      link : '/dsaSheet',
    },
    {
      img: Roadmaps,
      title: "Career Roadmaps",
      description:
        "Navigate your career journey with guided paths tailored to your aspirations.",
      color: "from-amber-600 to-orange-600",
      link : '/roadmaps',
    },
    {
      img: Projects,
      title: "Projects",
      description:
        "Build real-world projects to enhance your portfolio and gain practical experience.",
      color: "from-emerald-600 to-teal-600",
      link : '/projects',
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.F32Uh00wgNlPhaWU8QONdgHaEK&pid=Api&P=0&h=180",
      title: "Top Resources",
      description:
        "Access curated resources, tutorials, and tools to boost your learning journey.",
      color: "from-rose-600 to-pink-600",
      link : '/reviews',
    },
  ];

  // Glass morphism effect
  const glassStyle = {
    background: "rgba(15, 23, 42, 0.7)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Premium resources designed to accelerate your growth
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Card */}
              <div 
                className="h-full rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  boxShadow: `0 10px 30px -5px ${item.color}40`,
                }}
              >
                {/* Card Background */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br opacity-30 transition-all duration-500 group-hover:opacity-50"
                  style={{
                    background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}80 100%)`,
                  }}
                />
                
                {/* Card Content */}
                <div 
                  className="relative h-full p-6 flex flex-col"
                  style={glassStyle}
                >
                  {/* Image with floating effect */}
                  <motion.div
                    className="relative h-40 w-full rounded-xl overflow-hidden mb-6"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-sm mb-6 flex-grow">
                    {item.description}
                  </p>

                  {/* Button */}
                  <motion.button
                    onClick={() => router.push(item.link)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium text-white">Explore</span>
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <FiArrowRight className="text-white" />
                    </motion.div>
                  </motion.button>
                </div>
              </div>

              {/* Glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `0 0 60px 15px ${item.color}40`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;