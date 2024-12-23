/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Use next/link instead of react-router-dom's Link
import { useRouter , usePathname } from "next/navigation"; // useRouter can be kept if you still need to push routes manually
import { Button } from "./ui/button";
import { useSession , signOut } from "next-auth/react";
import { toast } from "react-toastify";




const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {data: session} = useSession()

  const router = useRouter(); // Keep this if you want to programmatically navigate
  const currentPath = usePathname()
  const menuVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    open: (index: number) => ({
      rotate: index === 1 ? 45 : -45,
      y: index === 1 ? 7 : -7,
    }),
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-40 2xl:px-0">
        {/* <Announcement /> */}
        <div
          className={` bg-blue-950 bg-opacity-20 ${
            isOpen ? "backdrop-blur-xl" : "backdrop-blur-md"
          } px-6 py-4`}
        >
          <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
            <div className="z-50 max-md:basis-5/12 basis-1/12">
              <Link href="/">
                <img src={'https://res.cloudinary.com/dewxkt3bv/image/upload/v1734911392/logo_p2juqo.png'}  alt="logo" className="h-11 w-15" />
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-7 h-8 flex flex-col justify-center items-center group z-50"
              >
                <motion.div
                  className="w-full h-1 rounded bg-white mb-2.5"
                  custom={1}
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                  variants={lineVariants}
                />
                <motion.div
                  className="w-full h-1 rounded bg-white"
                  custom={2}
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                  variants={lineVariants}
                />
              </button>
            </div>
            <div className="items-center  flex gap-44">
              <ul className="space-x-16 flex max-sm:hidden ">

                {
                  currentPath === "/learn" ? ( <></>) : (      <li>
                    <Link href="/" className="text-white">
                      Home
                    </Link>
                  </li>)
                }
          
          {
                  currentPath === "/learn" ? ( <></>) : (      <li>
                    <Link href="/freeSheet" className="text-white">
                      DSA Sheet
                    </Link>
                  </li>)
                }
                 {
                  currentPath === "/learn" ? ( <></>) : (      <li>
                    <Link href="/learn" className="text-white">
                      Roadmaps
                    </Link>
                  </li>)
                }
                  {
                  currentPath === "/learn" ? ( <></>) : (      <li>
                    <Link href="/learn" className="text-white">
                      Projects
                    </Link>
                  </li>)
                }
                {
                  currentPath === "/learn" ? ( <></>) : (      <li>
                    <Link href="/learn" className="text-white">
                      Jobs
                    </Link>
                  </li>)
                }
              </ul>
              <div className="hidden md:flex space-x-4">

            {
              session ? (
                <Button
  variant="outline"
  onClick={() => {
    toast("Logged out ✅");
    setTimeout(() => {
      signOut({ callbackUrl: "/" }); // Redirect after showing the toast
    }, 2000); // Wait 2 seconds before redirecting
  }}
  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
>
  Log out
</Button>

              ) : (
                <Button  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-violet-800 text-white hover:bg-violet-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"  onClick={() => router.push("/login")}>
       
                Log In
              </Button>
              )
            }
               
              


                
              </div>
            </div>
          </div>
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            className={`flex flex-col sm:hidden h-screen items-start justify-start py-14 px-2 space-y-4 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <motion.ul
              variants={menuVariants}
              className="w-full space-y-4 text-left"
            >
              <motion.li
                variants={itemVariants}
                className="text-white text-base"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/">Home</Link>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="text-white text-base"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/learn">Sheets</Link>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="text-white text-base"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/learn">Roadmaps</Link>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="text-white text-base"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/learn">projects</Link>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="w-full flex"
                onClick={() => setIsOpen(false)}
              >
                          {
              session ? (
                <div

  onClick={() => {
    toast("Logged out ✅");
    setTimeout(() => {
      signOut({ callbackUrl: "/" }); // Redirect after showing the toast
    }, 2000); // Wait 2 seconds before redirecting
  }}
  className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" 
>
  Log out
</div>

              ) : (
                <div  className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"  onClick={() => router.push("/login")}>
       
                Log In
              </div>
              )
            }
              </motion.li>
          
            </motion.ul>
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
