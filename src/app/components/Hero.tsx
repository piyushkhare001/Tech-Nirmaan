// import React from 'react'
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { AuroraBackground } from "@/app/components/ui/aurora-background";
// import { motion } from "framer-motion";
// import { Button } from './ui/button';
// import { FaArrowRight } from 'react-icons/fa';
// const Hero = () => {
//     const router = useRouter()
//     const { data: session } = useSession();
//     const started = () => {
//       if(session) {
//         router.push("/learn")
//       }
//       else{
//         router.push("login")
          
   
//       }
//     }
//   return (


//     <div>
//   <AuroraBackground>
//       <motion.div
//         initial={{ opacity: 0.0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.1,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="relative flex flex-col h-screen gap-24  items-center justify-center px-4"
//       >
//            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-zinc-950  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
// <div className="mt-12 flex flex-col items-center gap-8">
// <div className="text-md z-20 max-sm:text-sm max-sm:mt-4 max-sm:m-3  text-purple-200 font-bold bg-gradient-to-r from-indigo-800 via-violet-800 to-indigo-900 px-4 py-1 rounded-full  tracking-wide">
//   Fastest Growing Job/Internship Platform on the web!!

//       </div>
//  <h2 className=" z-30 max-sm:mt-6  relative   md:text-4xl lg:text-5xl font-bold text-center text-white font-sans tracking-tight">
//  <span className = "gradient-primary inline-block bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500"> {` Nirmaan `}  </span>  
//   <span> Your Skills,</span>  <span > {`Unlock Limitless `}  </span>  
//    <span> Opportunities  and Ship Your <span className = "gradient-primary inline-block bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-blue-700" > Dream Job </span> 
//    </span> 
   
//       </h2>

//       <p className="text-xl  z-30 max-sm:text-md max-sm:m-4 text-zinc-400 text-center max-w-3xl mt-2">
//       Empowering you to Explore DSA, Sharpen Competitive Skills, Master Core CS Concepts, and Build Real-World Projects For Career Success.”

//       </p>
//       <Button 
//                   onClick={started}
//                   className="py-3 px-4 w-56 h-12 z-30 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-violet-800 bg-violet-800 text-white shadow-lg hover:bg-violet-900  "
//                 >   
//                  <span>Get Started</span>
//        <FaArrowRight className="text-base" />
//                 </Button>


                
//       </div>
//       </motion.div>
//       </AuroraBackground>
//     </div>
//   )
// }

// export default Hero


// //src/app/components/Hero.tsx
// "use client";
// import React from 'react';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { AuroraBackground } from '@/app/components/ui/aurora-background';
// import { motion } from 'framer-motion';
// import { Button } from './ui/button';
// import { FaArrowRight } from 'react-icons/fa';

// const Hero = () => {
//   const router = useRouter();
//   const { data: session, status } = useSession();

//   const handleNavigation = () => {
//     if (status === 'loading') return; // Prevent navigation during loading

//     if (session) {
//       router.push('/learn');
//     } else {
//       router.push('/login');
//     }
//   };

//   return (
//     <div>
//       <AuroraBackground>
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1, duration: 0.8, ease: 'easeInOut' }}
//           className="relative flex flex-col h-screen items-center justify-center gap-24 px-4"
//         >
//           <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 pointer-events-none mask-gradient"></div>

//           <div className="mt-12 flex flex-col items-center gap-8">
//             <div className="text-md z-20 max-sm:text-sm max-sm:mt-4 max-sm:m-3 text-purple-200 font-bold bg-gradient-to-r from-indigo-800 via-violet-800 to-indigo-900 px-4 py-1 rounded-full tracking-wide">
//               Your Ultimate Guide to Conquer MNCs and FAANG!
//             </div>

//             <h2 className="z-30 max-sm:mt-6 relative md:text-4xl lg:text-5xl font-bold text-center text-white font-sans tracking-tight">
//               <span className="gradient-primary inline-block bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500">
//                 Nirmaan
//               </span>{' '}  
//               Your Skills, <span>Open Endless Doors,</span>
//               <br></br>
//               <span> and Achieve Your  </span>
//               <span className="gradient-primary inline-block bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-blue-700">
//                 Dream Career
//               </span>
//             </h2>

//             <p className="text-xl z-30 max-sm:text-md max-sm:m-4 text-zinc-400 text-center max-w-3xl mt-2">
//               Empowering you to Explore DSA, Sharpen Competitive Skills, Master Core CS Concepts, and Build Real-World Projects For Career Success.
//             </p>

//             <Button
//               onClick={handleNavigation}
//               className="py-3 px-4 w-56 h-12 z-30 inline-flex items-center gap-x-2 text-lg font-medium rounded-full border border-violet-800 bg-violet-800 text-white shadow-lg hover:bg-violet-900"
//             >
//               <span>Get Started</span>
//               <FaArrowRight className="text-base" />
//             </Button>
//           </div>
//         </motion.div>
//       </AuroraBackground>
//     </div>
//   );
// };

// export default Hero;


"use client";
import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { AuroraBackground } from '@/app/components/ui/aurora-background';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleNavigation = () => {
    if (status === 'loading') return; // Prevent navigation during loading

    if (session) {
      router.push('/learn');
    } else {
      router.push('/login');
    }
  };

  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeInOut' }}
          className="relative flex flex-col h-screen items-center justify-center gap-12 sm:gap-16 px-4"
        >
          {/* Overlay to ensure text is visible */}
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/50 pointer-events-none"></div>

          <div className="mt-8 sm:mt-12 flex flex-col items-center gap-6 sm:gap-8 z-10">
            {/* Tagline */}
            <div className="text-xl text-sm text-center sm:text-md px-4 py-1 text-purple-200 font-bold bg-gradient-to-r from-indigo-800 via-violet-800 to-indigo-900 rounded-full tracking-wide">
              Your Ultimate Guide to Conquer MNCs and FAANG!
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-center text-white font-sans tracking-tight leading-tight sm:leading-snug">
              <span className="gradient-primary inline-block bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500">
                Nirmaan
              </span>{' '}  
              Your Skills, <span>Open Endless Doors,</span>
              <br />
              <span>and Achieve Your </span>
              <span className="gradient-primary inline-block bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-blue-700">
                Dream Career
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-md md:text-lg text-zinc-300 text-center max-w-xs sm:max-w-md md:max-w-2xl mt-2">
              Empowering you to Explore DSA, Sharpen Competitive Skills, Master Core CS Concepts, and Build Real-World Projects For Career Success.
            </p>

            {/* Call-to-Action Button */}
            <Button
              onClick={handleNavigation}
              className="py-3 px-6 w-48 sm:w-56 md:w-64 h-12 sm:h-14 z-30 inline-flex items-center gap-x-2 text-lg sm:text-xl font-semibold rounded-full border border-violet-800 bg-violet-800 text-white shadow-lg hover:bg-violet-900"
              aria-label="Get Started"
            >
              <span>Get Started</span>
              <FaArrowRight className="text-base sm:text-lg" />
            </Button>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

export default Hero;