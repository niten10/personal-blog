"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Blogpp from "../app/image/pp.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import PricingSection from "@/components/Pricing";
import TopBlogs from "@/components/Topblogs";
import Coverpp from "../app/image/fullcover-pp.jpg";
import Typed from "typed.js";
import { Github, Linkedin, Twitter, Instagram, Download } from "lucide-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useState } from "react";
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
  }, []);

  return (
    <div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Niten Chhetri
                </h1>
                <p className="mx-auto max-w-[700px] text-orange-600 md:text-xl dark:text-orange-500S">
                  Exploring ideas, sharing insights, and connecting with
                  readers.
                </p>
                <h1 className="text-3xl">
                  <span ref={el}></span>
                </h1>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Image
                  src={Blogpp}
                  width={400}
                  height={400}
                  alt="Blog Author"
                  className="rounded-full mx-auto md:w-200 md:h-200"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <PricingSection /> */}

        <motion.section
          initial={{ opacity: 0, y: -200 }} // Start off-screen above
          animate={{
            opacity: scrollY > 100 ? 1 : 0, // Fade in when scrolled down
            y: scrollY > 100 ? 0 : -100, // Move down when scrolled
          }}
          transition={{
            duration: 1, // Animation duration in seconds
            ease: "easeOut", // Easing function for smooth transition
          }}
          className="w-full flex"
        >
          <div className="w-full sm:w-1/2 flex flex-col ml-4 sm:ml-20">
            <Link href="/about"></Link>
            <h1 className="text-xl font-bold mb-4">About Me</h1>
            <p className="w-full sm:w-2/3">
              <span className="text-orange-600">Namaste</span>, I&apos;m Niten
              Pandit Chhetri, an Information Management undergraduate with a
              passion for web development and digital marketing. I&rsquo;ve
              gained hands-on experience building projects like an eCommerce
              website and a personal blog, focusing on creating seamless user
              experiences with technologies like the MERN stack, React, and
              Next.js. I&rsquo;m particularly interested in digital marketing
              strategies such as SEO, content marketing, and social media
              marketing.
              <span className="bg-blue-500">
                I believe combining web development with digital marketing can
                create
              </span>{" "}
              engaging user-centered solutions that drive business growth.{" "}
            </p>
            <Link href="/about" className="underline hover:text-orange-600">
              Learn More
            </Link>
          </div>
          <div className="mt-4 sm:mt-0">
            <Image src={Coverpp} width={400} height={500} alt="cover picture" />
          </div>
        </motion.section>

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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Stay Updated
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Subscribe to my newsletter to receive the latest blog posts
                  and updates.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
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
