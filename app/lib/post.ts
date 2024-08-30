import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "app", "posts");

export async function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map(async (fileName) => {
        const id = fileName.replace(/\.md$/, "");

        const fullPath = path.join(postsDirectory, fileName);

        try {
          const fileContents = fs.readFileSync(fullPath, "utf8");

          const matterResult = matter(fileContents);

          const processedContent = await remark()
            .use(html, { sanitize: false })
            .use(gfm)
            .process(matterResult.content);
          const contentHtml = processedContent.toString();

          return {
            id,
            contentHtml,
            ...(matterResult.data as {
              title: string;
              date: string;
              thumbnail: string;
            }),
          };
        } catch (error) {
          console.error(`Error processing ${fileName}:`, error);
          return null;
        }
      })
  );

  return allPostsData.filter(
    (post): post is NonNullable<typeof post> => post !== null
  );
}
