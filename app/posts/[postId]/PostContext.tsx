"use client";
import { useEffect } from "react";
import Image from "next/image";
import { usePageContext } from "../../contexts/PageContext";

export default function PostContent({ post }: { post: any }) {
  const { setIsArticlePage } = usePageContext();

  useEffect(() => {
    setIsArticlePage(true);
    return () => setIsArticlePage(false);
  }, [setIsArticlePage]);

  return (
    <article className="flex flex-col min-h-screen max-w-3xl mx-auto px-4 py-8 bg-white dark:bg-gray-800">
      {post.thumbnail && (
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {post.title}
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">{post.date}</p>
      <div
        className="prose prose-lg prose-blue dark:prose-invert flex-grow"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
