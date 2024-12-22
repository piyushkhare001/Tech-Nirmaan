/* eslint-disable react/no-unescaped-entities */
// app/page.tsx or pages/index.tsx
'use client'

import Navbar from "@/app/components/Navbar";
import  Hero from "@/app/components/Hero"
// import { useSession, signIn, signOut } from "next-auth/react";
import WhyChooseUs from "./components/WhyChooseUs";
import Cards from "./components/Cards";
import Footer from "./components/Footer"
export default function Home() {
  // const { data: session } = useSession();
  // console.log("session is ", session);

  return (
    <div  className="w-full bg-zinc-950 overflow-x-hidden"
    style={{
      backgroundSize: "cover",
      backgroundPosition: "start",
      backgroundRepeat: "no-repeat",

    }}>
        <div className="absolute z-10  pointer-events-none inset-0  bg-blue-950  [mask-image:radial-gradient(ellipse_at_center,transparent_50%,purple)]"></div>
      <Navbar />
      <Hero/>
      <Cards/>
      <WhyChooseUs/>
      <Footer/>
 
      {/* Uncomment the code below if you're using authentication */}
      {/* {session ? (
        <div>
          <p>Welcome, {session.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      )} */}
    </div>
  );
}
