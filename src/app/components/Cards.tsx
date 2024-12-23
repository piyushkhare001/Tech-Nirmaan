/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import React from 'react'

import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
const Cards = () => {
    const router = useRouter();
    const data = [
        {
            img: "https://tse4.mm.bing.net/th?id=OIP.I5PWZjo9BoMTAT6p-rOrcgHaDt&pid=Api&P=0&h=180",
          title: "Master DSA",
          description:
            "Dive deep into Data Structures & Algorithms with curated exercises and guides.",
        },
  
        {
            img: 'https://tse2.mm.bing.net/th?id=OIP.F32Uh00wgNlPhaWU8QONdgHaEK&pid=Api&P=0&h=180',
          title: "Top Resources",
          description:
            "Access handpicked resources, articles, and tools to accelerate learning.",
        },
        {
            img : 'https://tse2.mm.bing.net/th?id=OIP.wsG0rYLtfW6p1vuPN8K3vQHaD4&pid=Api&P=0&h=180' ,
          title: "CS Foundations",
          description: "Build a strong foundation in core Computer Science concepts.",
        },      {
            img: 'https://tse1.mm.bing.net/th?id=OIP.SvM4WiKq6VJoqlm_CfNzpAHaFW&pid=Api&P=0&h=180',
          title: "Career Roadmaps",
          description: "Step-by-step roadmaps to navigate various tech career paths.",
        },
      ];
      
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 bg-gradient-to-b mt-36 max-sm:mt-16  shadow-none  from-zinc-950 via-blue-950 to-zinc-950 p-14">
    {data.map((product, index) => (
  <div key={index}>
    <div className="bg-neutral-900 rounded-2xl p-6 border-2 border-zinc-800 hover:border-zinc-400 shadow-lg flex flex-col items-start  max-w-sm">
      {/* Image */}
      <div className="mb-4">
        <img
          src={product.img}
          alt={product.title}
          className="h-[6rem] w-[8rem] object-fit rounded-lg"
        />
      </div>

      {/* Title */}
      <p className="text-xl font-bold text-white mt-2">{product.title}</p>

      {/* Description */}
      <p className="text-sm text-gray-400 mt-2">{product.description}</p>

      {/* Button */}
      <button
  onClick={() => router.push("/learn")}
  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full px-4 py-2 mt-4 text-sm font-bold transition"
>
  <span>Explore now</span> 
  <FaArrowRight className="text-base" />
</button>

    </div>
  </div>
))}

  </div>
  )
}

export default Cards