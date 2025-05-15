import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import img2 from "../../../public/TechNirmaan-assets/IMG_5092.jpg";
import img3 from "../../../public/TechNirmaan-assets/IMG_5106.jpg";
import img4 from "../../../public/TechNirmaan-assets/IMG_5182.jpg";
import img5 from "../../../public/TechNirmaan-assets/IMG_5415.jpg";
import img6 from "../../../public/TechNirmaan-assets/IMG_5428.jpg";
import img7 from "../../../public/TechNirmaan-assets/IMG_5430.jpg";
import img8 from "../../../public/TechNirmaan-assets/IMG_5505.jpg";
import img9 from "../../../public/TechNirmaan-assets/IMG_5518.jpg";
import img10 from "../../../public/TechNirmaan-assets/IMG_5520.jpg";
import img11 from "../../../public/TechNirmaan-assets/IMG_5521.jpg";
import img12 from "../../../public/TechNirmaan-assets/IMG_5522.jpg";
import img13 from "../../../public/TechNirmaan-assets/IMG_5526.jpg";

const images = [

  { src: img2, alt: " " },
  { src: img3, alt: " " },
  { src: img4, alt: " " },
  { src: img5, alt: " " },
  { src: img6, alt: " " },
  { src: img7, alt: " " },
  { src: img8, alt: " " },
  { src: img9, alt: " " },
  { src: img10, alt: " " },
  { src: img11, alt: " " },
  { src: img12, alt: " " },
  { src: img13, alt: " " },
];

const ImageGallery = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      {/* Glowing background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 mix-blend-screen"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-15 mix-blend-screen"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 mb-6 font-mono tracking-tighter">
          TECH<span className="text-pink-400">NIRMAAN</span>
        </h1>
        
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
          Capturing the innovation and energy of our tech journey
        </p>

       
      </motion.div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative z-10">
        {images.map((image, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            onClick={() => setSelectedId(index)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 z-10 rounded-2xl pointer-events-none" />
            
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              placeholder="blur"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <motion.p 
                  className="text-white text-xl font-bold mb-1"
                  initial={{ y: 10 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {image.alt}
                </motion.p>
                <motion.p 
                  className="text-gray-300 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Click to view full size
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              layoutId={`card-${selectedId}`}
              className="relative max-w-4xl w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <Image
                src={images[selectedId].src}
                alt={images[selectedId].alt}
                width={1200}
                height={800}
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 bg-gray-900/80 hover:bg-gray-800/90 backdrop-blur-md rounded-full p-3 text-white shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              
           
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
};

export default ImageGallery;