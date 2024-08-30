import { getPostsData } from "@/app/lib/post";
import PostContent from "./PostContext";

export async function generateStaticParams() {
  const posts = await getPostsData();
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = await getPostsData();
  const post = posts.find((post) => post.id === params.postId);

  if (!post) {
    return null;
  }

  return <PostContent post={post} />;
}
