//src/app/layout.tsx

// /* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import "./globals.css";

import { NextSeo } from 'next-seo'; 
import { DEFAULT_SEO } from '../../seo.config';
import Head from "next/head";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        
    <Head>
  <title>Master DSA & MERN Stack | Technirmaan - Best Coding Courses Online</title>
  <meta name="description" content="Join India's top-rated DSA & MERN Stack courses. Get curated DSA sheets, live mentoring, and project-based learning to become job-ready. Enroll today!" />
  <meta name="keywords" content="DSA course, MERN stack training, coding sheets, data structures algorithms, web development course, JavaScript, React, Node.js" />
</Head>
    
      <body className="bg-black">
        
       <NextSeo {...DEFAULT_SEO} />
          {children}
      
      </body>
    </html>
  );
}
