"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

// Import your logos
import accenture from "../../../../my-app/public/companies-logos/accenture.png";
import amazon from "../../../../my-app/public/companies-logos/Amazon-Logo.png";
import capg from "../../../../my-app/public/companies-logos/capg.png";
import geDigital from "../../../../my-app/public/companies-logos/ge-digital.png";
import infosys from "../../../../my-app/public/companies-logos/infosys.png";
import lti from "../../../../my-app/public/companies-logos/lti.png";
import salesforce from "../../../../my-app/public/companies-logos/salesforce.png";
import tcs from "../../../../my-app/public/companies-logos/tcs.png";
import ubs from "../../../../my-app/public/companies-logos/ubs.png";

const companyLogos = [
  { name: "Accenture", logo: accenture, minWidth: 180 },
  { name: "Amazon", logo: amazon, minWidth: 150 },
  { name: "Capgemini", logo: capg, minWidth: 180 },
  { name: "GE Digital", logo: geDigital, minWidth: 120 },
  { name: "Infosys", logo: infosys, minWidth: 150 },
  { name: "LTI", logo: lti, minWidth: 100 },
  { name: "Salesforce", logo: salesforce, minWidth: 180 },
  { name: "TCS", logo: tcs, minWidth: 100 },
  { name: "UBS", logo: ubs, minWidth: 100 }
];

export default function CompanyLogosSwiper() {
  return (
    <div className="w-full py-12">
      <h2 className="text-center text-white mb-10 text-3xl font-bold tracking-tight">
        Our Hiring Partners
      </h2>
      <div className="relative px-4">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-950 to-transparent z-10" />
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 4, spaceBetween: 50 },
            1024: { slidesPerView: 5, spaceBetween: 60 },
            1280: { slidesPerView: 6, spaceBetween: 70 }
          }}
          className="!overflow-visible"
        >
          {companyLogos.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-32 px-2">
                <div 
                  className="relative w-full h-full transition-all duration-500 hover:scale-105"
                  style={{ minWidth: `${company.minWidth}px` }}
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain transition-all duration-300 opacity-90 hover:opacity-100"
                    style={{ filter: 'none' }} // Remove grayscale completely
                    loading="lazy"
                    sizes="(max-width: 768px) 150px, 200px"
                    quality={100}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}