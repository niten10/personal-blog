"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import react from "../image/pp.png";
export default function AboutPage() {
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
    { name: "React", logo: { react } },
    { name: "HTML", logo: "/placeholder.svg" },
    { name: "Next.js", logo: "/placeholder.svg" },
    { name: "Figma", logo: "/placeholder.svg" },
    // Add more skills as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <motion.section
        className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          variants={itemVariants}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
          variants={itemVariants}
        >
          Passionate developer crafting digital experiences with code and
          creativity.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button size="lg">View Projects</Button>
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
            href="https://www.linkedin.com/in/niten-chhetrii-7670a9253/"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <InstagramLogoIcon className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter className="w-8 h-8" />
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
              <Image
                src={skill.logo}
                alt={skill.name}
                width={64}
                height={64}
                className="mb-2"
              />
              <span className="text-lg font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
