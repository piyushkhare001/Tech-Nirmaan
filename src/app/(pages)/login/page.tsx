'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { signIn, useSession } from "next-auth/react";
import Navbar from '@/app/components/Navbar';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';

const Login = () => {
  const { data: session } = useSession();
 const router = useRouter()
  const checkAlreadyLogin = () => {
    if (session && session?.user?.name) {
      toast.error(`${session?.user?.name}, you are already logged in!`);
      return true; // Return true to indicate the user is already logged in
    }
    return false; // Not logged in
  };
  const handleLogin = () => {
    // Check if the user is already logged in
    if (checkAlreadyLogin()) {
      router.push("/learn"); // Redirect to /learn if already logged in
      return;
    }
  
    // If not logged in, proceed with Google sign-in and redirect to /learn after login
    signIn("google", { callbackUrl: "/learn" });
  };
  
  React.useEffect(() => {
    if (session?.user) {
      toast.success(`Welcome, ${session.user.name}! Successfully logged in ✅`);
    }
  }, [session]);
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 z-20 flex flex-col items-center gap-8 justify-center bg-gradient-to-b pt-28 max-sm:mt-16 shadow-none from-slate-900 via-zinc-950 to-slate-900 text-white">
        <p className="text-md text-gray-400 mb-4">
          Simplify your login process with one-click Google access.
        </p>
        <div className="space-y-4">
          <button
            onClick={handleLogin}
            className="w-full flex items-center justify-center bg-white text-black px-4 py-2 rounded-lg shadow"
          >
            <img
              src="https://s.yimg.com/fz/api/res/1.2/Qpybtr24YAUp2UGFYg1M5A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/fe90b2b3-0ac3-3c81-8238-d3724bf23104/t_500x300"
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
          <div className="flex items-center justify-center text-gray-500">
            <hr className="flex-grow border-gray-600" />
            <span className="px-2 text-sm">or Continue with</span>
            <hr className="flex-grow border-gray-600" />

          </div>
          <input
            type="text"
            placeholder="Enter your email address or phone number"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white">
            Continue
          </button>
        </div>
        <p className="text-center text-sm text-gray-400 mt-4">
          Do not have an Account?{" "}
          <a href="" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>

      </div>
    </>
  );
};

export default Login;
