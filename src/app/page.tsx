// /* eslint-disable react/no-unescaped-entities */
// app/page.tsx
'use client'


import { NextSeo } from 'next-seo'; 
import { DEFAULT_SEO } from '../../seo.config';



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
import Head from "next/head";

export default function Home() {


  return (
    <>
     <NextSeo {...DEFAULT_SEO} />
    <Head>
  <title>Master DSA & MERN Stack | Technirmaan - Best Coding Courses Online</title>
  <meta name="description" content="Join India's top-rated DSA & MERN Stack courses. Get curated DSA sheets, live mentoring, and project-based learning to become job-ready. Enroll today!" />
  <meta name="keywords" content="DSA course, MERN stack training, coding sheets, data structures algorithms, web development course, JavaScript, React, Node.js" />
</Head>
    
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
     </>
  );
}
