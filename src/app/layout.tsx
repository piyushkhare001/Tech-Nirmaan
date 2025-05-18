//src/app/layout.tsx

// /* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        
      
          {children}
      
      </body>
    </html>
  );
}
