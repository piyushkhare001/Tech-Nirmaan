// import React, { useRef, useEffect, useState } from "react";
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Testimonials = () => {
//   const testimonialsData = [
//     {
//       quote:
//         "This platform has completely transformed my learning experience. The structured paths and expert guidance are unparalleled!",
//       author: "John Doe",
//       role: "Software Engineer",
//     },
//     {
//       quote:
//         "I love the supportive community and the innovative resources. It's like having a mentor available 24/7!",
//       author: "Jane Smith",
//       role: "Data Scientist",
//     },
//     {
//       quote:
//         "The courses are well-designed, and the hands-on projects helped me land my dream job. Highly recommended!",
//       author: "Alice Johnson",
//       role: "UI/UX Designer",
//     },
//     {
//       quote:
//         "The cutting-edge tools and resources provided here are a game-changer. I feel ahead of the curve!",
//       author: "Michael Brown",
//       role: "Product Manager",
//     },
//     {
//       quote:
//         "The instructors are amazing, and the community is so welcoming. I've learned more here than in years of formal education.",
//       author: "Emily Davis",
//       role: "Full-Stack Developer",
//     },
//   ];

//   const containerRef = useRef<HTMLDivElement>(null);
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

//   useEffect(() => {
//     const calculateConstraints = () => {
//       const container = containerRef.current;
//       const card = cardRef.current;

//       // Ensure the container and card elements exist
//       if (container && card) {
//         const containerWidth = container.offsetWidth;
//         const cardWidth = card.offsetWidth;
//         const gap = 24; // Gap between cards (gap-6 = 1.5rem = 24px)
//         const totalCardsWidth = testimonialsData.length * (cardWidth + gap) - gap; // Total width of all cards + gaps
//         const overflowWidth = totalCardsWidth - containerWidth;

//         if (overflowWidth > 0) {
//           setDragConstraints({ left: -overflowWidth, right: 0 });
//         } else {
//           setDragConstraints({ left: 0, right: 0 });
//         }
//       }
//     };

//     // Calculate constraints on mount and window resize
//     calculateConstraints();
//     window.addEventListener("resize", calculateConstraints);

//     // Cleanup event listener
//     return () => window.removeEventListener("resize", calculateConstraints);
//   }, [testimonialsData.length]);

//   return (
//     <div
//     //  style={{
//     //   transform: 'scale(0.8)',
//     // transformOrigin: 'top left',
//     // width: '125vw',
//     // display: 'inline-block',
//     // }}
//      className="py-20 px-4 sm:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Title */}
//         <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
//           What Our Learners Say
//         </h2>

//         {/* Testimonials Scroll Container */}
//         <div className="overflow-hidden" ref={containerRef}>
//           <motion.div
//             className="flex gap-6 cursor-grab active:cursor-grabbing"
//             drag="x" // Enable horizontal dragging
//             dragConstraints={dragConstraints} // Dynamic drag boundaries
//             whileTap={{ cursor: "grabbing" }} // Change cursor on tap
//             dragElastic={0.1} // Add a slight elastic effect
//           >
//             {testimonialsData.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 ref={index === 0 ? cardRef : null} // Measure the width of the first card
//                 className="group bg-gray-900 rounded-lg p-6 sm:p-8 border border-gray-800 shadow-md hover:shadow-xl transition duration-300 transform group-hover:scale-105 flex-shrink-0 w-72 sm:w-96" // Adjusted width for small screens
//               >
//                 {/* Quote Icon */}
//                 <div className="text-violet-800 text-2xl mb-4">
//                   <FaQuoteLeft />
//                 </div>

//                 {/* Testimonial Quote */}
//                 <p className="text-sm text-gray-300 italic mb-4">
//                   {testimonial.quote}
//                 </p>

//                 {/* Quote Icon */}
//                 <div className="text-violet-800 text-2xl mb-4 text-right">
//                   <FaQuoteRight />
//                 </div>

//                 {/* Author Details */}
//                 <div className="text-right">
//                   <h3 className="text-lg font-semibold text-gray-100">
//                     {testimonial.author}
//                   </h3>
//                   <p className="text-sm text-gray-400">{testimonial.role}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;