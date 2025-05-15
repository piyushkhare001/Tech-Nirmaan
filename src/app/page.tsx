// /* eslint-disable react/no-unescaped-entities */
// app/page.tsx
'use client'

import Navbar from "@/app/components/Navbar";
import  Hero from "@/app/components/Hero"
//import WhyChooseUs from "./components/WhyChooseUs";
import Cards from "./components/Cards";
import CompanyLogosSwiper from "./components/CompanySwiper";
//import Testmonials from "./components/Testimonials";
import Footer from "./components/Footer";
//import ComparisonTable from "./components/ComparisonTable";
import WhatSetsUsApart from "./components/WhatSetsUsApart";
import CourseCards from "./components/CourseCards";
import ImageGallery from "./components/ImageGallery"; 
import SupremeAnnouncement from "./components/SupremeAnnouncement";

export default function Home() {


  return (
    <div  className="w-full bg-zinc-950 overflow-x-hidden"
    //  style={{
    //       transform: 'scale(0.8)',
    //     transformOrigin: 'top left',
    //     width: '125vw',
    //     display: 'inline-block',
    //     }}
    >
        <div className="absolute z-10  pointer-events-none inset-0  bg-blue-950  [mask-image:radial-gradient(ellipse_at_center,transparent_50%,purple)]"></div>

      <Navbar />
      <Hero/>
      <SupremeAnnouncement/>
      <Cards/>
      {/* <WhyChooseUs/>
      <ComparisonTable/> */}
      <WhatSetsUsApart/>
      <CourseCards/>
      <ImageGallery/>
      {/* <Testmonials /> */}
      <CompanyLogosSwiper/>
      <Footer/>
 
     </div>
  );
}
