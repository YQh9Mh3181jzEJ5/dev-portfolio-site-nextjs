import Link from "next/link";
import Layout from "./components/layout/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-24">
        <h1 className="text-6xl font-bold mb-8">404</h1>
        <h2 className="text-2xl mb-4">ページが見つかりません。</h2>
        <p className="text-xl mb-8">
          申し訳ありませんが、お探しのページは存在しないようです。
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          ホームに戻る
        </Link>
      </div>
    </Layout>
  );
}
