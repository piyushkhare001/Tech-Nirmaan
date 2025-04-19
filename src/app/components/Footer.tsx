import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white pt-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="mb-8 sm:mb-0 text-center">
            <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
            <p className="text-sm text-gray-300">
              We are dedicated to providing the best learning experience with
              expert guidance, innovative resources, and a supportive community.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8 sm:mb-0 text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="text-sm text-gray-300">
              <li className="mb-2">
                <a href="#" className="hover:text-violet-500 transition duration-300">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-violet-500 transition duration-300">
                  DSA Sheet
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-violet-500 transition duration-300">
                  Roadmaps
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-violet-500 transition duration-300">
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-violet-500 transition duration-300">
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mb-8 sm:mb-0 text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-violet-500 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-violet-500 transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-violet-500 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-violet-500 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="text-sm text-gray-300">
              <li className="mb-2 flex items-center justify-center">
                <FaEnvelope className="mr-2 text-white hover:text-violet-500 transition duration-300" />
                <a
                  href="mailto:support@technirmaan.net"
                  className="hover:text-violet-500 transition duration-300"
                >
                  support@technirmaan.net
                </a>
              </li>
              <li className="mb-2 flex items-center justify-center">
                <FaPhone className="mr-2 text-white hover:text-violet-500 transition duration-300" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-violet-500 transition duration-300"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Technirmaan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;