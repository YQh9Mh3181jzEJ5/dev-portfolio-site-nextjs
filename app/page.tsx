import Layout from "./components/layout/Layout";
import SectionContainer from "./components/common/SectionContainer";
import PortfolioList from "./components/portfolio/PortfolioList";
import BlogList from "./components/blog/BlogList";
import { getPostsData } from "./lib/post";

export default async function Home() {
  const allPostsData = await getPostsData();

  return (
    <Layout>
      <SectionContainer title="作ったもの一覧">
        <PortfolioList />
      </SectionContainer>
      <SectionContainer title="ブログ記事一覧">
        <BlogList posts={allPostsData} />
      </SectionContainer>
    </Layout>
  );
}
