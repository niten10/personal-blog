"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Blogpp from "../app/image/pp.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PricingSection from "@/components/Pricing";
import TopBlogs from "@/components/Topblogs";
import Typed from "typed.js";
import { Github, Linkedin, Twitter, Instagram, Download } from "lucide-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { Skills } from "@/components/Skills";
import { Subscribe } from "@/components/Subscribe";
import { Mainintro } from "@/components/Mainintro";
import { FloatingDocks } from "@/components/Animated/FloatingDocks";
export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const el = useRef("");
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position on scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (el.current) {
      // Ensure the element is available
      const typed = new Typed(el.current, {
        strings: ["Coder", "Designer", "Developer", "Video Editor"],
        typeSpeed: 40,
        backSpeed: 25,
        loop: true,
      });
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }
  }, []);

  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMaskPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <div>
      <main className="flex-1">
        <section className="w-full h-96 py-12 md:py-24 lg:py-32 xl:py-32 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Niten Chhetri
                </h1>
                <p className="mx-auto max-w-[700px] text-orange-600 md:text-xl dark:text-orange-500">
                  Exploring ideas, sharing insights, and connecting with
                  readers.
                </p>
                <h1 className="text-3xl">
                  <span ref={el}></span>
                </h1>
              </div>
              <div className="w-full max-w-sm">
                <Image
                  src={Blogpp}
                  width={200}
                  height={200}
                  alt="Blog Author"
                  className="rounded-full mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <PricingSection /> */}
        <FloatingDocks  />
        <Mainintro />
        <motion.section
          className="container mx-auto px-4 py-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="flex justify-center space-x-6 mb-12">
            <a href="/resume.pdf" download="niten-chhetri-cv">
              <Button className="w-80 bg-red-600 hover:bg-red-500">
                {<Download className="mr-3" />} Download My Curriculum Vitae
                (CV)
              </Button>
            </a>
          </motion.h1>
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Connect With Me
          </motion.h2>
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={containerVariants}
          >
            <motion.a
              href="https://github.com/niten10"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/niten-chhetri-7670a9253/"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/niten.exe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <InstagramLogoIcon className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </motion.section>
        {/* <TopBlogs /> */}
        <Skills />
        <Subscribe />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-orange-500">
          © 2024 Niten Chhetri All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
