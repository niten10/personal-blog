"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, Linkedin, Twitter, Instagram, Download } from "lucide-react";
import Link from "next/link";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import ReactLogo from "../image/pp.png";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react"; // Import React hooks

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0); // State to track scroll position

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position on scroll
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

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

  const skills = [
    { name: "React JS", logo: { ReactLogo } },
    { name: "HTML", logo: "" },
    { name: "Next JS", logo: "/placeholder.svg" },
    { name: "Figma", logo: "/placeholder.svg" },
    { name: "Mern Stack", logo: "/placeholder.svg" },
    { name: "Tailwind Css", logo: "/placeholder.svg" },
    { name: "SEO", logo: "/placeholder.svg" },
    { name: "Content Creation", logo: "/placeholder.svg" },
  ];

  return (
    <div className=" min-h-screen  ">
      <motion.section
        className="container mx-auto px-4 py-6 flex flex-col items-center justify-center text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-10  "
          variants={itemVariants}
        >
          About Me
        </motion.h1>

        {/* About Me section with scrollY-based animation */}
        <motion.section
          // initial={{ opacity: 0, y: -200 }} // Start off-screen above
          // animate={{
          //   opacity: scrollY > 100 ? 1 : 0, // Fade in when scrolled down
          //   y: scrollY > 10 ? 0 : -100, // Move down when scrolled
          // }}
          // transition={{
          //   duration: 1, // Animation duration in seconds
          //   ease: "easeOut", // Easing function for smooth transition
          // }}
          className="w-full flex flex-col sm:flex-row mb-6"
        >
          <div className="w-full sm:w-1/2 flex flex-col ml-4 sm:ml-20  ">
            <h3 className=" sm:w-2/3">
              <span className="text-orange-600">Namaste</span>, I&apos;m Niten
              Pandit Chhetri, an Information Management undergraduate with a
              passion for web development and digital marketing. I&rsquo;ve
              gained hands-on experience building projects like an eCommerce
              website and a personal blog, focusing on creating seamless user
              experiences with technologies like the MERN stack, React, and
              Next.js. I&rsquo;m particularly interested in digital marketing
              strategies such as SEO, content marketing, and social media
              marketing. I believe combining web development with digital
              marketing can create engaging user-centered solutions that drive
              business growth.{" "}
            </h3>
            <Link href="/about" className="underline hover:text-orange-600">
              Learn More
            </Link>
          </div>
          <div className="mt-4 sm:mt-0">
            <Image
              src="/fullcover-pp.jpg"
              width={400}
              height={500}
              alt="cover picture"
            />
          </div>
        </motion.section>

        {/* <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
          variants={itemVariants}
        >
          Passionate developer crafting digital experiences with code and
          creativity.
        </motion.p> */}

        <motion.div className="flex justify-center space-x-6 mb-12">
          <a href="/resume.pdf" download="niten-chhetri-cv">
            <Button className="w-80 bg-red-600 hover:bg-red-500">
              {<Download className="mr-3" />} Download My Curriculum Vitae (CV)
            </Button>
          </a>
        </motion.div>
      </motion.section>

      <motion.section
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
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

        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          variants={itemVariants}
        >
          Skills & Tools
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <span className="text-lg font-semibold hover:text-orange-600">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <Contact />
    </div>
  );
}
