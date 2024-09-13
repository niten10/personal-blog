import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
export default async function Page({ params }) {
  const filepath = `content/${params.slug}.md`;
  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);
  const processor = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
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
      <h1 className="text-4xl font-bold mb-2 ">{data.title}</h1>
      <p className="text-gray-600 mb-4 text-base">
        &quot;{data.description}&quot;
      </p>
      <div className="flex gap-3 text-orange-700">
        <p className=" mb-4 italic">By {data.author}</p>
        <p className="mb-4">{data.date}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="gap-y-2 prose dark:prose-invert"
      ></div>
    </div>
  );
}
