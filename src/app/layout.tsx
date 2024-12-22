/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
  params = {},
}: {
  children: React.ReactNode;
  params?: {
    session?: any;
  };
}) {
  const { session } = params;

  return (
    <html lang="en">
      <body
        className="bg-black"
      >
     
          <SessionProvider session={session}> 
                <ToastContainer  />
              {children} 
           
               </SessionProvider>
         
     
      </body>
    </html>
  );
}