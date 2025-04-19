// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
// import { GrUserExpert } from "react-icons/gr";
// import { RiRoadMapLine } from "react-icons/ri";
// import { SiFreecodecamp } from "react-icons/si";
// const WhyChooseUs = () => {

//     const data :any = [
//      {   
//           icon : <GrUserExpert/>,
//           title: "Expert-Crafted Guides",
//           description:
//             "Our resources are developed by industry professionals, ensuring you learn from top-quality, practical content that keeps up with tech trends.",
//         },
//         {
//             icon : <RiRoadMapLine/>,
//           title: "Structured Roadmaps",
//           description:
//             "Follow organized roadmaps in DSA, CS fundamentals, and more. Master each topic through a step-by-step approach designed to make learning easier.",
//         },
//         {
//             icon : <SiFreecodecamp/>,
//           title: "Free and Accessible",
//           description:
//             "EduResources is dedicated to providing open access to all materials. Enjoy unlimited learning without any cost, accessible to everyone.",
//         },
//       ];
      
//   return (
// <div className="bg-gradient-to-b mt-20 max-sm:mt-16 mb-14 shadow-none  from-zinc-950 via-blue-950 to-zinc-950  text-white p-10">
// <div className="text-center font-sans px-44 max-sm:px-8 leading-7">
//     <h1 className="text-3xl max-sm:text-3xl md:text-5xl font-bold leading-7 pb-16">

//       {" "}Why Choose Us...
//     </h1>

// </div>
//          <div className="grid grid-cols-1  m-16 max-sm:mb-0  max-sm:m-8 mb-0 mt-0  md:grid-cols-2 lg:grid-cols-3 gap-14">
//         {data.map((item: { icon: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) : any => (
//           <div
//             key={index}
//             className="p-10  w-[22rem] rounded-lg bg-neutral-900  shadow-xl flex flex-col items-start"
//           >
//             <div className="flex gap-4 ">
//             <div className="text-3xl  text-white mb-4">{item.icon}</div>
//             <h3 className="text-xl text-gray-100 font-semibold mb-2">{item.title}</h3>
//             </div>
//             <p className="text-lg text-gray-400 font-sans">{item.description}</p>
//           </div>
//         ))}
//       </div>


//     </div>
//   )
// }
// export default WhyChooseUs;

//src/app/components/WhyChoose.tsx
// import React from "react";
// import { FaChalkboardTeacher, FaMapSigns, FaHandsHelping } from "react-icons/fa";

// const WhyChooseUs = () => {
//   const data = [
//     {
//       icon: <FaChalkboardTeacher />,
//       title: "Learn from Experts",
//       description:
//         "Master new skills with insights from seasoned professionals and real-world applications.",
//     },
//     {
//       icon: <FaMapSigns />,
//       title: "Structured Learning Paths",
//       description:
//         "Navigate your journey with step-by-step roadmaps that simplify complex topics.",
//     },
//     {
//       icon: <FaHandsHelping />,
//       title: "Supportive Community",
//       description:
//         "Connect with peers and mentors in a thriving community designed for growth.",
//     },
//   ];

//   return (
//     <div className="py-20 px-8 bg-gradient-to-b from-black via-gray-900 to-black">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Title */}
//         <h2 className="text-4xl font-bold text-white text-center mb-12">
//           Why Choose Us
//         </h2>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="group bg-gray-900 rounded-lg p-8 border border-gray-800 shadow-md hover:shadow-xl transition duration-300 transform group-hover:scale-105 flex flex-col items-center text-center"
//             >
//               {/* Icon */}
//               <div className="bg-violet-800 text-white p-4 rounded-full mb-6 shadow-md text-[1.5em]">
//                 {item.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold text-gray-100 mb-4">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-sm text-gray-300">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;


import React from "react";
import { FaChalkboardTeacher, FaMapSigns, FaHandsHelping, FaLightbulb } from "react-icons/fa";

const WhyChooseUs = () => {
  const data = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Learn from Experts",
      description:
        "Master new skills with insights from seasoned professionals and real-world applications.",
    },
    {
      icon: <FaMapSigns />,
      title: "Structured Learning Paths",
      description:
        "Navigate your journey with step-by-step roadmaps that simplify complex topics.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Supportive Community",
      description:
        "Connect with peers and mentors in a thriving community designed for growth.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Resources",
      description:
        "Access cutting-edge tools and resources to stay ahead in your learning journey.",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
          Why Choose Us
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-lg p-6 sm:p-8 border border-gray-800 shadow-md hover:shadow-xl transition duration-300 transform group-hover:scale-105 flex flex-col items-center text-center w-full max-w-sm"
            >
              {/* Icon */}
              <div className="bg-violet-800 text-white p-4 rounded-full mb-6 shadow-md text-[1.5em]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;