
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {usePathname } from "next/navigation";

import LogoBG from "../tn-logo.png";


import {
  FaHome,
  FaBook,
  FaProjectDiagram,
  FaBriefcase,
  FaTools,

  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

import Image from "next/image"; // Use next/image for optimized images

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const currentPath = usePathname(); // Current route path


  // Navigation links
  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "DSA Sheet", path: "/dsaSheet", icon: <FaBook /> },
    { name: "CCP", path: "/cpp", icon: <FaBriefcase /> },
    { name: "Roadmaps", path: "/roadmaps", icon: <FaProjectDiagram /> },
    { name: "Projects", path: "/projects", icon: <FaTools /> },
    { name: "Jobs", path: "/jobs", icon: <FaBriefcase /> },
    { name: "Reviews", path: "/reviews", icon: <MdOutlineRateReview /> },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full z-30 bg-blue-950 bg-opacity-20 backdrop-blur-md" 
        >
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-1">
                <Image
                  src={LogoBG.src} 
                  alt="logo"
                  width={60}
                  height={100}
                  className="h-12 w-25 flex-shrink-0"
                />
                <span className="text-white text-xl font-semibold tracking-wide whitespace-nowrap">
                  Tech Nirmaan
                </span>
              </Link>
            </div>

            {/* Navigation Links with Icons (Visible on screens ≥ 900px) */}
            <div className="hidden lg:flex items-center space-x-6">
              <ul className="flex space-x-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className={`flex items-center gap-2 text-white hover:text-gray-300 transition ${
                        currentPath === link.path ? "text-blue-300" : ""
                      }`}
                    >
                      {/* Icons visible on screens ≥ 900px */}
                      {link.icon}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

         
            </div>

            {/* Navigation Links without Icons (Visible on screens < 900px and ≥ md) */}
            <div className="hidden md:flex lg:hidden items-center space-x-4">
              <ul className="flex space-x-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className={`flex items-center text-white hover:text-gray-300 transition ${
                        currentPath === link.path ? "text-blue-300" : ""
                      }`}
                    >
                      {/* Icons hidden on screens < 900px */}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

  
            </div>

            {/* Mobile Menu Toggle (Visible on small screens) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Visible on small screens) */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-md"
          >
            <ul className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`flex items-center gap-2 text-white hover:text-gray-300 transition ${
                      currentPath === link.path ? "text-blue-300" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
        
            </ul>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;