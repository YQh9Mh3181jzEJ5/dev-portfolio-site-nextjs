"use client";
import { useEffect } from "react";
import Image from "next/image";
import { usePageContext } from "../../contexts/PageContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PostContent({ post }: { post: any }) {
  const { setIsArticlePage } = usePageContext();

  useEffect(() => {
    setIsArticlePage(true);
    return () => setIsArticlePage(false);
  }, [setIsArticlePage]);

  return (
    <article className="flex flex-col max-w-4xl mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-bold p-8 text-center">
            {post.title}
          </CardTitle>
          {post.thumbnail && (
            <Image
              src={`/images/${post.thumbnail}.jpg`}
              alt={post.title}
              width={800}
              height={400}
              priority
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
          )}
          <CardDescription className="text-gray-500 dark:text-gray-400 mb-4">
            投稿日: {post.date}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div
            className="prose prose-lg prose-blue dark:prose-invert flex-grow"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </CardContent>
      </Card>
    </article>
  );
}
