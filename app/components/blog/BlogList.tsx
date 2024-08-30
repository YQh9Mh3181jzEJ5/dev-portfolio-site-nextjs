import React from "react";
import BlogItems from "./BlogItems";
import { PostData } from "../../type/post";
import { defaultImage } from "@/app/constants/defaultImage";

interface BlogListProps {
  posts: PostData[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }: BlogListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4">
      {posts
        ? posts.map((post: PostData) => (
            <BlogItems
              key={post.id}
              url={`/posts/${post.id}`}
              src={
                post.thumbnail ? `/images/${post.thumbnail}.jpg` : defaultImage
              }
              name={post.title}
              date={post.date}
            />
          ))
        : "No posts"}
    </div>
  );
};

export default BlogList;
