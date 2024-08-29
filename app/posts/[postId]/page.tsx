import { getPostsData } from "@/app/lib/post";
import { notFound } from "next/navigation";
import Layout from "@/app/components/layout/Layout";

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
    notFound();
  }

  return (
    <Layout>
      <article className="w-full max-w-6xl mx-auto px-4">
        {post.thumbnail && <img src={post.thumbnail} alt={post.title} />}
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  );
}
