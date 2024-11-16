import { notFound } from "next/navigation";
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
import path from "path";
import matter from "gray-matter";

// `generateStaticParams` to dynamically generate paths based on the available markdown files
export async function generateStaticParams() {
  const contentDirectory = path.join(process.cwd(), "content");
  const fileNames = fs.readdirSync(contentDirectory);

  // Generate dynamic routes based on the filenames (excluding file extension)
  const paths = fileNames.map((fileName) => ({
    slug: fileName.replace(".md", ""),
  }));

  return paths;
}

const Page = async () => {
  const contentDirectory = path.join(process.cwd(), "content");
  let blogs = [];

  try {
    // Read all files in the content directory
    const dirContent = fs.readdirSync(contentDirectory);

    // Read each file, parse the front matter, and extract data
    blogs = dirContent.map((file) => {
      const filePath = path.join(contentDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        ...data,
        slug: file.replace(".md", ""), // Removing file extension for slug
      };
    });
  } catch (error) {
    console.error("Error reading content directory:", error);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Card key={blog.slug} className="flex flex-col overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={blog.image || "/default-image.jpg"} // Provide default image if none exists
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

export default Page;
