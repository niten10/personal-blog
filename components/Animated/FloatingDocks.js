import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandBlogger,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDocks() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Blog",
      icon: (
        <IconBrandBlogger className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blog",
    },

    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/niten10",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com",
    },
  ];

  return (
    <div className="  flex items-center justify-center  w-full ">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links} // Passing the `links` array as `items` prop
      />
    </div>
  );
}
