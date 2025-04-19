"use client";

import React from "react";
import Navbar from "@/app/components/Navbar"; // Import your Navbar component
import { useRouter } from "next/navigation";
import Image from "next/image"; // Use next/image for optimized images
import FrontedDeveloper from "../../FrontendDeveloper.avif";
import FullStackDeveloper from "../../FullStackDeveloper.webp";
import DevOpsEngineer from "../../DevOpsEngineer.jpeg";
import SoftwareEnginner from "../../SoftwareEngineer.avif";
import UIUX from "../../UIUX.avif";

const Roadmaps = () => {
  const router = useRouter();

  const professions = [
    {
      title: "Frontend Developer",
      description: "Learn how to build user interfaces and web applications.",
      slug: "frontend-developer",
      image: FrontedDeveloper,
    },
    {
      title: "Full Stack Developer",
      description: "Master both frontend and backend development.",
      slug: "full-stack-developer",
      image: FullStackDeveloper, 
    },
    {
      title: "Software Engineer",
      description: "Become a proficient software engineer with this roadmap.",
      slug: "software-engineer",
      image: SoftwareEnginner,
    },
    {
      title: "DevOps Engineer",
      description: "Learn how to manage infrastructure and deployment pipelines.",
      slug: "devops-engineer",
      image: DevOpsEngineer,
    },
    {
      title: "UI/UX Engineer",
      description: "Design and build user-friendly interfaces and experiences.",
      slug: "ui-ux-engineer",
      image: UIUX, // Original image
    },
  ];

  const handleCardClick = (slug: string) => {
    router.push(`/roadmaps/${slug}`); // Navigate to the detailed roadmap page
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="p-6 pt-24 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-10">
          Career Roadmaps
        </h1>
        <p className="text-gray-400 text-center mb-10">
          Choose a career path and follow the roadmap to success!
        </p>

        {/* Profession Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {professions.map((profession, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden hover:shadow-lg hover:border-violet-500 transition-all duration-300 cursor-pointer flex flex-col" // Ensure consistent card height
            >
              {/* Image */}
              {/* <div className="relative h-48"> 
                 <img
                   src={profession.image}
                   alt={profession.title}
                   className="w-full h-full object-cover rounded-t-lg"
                 />
               </div> */}
               <Image
                src={profession.image}
                alt={profession.title}
                width={1000} // Set the width of the image
                height={1000} // Set the height of the image
                className="w-full h-full object-cover rounded-t-lg"
              />

              {/* Card Content */}
              <div className="p-4 flex flex-col flex-grow text-center">
  <h2 className="text-lg font-semibold text-white mb-2">
    {profession.title}
  </h2>
  <p className="text-gray-400 mb-4 text-xs flex-grow">
    {profession.description}
  </p>

  {/* Centered Button */}
  <div className="flex justify-center"> {/* Center the button horizontally */}
    <button
      onClick={() => handleCardClick(profession.slug)}
      className="bg-violet-600 text-white py-1 px-4 rounded-lg hover:bg-violet-700 transition-colors duration-300 text-sm hover:scale-105 transform"
      aria-label={`View ${profession.title} Roadmap`}
    >
      View Roadmap
    </button>
  </div>
</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Roadmaps;