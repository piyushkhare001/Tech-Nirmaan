/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckCircle, XCircle, Zap, Award, Clock, BookOpen, User, Briefcase, Globe, Video, Lightbulb, ClipboardList, BarChart, Users, TerminalSquare, Code2, Mic, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const data = [
  { icon: <BookOpen className="w-5 h-5 text-blue-400" />, feature: "Beginner's Guide", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
  { icon: <Globe className="w-5 h-5 text-purple-400" />, feature: "Language Support (Multilingual)", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
  { icon: <Zap className="w-5 h-5 text-orange-400" />, feature: "Personalised Roadmaps", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
  { icon: <Clock className="w-5 h-5 text-purple-400" />, feature: "Live Classes", tuf: { type: "no", note: "Only 5% of users watch live classes due to slow pace and unnecessary interactions", highlight: false }, other: { type: "yes" } },
  { icon: <Video className="w-5 h-5 text-blue-400" />, feature: "Recorded Lectures", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
  { icon: <Lightbulb className="w-5 h-5 text-yellow-400" />, feature: "Approach-Wise Dedicated Videos", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
  { icon: <ClipboardList className="w-5 h-5 text-green-400" />, feature: "Daily/Weekly Coding Challenges", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
  { icon: <TerminalSquare className="w-5 h-5 text-indigo-400" />, feature: "Projects [End-to-End / Build & Deploy]", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
  { icon: <BarChart className="w-5 h-5 text-pink-400" />, feature: "Aptitude Preparation", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
  { icon: <Code2 className="w-5 h-5 text-teal-400" />, feature: "Code Review", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
  { icon: <ClipboardList className="w-5 h-5 text-orange-400" />, feature: "Assignments", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
  { icon: <Briefcase className="w-5 h-5 text-yellow-400" />, feature: "Company-Specific Prep Sections", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
  { icon: <User className="w-5 h-5 text-green-400" />, feature: "Career Sessions", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
  { icon: <Mic className="w-5 h-5 text-purple-400" />, feature: "Mock Interviews & Resume Reviews", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
  { icon: <ShieldCheck className="w-5 h-5 text-red-400" />, feature: "Placement Support", tuf: { type: "yes", highlight: true }, other: { type: "no", note: "Often false promises" } },
  { icon: <Users className="w-5 h-5 text-blue-400" />, feature: "Exclusive Community Access", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
  { icon: <Award className="w-5 h-5 text-pink-400" />, feature: "Tech Events & Webinars", tuf: { type: "yes", highlight: true }, other: { type: "no" } },
];

const FeatureBadge = ({ type, note }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: type === "yes" ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-start gap-3"
    >
      {type === "yes" ? (
        <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-400 mt-0.5" />
      ) : (
        <XCircle className="flex-shrink-0 h-5 w-5 text-red-400 mt-0.5" />
      )}
      <div>
        <span className={`font-medium ${type === "yes" ? "text-green-400" : "text-red-400"}`}>
          {type === "yes" ? "Available" : "Not Available"}
        </span>
        {note && <p className="text-sm text-gray-400 mt-1">{note}</p>}
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ item, activeFeature, setActiveFeature, index }: any) => {
  const isActive = activeFeature === index;
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setActiveFeature(index)}
      className={`relative overflow-hidden p-6 rounded-xl cursor-pointer transition-all ${isActive ? 'bg-gradient-to-br from-blue-900/40 to-purple-900/30 border border-blue-500/30' : 'bg-gray-800/30 hover:bg-gray-800/40 border border-transparent'}`}
    >
      {isActive && (
        <motion.div 
          layoutId="activeFeature"
          className="absolute inset-0 bg-blue-900/10 border border-blue-500/20 rounded-xl"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
      <div className="flex items-center gap-3 relative z-10">
        <motion.div 
          animate={{ rotate: isActive ? 10 : 0 }}
          className="p-2 bg-gray-800 rounded-lg"
        >
          {item.icon}
        </motion.div>
        <h3 className="text-lg font-medium text-gray-100">{item.feature}</h3>
      </div>
    </motion.div>
  );
};

const ComparisonCard = ({ title, type, items, activeIndex, expanded }: any) => {
  const visibleItems = expanded ? items : items.slice(0, 5);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl overflow-hidden ${type === 'tuf' ? 'border border-blue-500/30' : 'border border-gray-700'}`}
    >
      <div className={`p-6 border-b ${type === 'tuf' ? 'bg-gradient-to-r from-blue-900/30 to-blue-800/20 border-blue-500/20' : 'bg-gray-800/40 border-gray-700'}`}>
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className={`p-1 rounded-full ${type === 'tuf' ? 'bg-blue-500' : 'bg-gray-600'}`}>
            {type === 'tuf' ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5 text-gray-300" />}
          </span>
          {title}
        </h3>
      </div>
      <div className="divide-y divide-gray-700/50">
        {visibleItems.map((item: any, idx: number) => (
          <div 
            key={idx} 
            className={`p-6 transition-all ${activeIndex === idx ? (type === 'tuf' ? 'bg-blue-900/10' : 'bg-gray-800/60') : ''}`}
          >
            <FeatureBadge type={type === 'tuf' ? item.tuf.type : item.other.type} note={type === 'tuf' ? item.tuf.note : item.other.note} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const FloatingIcons = () => {
  const icons = [
    { icon: <BookOpen className="w-8 h-8 text-blue-400/30" />, x: 10, y: 20, delay: 0 },
    { icon: <Globe className="w-8 h-8 text-purple-400/30" />, x: 80, y: 40, delay: 0.2 },
    { icon: <Zap className="w-8 h-8 text-orange-400/30" />, x: 30, y: 70, delay: 0.4 },
    { icon: <Video className="w-8 h-8 text-blue-400/30" />, x: 70, y: 10, delay: 0.6 },
    { icon: <TerminalSquare className="w-8 h-8 text-indigo-400/30" />, x: 20, y: 50, delay: 0.8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            y: [20, 0, -20],
            x: [icon.x, icon.x + 10, icon.x]
          }}
          transition={{ 
            duration: 15 + idx * 3,
            delay: icon.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute"
          style={{ left: `${icon.x}%`, top: `${icon.y}%` }}
        >
          {icon.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default function WhatSetsUsApart() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % data.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const visibleFeatures = expanded ? data : data.slice(0, 5);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-b from-gray-900 to-gray-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <FloatingIcons />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-gray-800 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              <Zap className="w-4 h-4" />
            </motion.div>
            Competitive Edge
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4"
          >
            What Sets Us Apart
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            See why We provides a more effective learning experience than other platforms
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {visibleFeatures.map((item, idx) => (
              <FeatureCard 
                key={idx}
                item={item}
                activeFeature={activeFeature}
                setActiveFeature={setActiveFeature}
                index={idx}
              />
            ))}
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ComparisonCard 
              title="Tech Nirman Advantages" 
              type="tuf" 
              items={data} 
              activeIndex={activeFeature}
              expanded={expanded}
            />

            <ComparisonCard 
              title="Other Platforms" 
              type="other" 
              items={data} 
              activeIndex={activeFeature}
              expanded={expanded}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <motion.button
            onClick={() => setExpanded(!expanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 py-3 px-6 rounded-lg transition-colors"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-5 h-5" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5" />
                View More Features
              </>
            )}
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl pointer-events-none" />
          <div className="relative bg-gradient-to-r from-blue-900/30 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 text-center z-10">
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold text-white mb-3"
            >
              Ready to experience the difference?
            </motion.h3>
            <motion.p 
              whileHover={{ scale: 1.01 }}
              className="text-gray-300 mb-6 max-w-2xl mx-auto"
            >
              Join thousands of learners who have accelerated their DSA journey with TUFs focused approach
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all hover:shadow-lg"
              >
                Explore our Courses
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(31, 41, 55, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium px-6 py-3 rounded-lg transition-all border border-gray-700"
              >
                Compare Features
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}