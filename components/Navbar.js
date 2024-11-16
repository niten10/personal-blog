"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ModeToggle } from "./Themebtn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [progress, setprogress] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    setprogress(30);
    setTimeout(() => {
      setprogress(70);
    }, 100);
    setTimeout(() => {
      setprogress(100);
    }, 400);
  }, [pathname]);
  useEffect(() => {
    setTimeout(() => {
      setprogress(0);
    }, 500);
  }, []);

  return (
    <nav className=" p-4 bg-background/50 sticky top-0 border-b backdrop-blur">
      <LoadingBar
        color="#EA580C"
        progress={progress}
        onLoaderFinished={() => setprogress(0)}
      />
      <div className="container mx-auto flex justify-between  items-center">
        <Link href="/">
          <div className="text-lg font-bold">Niten Chhetri</div>
        </Link>
        <div className=" hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:scale-20 hover:font-bold">
            Home
          </Link>
          <Link href="/about" className="hover:scale-20 hover:font-bold">
            About
          </Link>
          <Link href="/blog" className="hover:scale-20 hover:font-bold">
            Blog
          </Link>
          <Link href="/contact" className="hover:scale-20 hover:font-bold">
            Contact
          </Link>
          {/* <div className="flex items-center">
            <Button variant="outline" className="mx-1">
              Login
            </Button>
            <Button variant="outline" className="mx-1">
              Signup
            </Button>
            <ModeToggle />
          </div> */}
        </div>
        <div className="md:hidden">
          <Sheet>
            <span className="mx-4">
              <ModeToggle />
            </span>
            <SheetTrigger>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
              >
                <path
                  d="M4 5L20 5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 19L20 19"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">
                  Niten Chhetri
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6 ">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                    <div>
                      <Button
                        variant="link"
                        size-smsize="small"
                        className="mx-1"
                      >
                        Login
                      </Button>
                      <Button variant="link" size="small" className="mx-1">
                        Signup
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
