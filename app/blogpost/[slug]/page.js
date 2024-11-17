import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import Image from "next/image";
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

const Page = async ({ params }) => {
  const contentDirectory = path.join(process.cwd(), "content");
  const filepath = path.join(contentDirectory, `${params.slug}.md`);

  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Image src={data.image} alt={data.title} width={400} height={100} />
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-600 mb-4 text-base">
        &quot;{data.description}&quot;
      </p>
      <div className="flex gap-3 text-orange-700">
        <p className="mb-4 italic">By {data.author}</p>
        <p className="mb-4">{data.date}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="gap-y-2 prose dark:prose-invert"
      />
    </div>
  );
};

export default Page;
