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

export default function TopBlogs() {
  const topPosts = [
    {
      id: 1,
      title: "10 Tips for Effective Time Management",
      excerpt:
        "Discover practical strategies to boost your productivity and make the most of your time.",
      image: "/placeholder.svg?height=200&width=400",
      date: "May 15, 2023",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Future of Artificial Intelligence",
      excerpt:
        "Explore the latest advancements in AI and how they're shaping various industries.",
      image: "/placeholder.svg?height=200&width=400",
      date: "June 2, 2023",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Mastering the Art of Public Speaking",
      excerpt:
        "Learn valuable techniques to overcome stage fright and deliver compelling presentations.",
      image: "/placeholder.svg?height=200&width=400",
      date: "June 20, 2023",
      readTime: "6 min read",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Top Blog Posts
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topPosts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
