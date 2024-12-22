/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/app/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Mentorship from "@/app/components/Mentorship";
import Projects from "@/app/components/Projects";
import Jobs from "@/app/components/Jobs";
import Problems from "@/app/components/Problems";
import Sheets from "@/app/components/Sheets";
import Roadmaps from "@/app/components/Roadmaps";

export default function SidebarDemo() {
  const { data: session } = useSession();
  const userName: any = session?.user?.name;
  console.log(session);

  // Links with their respective components
  const links = [
    {
      label: "Roadmaps",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      component: <Roadmaps />, // Add corresponding component
    },
    {
      label: "Sheets",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      component: <Sheets />, // Add corresponding component
    },
    {
      label: "Problems",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      component: <Problems />, // Add corresponding component
    },
    {
      label: "Jobs",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      component: <Jobs />, // Add corresponding component
    },
    {
      label: "Projects",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      component: <Projects />, // Add corresponding component
    },
    {
      label: "Mentorship",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      component: <Mentorship />, // Add corresponding component
    },
  ];

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("Roadmaps");

  // Handle click on the link
  const handleLinkClick = (label: string) => {
    setActiveLink(label); // Update the active link
  };

  return (
    <div
      className={cn(
        "rounded-md mt-10 flex flex-col md:flex-row w-full flex-1 max-w-7xl mx-auto border border-black overflow-hidden",
        "h-screen" // Use full height instead of 60vh
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 ">
            <div className="mt-20 flex flex-col gap-5">
              {links.map((link, idx) => (
                <div key={idx} onClick={() => handleLinkClick(link.label)}>
                  <SidebarLink link={link} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: userName,
                href: "#",
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard activeLink={activeLink} links={links} />
    </div>
  );
}

// Dummy dashboard component with conditional content
const Dashboard = ({ activeLink, links }: { activeLink: string, links: any[] }) => {
  const selectedLink = links.find((link) => link.label === activeLink);

  return (
    <div className="flex flex-1 bg-zinc-950 p-4">
      {/* Conditionally render the component based on active link */}
      {selectedLink?.component}
    </div>
  );
};

// Dummy components for each link






