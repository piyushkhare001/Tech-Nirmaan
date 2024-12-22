/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import Learn from "@/app/components/learn-built-in"
import Navbar from '@/app/components/Navbar'
import { useRouter } from 'next/navigation'
import {  useSession } from "next-auth/react";
const page = () => {
  const { data: session, status } = useSession();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter()

  useEffect(() => {
    if (status !== "loading") {
      if (session) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        // Show a toast and redirect to the login page
        toast.error("You are not logged in");
        router.push("/login");
      }
    }
  }, [session, status, router]);

  // Check if session is loading
  if (status === "loading") {
    return <div className='flex justify-center items-center text-white font-3xl'>Loading...</div>; // Optional: You can show a loading state if needed
  }

  return (
    <div className=''>
 <>
      {session ? (
        <>
          <Navbar />
          <Learn />
        </>
      ) : (
<></>
      )}
    </>
      
        
    </div>
  )
}

export default page