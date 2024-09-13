import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

let blogs = [];

try {
  const dirContent = fs.readdirSync("content", "utf-8");
  blogs = dirContent.map((file) => {
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
    const { data } = matter(fileContent);
    return data;
  });
} catch (error) {
  if (error.code === "ENOENT") {
    console.error("The 'content' directory does not exist.");
  } else {
    console.error(
      "An error occurred while reading the 'content' directory:",
      error
    );
  }
}

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Card key={blog.id} className="flex flex-col overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={blog.image}
                alt={blog.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardTitle className="text-xl mb-2">{blog.title}</CardTitle>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {blog.description}
              </p>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{new Date(blog.date).toLocaleDateString()}</span>
                <span>{blog.author}</span>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full">
                <Link href={`/blogpost/${blog.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
