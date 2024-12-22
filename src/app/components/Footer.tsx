'use client'
import React, { useEffect } from "react";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../my-app/public/Logo.png"

const NewFooter: React.FC = () => {
  const scrolltoabout = () => {
    const heroDiv = document.getElementById("hero");
    if (heroDiv) {
      heroDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const footer = document.querySelector('div.flex.bg-purple-800') as HTMLDivElement | null;
    if (footer) {
      footer.style.backgroundColor = 'black';
      footer.style.opacity = '1';
    }
    return () => {
      if (footer) {
        footer.style.backgroundColor = ''; // Reset background color
        footer.style.opacity = ''; // Reset opacity
      }
    };
  }, []);

  return (
    <div className="flex flex-col bg-purple-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="mx-auto max-w-7xl flex-grow py-8 w-full px-4 xl:px-0">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
          <div className="flex-col">
            <Link href="/">
              <Image src={Logo} alt="logo" className="h-11 w-auto" />
            </Link>
            <p className="text-white mt-3 font-regular">
              Craft Your Success Story: Build Your Perfect Resume Today!
            </p>
            <div className="flex flex-row items-center justify-start gap-4 my-8">
              <Link href="#">
                <FiFacebook color="#FFFFFF" size="20" />
              </Link>
              <Link href="#">
                <FiTwitter color="#FFFFFF" size="20" />
              </Link>
              <Link href="#">
                <FiInstagram color="#FFFFFF" size="20" />
              </Link>
              <Link href="#">
                <FiLinkedin color="#FFFFFF" size="20" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between basis-1/2 gap-8">
            <div className="flex-col flex">
              <h3 className="text-white text-base font-regular mb-2">Company</h3>
              <Link
                href="/learn"
                onClick={() => scrolltoabout()}
                className="text-white text-base font-regular hover:text-gray-300 transition-all mt-2"
              >
                mentorship
              </Link>
              <Link
                href="/learn"
                className="text-white text-base font-regular hover:text-gray-300 transition-all mt-2"
              >
                jobs
              </Link>
              <Link
                href="/learn"
                className="text-white text-base font-regular hover:text-gray-300 transition-all mt-2"
              >
                 Roadmaps
              </Link>
              <a
                href="/learn"
                className="text-white text-base font-regular hover:text-gray-300 transition-all mt-2"
              >
                Projects
              </a>
            </div>
            <div className="flex-col flex">
              <h3 className="text-white text-base font-regular mb-2">Products</h3>
              <Link
                href="/learn"
                className="text-white text-base font-regular hover:text-gray-300 transition-all mt-2"
              >
                learn
              </Link>
              <Link
                href="/learn"
                className="text-white text-base font-regular hover:text-gray-300 transition-all mt-2"
              >
                Dsa Sheets
              </Link>
              <Link
                href="/learn"
                className="text-white text-base font-regular hover:text-gray-300 transition-all mt-2"
              >
                Notes
              </Link>
              <Link
                href="/learn"
                className="text-white text-base font-regular hover:text-gray-300 transition-all mt-2"
              >
                Job 
              </Link>
            </div>
          </div>
        </div>
        <div className="p-[0.1px] bg-white w-full my-10"></div>
        <p className="text-white text-sm font-regular mt-2">
          © {new Date().getFullYear()} TechNirmaan. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default NewFooter;
