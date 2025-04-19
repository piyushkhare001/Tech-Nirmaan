// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable react/jsx-no-undef */
// import React from 'react'

// import { useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";
// const Cards = () => {
//     const router = useRouter();
//     const data = [
//         {
//             img: "https://tse4.mm.bing.net/th?id=OIP.I5PWZjo9BoMTAT6p-rOrcgHaDt&pid=Api&P=0&h=180",
//           title: "Master DSA",
//           description:
//             "Dive deep into Data Structures & Algorithms with curated exercises and guides.",
//         },
  
//         {
//             img: 'https://tse2.mm.bing.net/th?id=OIP.F32Uh00wgNlPhaWU8QONdgHaEK&pid=Api&P=0&h=180',
//           title: "Top Resources",
//           description:
//             "Access handpicked resources, articles, and tools to accelerate learning.",
//         },
//         {
//             img : 'https://tse2.mm.bing.net/th?id=OIP.wsG0rYLtfW6p1vuPN8K3vQHaD4&pid=Api&P=0&h=180' ,
//           title: "CS Foundations",
//           description: "Build a strong foundation in core Computer Science concepts.",
//         },      {
//             img: 'https://tse1.mm.bing.net/th?id=OIP.SvM4WiKq6VJoqlm_CfNzpAHaFW&pid=Api&P=0&h=180',
//           title: "Career Roadmaps",
//           description: "Step-by-step roadmaps to navigate various tech career paths.",
//         },
//       ];
      
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 bg-gradient-to-b mt-36 max-sm:mt-16  shadow-none  from-zinc-950 via-blue-950 to-zinc-950 p-14">
//     {data.map((product, index) => (
//   <div key={index}>
//     <div className="bg-neutral-900 rounded-2xl p-6 border-2 border-zinc-800 hover:border-zinc-400 shadow-lg flex flex-col items-start  max-w-sm">
//       {/* Image */}
//       <div className="mb-4">
//         <img
//           src={product.img}
//           alt={product.title}
//           className="h-[6rem] w-[8rem] object-fit rounded-lg"
//         />
//       </div>

//       {/* Title */}
//       <p className="text-xl font-bold text-white mt-2">{product.title}</p>

//       {/* Description */}
//       <p className="text-sm text-gray-400 mt-2">{product.description}</p>

//       {/* Button */}
//       <button
//   onClick={() => router.push("/learn")}
//   className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full px-4 py-2 mt-4 text-sm font-bold transition"
// >
//   <span>Explore now</span> 
//   <FaArrowRight className="text-base" />
// </button>

//     </div>
//   </div>
// ))}

//   </div>
//   )
// }

// //src/app/components/Cards.tsx
// import React from "react";
// import { useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";

// const Cards = () => {
//   const router = useRouter();

//   const data = [
//     {
//       img: "https://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxkYXRhJTIwc3RydWN0dXJlfGVufDB8fHx8MTY4OTAwMDkwNA&ixlib=rb-1.2.1&q=80&w=400",
//       title: "Master DSA",
//       description:
//         "Learn Data Structures & Algorithms with structured exercises and guides.",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNhcmVlcnxlbnwwfHx8fDE2ODkwMDA5MDQ&ixlib=rb-1.2.1&q=80&w=400",
//       title: "Career Roadmaps",
//       description:
//         "Navigate your career journey with guided paths tailored to your aspirations.",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHx8fDE2ODkwMDA5MDQ&ixlib=rb-1.2.1&q=80&w=400",
//       title: "Projects",
//       description:
//         "Build real-world projects to enhance your portfolio and gain practical experience.",
//     },
//     {
//       img: "https://tse2.mm.bing.net/th?id=OIP.F32Uh00wgNlPhaWU8QONdgHaEK&pid=Api&P=0&h=180",
//       title: "Top Resources",
//       description:
//         "Access curated resources, tutorials, and tools to boost your learning journey.",
//     },
//   ];

//   return (
//     <div className="py-20 px-8 bg-gradient-to-b from-black via-gray-900 to-black">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Title */}
//         <h2 className="text-4xl font-bold text-gray-200 text-center mb-12">
//           Explore Our Resources
//         </h2>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Updated to 4 cards */}
//           {data.map((product, index) => (
//             <div key={index} className="group">
//               <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-md hover:shadow-lg transition duration-200 transform group-hover:scale-105 flex flex-col items-center text-center max-w-xs mx-auto">
//                 {/* Image */}
//                 <div className="mb-6">
//                   <img
//                     src={product.img}
//                     alt={product.title}
//                     className="h-24 w-24 object-cover rounded-full shadow-sm"
//                   />
//                 </div>

//                 {/* Title */}
//                 <p className="text-xl font-semibold text-gray-100 mb-3">
//                   {product.title}
//                 </p>

//                 {/* Description */}
//                 <p className="text-sm text-gray-400 mb-4">
//                   {product.description}
//                 </p>

//                 {/* Button */}
//                 <button
//                   onClick={() => router.push("/learn")}
//                   className="flex items-center gap-2 bg-violet-800 hover:bg-blue-500 text-white rounded-full px-5 py-2 text-sm font-bold transition"
//                 >
//                   <span>Explore now</span>
//                   <FaArrowRight className="text-base" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;


import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"; // Use next/image for optimized images
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
    },
    {
      img: Roadmaps,
      title: "Career Roadmaps",
      description:
        "Navigate your career journey with guided paths tailored to your aspirations.",
    },
    {
      img: Projects,
      title: "Projects",
      description:
        "Build real-world projects to enhance your portfolio and gain practical experience.",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.F32Uh00wgNlPhaWU8QONdgHaEK&pid=Api&P=0&h=180",
      title: "Top Resources",
      description:
        "Access curated resources, tutorials, and tools to boost your learning journey.",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-200 text-center mb-8 sm:mb-12">
          Explore Our Resources
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {data.map((product, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-md hover:shadow-lg transition duration-200 transform group-hover:scale-105 flex flex-col items-center text-center max-w-xs mx-auto w-full">
                {/* Image */}
                <div className="mb-6">
                  <Image
                    src={product.img}
                    alt={product.title}
                    height={150}
                    width={150}
                    className=" sm:h-24 sm:w-24 object-cover rounded-full shadow-sm"
                  />
                </div>

                {/* Title */}
                <p className="text-xl font-semibold text-gray-100 mb-3">
                  {product.title}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4">
                  {product.description}
                </p>

                {/* Button */}
                <button
                  onClick={() => router.push("/dsaSheet")}
                  className="flex items-center gap-2 bg-violet-800 hover:bg-blue-500 text-white rounded-full px-5 py-2 text-sm font-bold transition"
                >
                  <span>Explore now</span>
                  <FaArrowRight className="text-base" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;