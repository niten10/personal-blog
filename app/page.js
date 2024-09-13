"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import pp from "../app/image/pp.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import PricingSection from "@/components/Pricing";
import TopBlogs from "@/components/Topblogs";
import Typed from "typed.js";
export default function Home() {
  const el = useRef("");

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
                  src={pp}
                  width={400}
                  height={400}
                  alt="Blog Author"
                  className="rounded-full mx-auto md:w-200 md:h-200"
                />
              </div>
            </div>
          </div>
        </section>
        <PricingSection />
        <TopBlogs />
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
