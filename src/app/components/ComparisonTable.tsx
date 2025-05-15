// import React from "react";
// import { CheckCircle, ChevronRight, Zap, XCircle } from "lucide-react";

// const features = [
//   {
//     title: "Content Organization",
//     tuf: "Content is scattered across multiple platforms, and the quality often varies, leading to distractions and a lack of consistency.",
//     tufPlus: "Everything is consolidated under one platform, saving you time and helping you stay focused without switching platforms.",
//   },
//   {
//     title: "DSA Videos",
//     tuf: "DSA videos are on YouTube, but advanced topics like recursion, strings, and heaps are not included.",
//     tufPlus: "The entire Basic DSA is freshly recorded based on user feedback. Advanced topics are available exclusively on TUF+. Around 50% of YouTube videos are re-used, carefully edited, and broken into subparts to save time while ensuring clarity.",
//   },
//   {
//     title: "Practice Problems and Blogs",
//     tuf: "AZZ, SDE, and 79 Sheets for DSA are available but lack many basic problems and practice problems and blogs might not align with the videos.",
//     tufPlus: "A dedicated premium practice platform with a complete set of problems, including basic and premium ones. Features like a time complexity analyzer and in-depth code reviews for your code ensure you're fully prepared for interviews.",
//   },
//   {
//     title: "Topic Contests",
//     tuf: "-",
//     tufPlus: "Topic-specific contests are available to help you practice under real-time pressure and evaluate your understanding.",
//   },
//   {
//     title: "OOPs Content",
//     tuf: "-",
//     tufPlus: "OOPs videos, quizzes, and practice problems are already available, providing comprehensive coverage to strengthen your fundamentals.",
//   },
// ];

// const ComparisonTable = () => {
//   return (
//     <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <span className="inline-flex items-center gap-2 bg-gray-800 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <Zap className="w-4 h-4" />
//             Why Choose TUF+
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
//             Feature Comparison
//           </h2>
//           <p className="text-lg text-gray-400 max-w-3xl mx-auto">
//             See how TUF+ provides a superior learning experience compared to standard TUF
//           </p>
//         </div>

//         <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
//           <div className="grid grid-cols-12 bg-gray-800/50 border-b border-gray-800">
//             <div className="col-span-12 md:col-span-4 p-6 border-b md:border-b-0 md:border-r border-gray-800">
//               <h3 className="text-xl font-bold text-gray-100 mb-2">Features</h3>
//               <p className="text-gray-400 text-sm">Key aspects of the learning experience</p>
//             </div>
//             <div className="col-span-6 md:col-span-4 p-6 border-b md:border-b-0 border-gray-800">
//               <h3 className="text-xl font-bold text-gray-300 mb-2">TUF</h3>
//               <p className="text-gray-500 text-sm">Basic offering</p>
//             </div>
//             <div className="col-span-6 md:col-span-4 p-6 relative">
//               <h3 className="text-xl font-bold text-white mb-2">TUF+</h3>
//               <p className="text-blue-400 text-sm">Premium experience</p>
//               <div className="absolute top-4 right-4 bg-blue-500/10 text-blue-400 px-2 py-1 rounded-md text-xs font-medium">
//                 Recommended
//               </div>
//             </div>
//           </div>

//           {features.map((feature, idx) => (
//             <div 
//               key={idx} 
//               className={`grid grid-cols-12 hover:bg-gray-800/30 transition-colors ${idx % 2 === 0 ? 'bg-gray-900/20' : 'bg-gray-900/40'}`}
//             >
//               <div className="col-span-12 md:col-span-4 p-6 border-b md:border-b-0 md:border-r border-gray-800">
//                 <h4 className="font-semibold text-gray-100 flex items-center gap-2">
//                   <ChevronRight className="w-4 h-4 text-blue-400" />
//                   {feature.title}
//                 </h4>
//               </div>
//               <div className="col-span-6 md:col-span-4 p-6 border-b md:border-b-0 border-gray-800">
//                 {feature.tuf === "-" ? (
//                   <div className="flex items-start gap-3">
//                     <XCircle className="flex-shrink-0 h-5 w-5 text-gray-600 mt-0.5" />
//                     <span className="text-gray-500">Not available</span>
//                   </div>
//                 ) : (
//                   <p className="text-gray-400">{feature.tuf}</p>
//                 )}
//               </div>
//               <div className="col-span-6 md:col-span-4 p-6">
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-400 mt-0.5" />
//                   <p className="text-gray-100">{feature.tufPlus}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-12 bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
//           <h3 className="text-xl font-bold text-gray-100 mb-2">Ready to upgrade your learning?</h3>
//           <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
//             TUF+ provides everything you need for comprehensive DSA mastery in one place
//           </p>
//           <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
//             Explore TUF+ Features
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ComparisonTable;