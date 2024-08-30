import Layout from "./components/layout/Layout";
import SectionContainer from "./components/common/SectionContainer";
import PortfolioList from "./components/portfolio/PortfolioList";
import BlogList from "./components/blog/BlogList";
import { getPostsData } from "./lib/post";

export default async function Home() {
  const allPostsData = await getPostsData();

  return (
    <Layout>
      <SectionContainer
        title="About Me"
        variant="primary"
        description={`生成AIに衝撃を受け、仕事を継続しながらプログラミング学習を決意。HTML / CSS / JavaScript学習から始まり、主にRuby・Ruby on Rails、Reactを学習。使用教材はUdemy / Progate /ドットインストールが多め。
          その後、Web系の企業に転職し主にFront-Endのタスクを担当しました。

目標はフルスタックエンジニアとして仕事を回せるレベルになること。
最近はTypeScriptにどっぷりハマっています。`}
      ></SectionContainer>
      <SectionContainer
        title="Portfolio Highlights"
        variant="secondary"
        description="本格的なプロジェクトから実験的な試みまで。"
      >
        <PortfolioList />
      </SectionContainer>
      <SectionContainer
        title="Blog Posts"
        variant="primary"
        description="プログラミングの学びや気づき、技術トレンドの考察などを記録していくブログです。"
      >
        <BlogList posts={allPostsData} />
      </SectionContainer>
    </Layout>
  );
}
