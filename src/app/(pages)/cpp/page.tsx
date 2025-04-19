"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/components/Navbar";

const CCPPage = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  // CCP Data
  const ccpData = {
    title: "Campus Commune Program",
    description: "A structured program to help students grow and excel in their careers.",
    phases: [
      {
        title: "Phase 1: Foundation",
        icon: "🌱",
        platforms: [
          {
            name: "CodeChef",
            icon: "👨‍💻",
            starRating: 2,
            rating: 1400,
            contestsAttended: 4,
            problemsSolved: 25,
          },
          {
            name: "Codeforces",
            icon: "⚔️",
            rating: 400,
            contestsAttended: 1,
            problemsSolved: 15,
          },
          {
            name: "HackerRank",
            icon: "🔍",
            dataStructureScore: 50,
            algorithmsScore: 200,
          },
          {
            name: "LeetCode",
            icon: "🧠",
            contestsAttended: 2,
            problemsSolved: 30,
          },
          {
            name: "Technirmaan Sheet",
            icon: "📝",
            problemsSolved: 80,
          },
        ],
      },
      {
        title: "Phase 2: Intermediate",
        icon: "🚀",
        platforms: [
          {
            name: "CodeChef",
            icon: "👨‍💻",
            starRating: 3,
            rating: 1600,
            contestsAttended: 6,
            problemsSolved: 40,
          },
          {
            name: "Codeforces",
            icon: "⚔️",
            rating: 700,
            contestsAttended: 4,
            problemsSolved: 30,
          },
          {
            name: "HackerRank",
            icon: "🔍",
            dataStructureScore: 200,
            algorithmsScore: 500,
          },
          {
            name: "LeetCode",
            icon: "🧠",
            contestsAttended: 10,
            problemsSolved: 80,
          },
          {
            name: "Technirmaan Sheet",
            icon: "📝",
            problemsSolved: 100,
          },
        ],
      },
      {
        title: "Phase 3: Advanced",
        icon: "🔥",
        platforms: [
          {
            name: "CodeChef",
            icon: "👨‍💻",
            starRating: 4,
            rating: 1800,
            contestsAttended: 10,
            problemsSolved: 40,
          },
          {
            name: "Codeforces",
            icon: "⚔️",
            rating: 1000,
            contestsAttended: 7,
            problemsSolved: 50,
          },
          {
            name: "HackerRank",
            icon: "🔍",
            dataStructureScore: 500,
            algorithmsScore: 800,
          },
          {
            name: "LeetCode",
            icon: "🧠",
            starRating: 4,
            contestsAttended: 20,
            problemsSolved: 180,
          },
          {
            name: "Technirmaan Sheet",
            icon: "📝",
            problemsSolved: 120,
          },
        ],
      },
    ],
  };

  return (
<div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-6 pt-24 md:pt-32 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
            {ccpData.title}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {ccpData.description}
          </p>
        </motion.div>

        {/* Phases Container */}
        <div className="space-y-6">
          {ccpData.phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              {/* Phase Header */}
              <div 
                className="p-6 cursor-pointer bg-gray-750 hover:bg-gray-700 transition-colors"
                onClick={() => setExpandedPhase(expandedPhase === phaseIndex ? null : phaseIndex)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{phase.icon}</span>
                    <h2 className="text-xl font-semibold text-white">{phase.title}</h2>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedPhase === phaseIndex ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Platform Cards */}
              <AnimatePresence>
                {expandedPhase === phaseIndex && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 pt-0"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {phase.platforms.map((platform, platformIndex) => (
                        <motion.div
                          key={platformIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: platformIndex * 0.05 }}
                          className="bg-gray-750 rounded-lg border border-gray-700 p-4 hover:border-blue-500 transition-colors"
                        >
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="text-xl">{platform.icon}</span>
                            <h3 className="font-medium text-white">{platform.name}</h3>
                          </div>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            {platform.starRating && (
                              <div className="flex items-center">
                                <span className="text-yellow-400 mr-1">★</span>
                                <span className="text-gray-300">{platform.starRating} Stars</span>
                              </div>
                            )}
                            {platform.rating && (
                              <div>
                                <div className="text-gray-500 text-xs">Rating</div>
                                <div className="font-medium text-white">{platform.rating}</div>
                              </div>
                            )}
                            {platform.contestsAttended && (
                              <div>
                                <div className="text-gray-500 text-xs">Contests</div>
                                <div className="font-medium text-white">{platform.contestsAttended}</div>
                              </div>
                            )}
                            {platform.problemsSolved && (
                              <div>
                                <div className="text-gray-500 text-xs">Problems Solved</div>
                                <div className="font-medium text-white">{platform.problemsSolved}</div>
                              </div>
                            )}
                            {platform.dataStructureScore && (
                              <div>
                                <div className="text-gray-500 text-xs">DS Score</div>
                                <div className="font-medium text-white">{platform.dataStructureScore}</div>
                              </div>
                            )}
                            {platform.algorithmsScore && (
                              <div>
                                <div className="text-gray-500 text-xs">Algo Score</div>
                                <div className="font-medium text-white">{platform.algorithmsScore}</div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CCPPage;