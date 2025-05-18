// config/seo.config.js
const BASE_URL = "https://www.technirmaan.in";

export const DEFAULT_SEO = {
  title: "Technirmaan | Master DSA & MERN Stack Development",
  description: "India's best platform for DSA preparation and MERN stack development. Get curated DSA sheets, live mentoring, and project-based courses to crack tech interviews.",
  canonical: BASE_URL,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    site_name: 'Technirmaan',
    images: [
      {
        url: `${BASE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Technirmaan - DSA & MERN Stack Courses',
      },
    ],
  },
  twitter: {
    handle: '@technirmaan',
    site: '@technirmaan',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'DSA course, MERN stack course, coding interview preparation, data structures algorithms, web development course, JavaScript, React, Node.js, MongoDB, coding sheets'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  ],
};

export const DSA_COURSE_SEO = {
  title: "DSA Mastery Program | Crack Coding Interviews",
  description: "Comprehensive Data Structures & Algorithms course with curated DSA sheets, 100+ problems, and expert mentoring to crack FAANG interviews.",
  canonical: `${BASE_URL}/dsa-course`,
  openGraph: {
    ...DEFAULT_SEO.openGraph,
    url: `${BASE_URL}/dsa-course`,
    images: [
      {
        url: `${BASE_URL}/images/dsa-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'DSA Mastery Program - Technirmaan',
      },
    ],
  },
};

export const MERN_COURSE_SEO = {
  title: "MERN Stack Bootcamp | Become Full Stack Developer",
  description: "Project-based MERN stack course covering MongoDB, Express, React, and Node.js. Build 5+ real projects and get job-ready in 3 months.",
  canonical: `${BASE_URL}/mern-course`,
  openGraph: {
    ...DEFAULT_SEO.openGraph,
    url: `${BASE_URL}/mern-course`,
    images: [
      {
        url: `${BASE_URL}/images/mern-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'MERN Stack Bootcamp - Technirmaan',
      },
    ],
  },
};