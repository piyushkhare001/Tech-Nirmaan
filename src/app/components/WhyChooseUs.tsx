/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { GrUserExpert } from "react-icons/gr";
import { RiRoadMapLine } from "react-icons/ri";
import { SiFreecodecamp } from "react-icons/si";
const WhyChooseUs = () => {

    const data :any = [
     {   
          icon : <GrUserExpert/>,
          title: "Expert-Crafted Guides",
          description:
            "Our resources are developed by industry professionals, ensuring you learn from top-quality, practical content that keeps up with tech trends.",
        },
        {
            icon : <RiRoadMapLine/>,
          title: "Structured Roadmaps",
          description:
            "Follow organized roadmaps in DSA, CS fundamentals, and more. Master each topic through a step-by-step approach designed to make learning easier.",
        },
        {
            icon : <SiFreecodecamp/>,
          title: "Free and Accessible",
          description:
            "EduResources is dedicated to providing open access to all materials. Enjoy unlimited learning without any cost, accessible to everyone.",
        },
      ];
      
  return (
<div className="bg-gradient-to-b mt-20 max-sm:mt-16 mb-14 shadow-none  from-zinc-950 via-blue-950 to-zinc-950  text-white p-10">
<div className="text-center font-sans px-44 max-sm:px-8 leading-7">
    <h1 className="text-3xl max-sm:text-3xl md:text-5xl font-bold leading-7 pb-16">

      {" "}Why Choose Us...
    </h1>

</div>
         <div className="grid grid-cols-1  m-16 max-sm:mb-0  max-sm:m-8 mb-0 mt-0  md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((item: { icon: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) : any => (
          <div
            key={index}
            className="p-10  w-[22rem] rounded-lg bg-neutral-900  shadow-xl flex flex-col items-start"
          >
            <div className="flex gap-4 ">
            <div className="text-3xl  text-white mb-4">{item.icon}</div>
            <h3 className="text-xl text-gray-100 font-semibold mb-2">{item.title}</h3>
            </div>
            <p className="text-lg text-gray-400 font-sans">{item.description}</p>
          </div>
        ))}
      </div>


    </div>
  )
}

export default WhyChooseUs