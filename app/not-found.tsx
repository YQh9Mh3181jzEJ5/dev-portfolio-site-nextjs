import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold mb-8">404</h1>
      <h2 className="text-2xl mb-4">ページが見つかりません。</h2>
      <p className="text-xl mb-8 text-center">
        申し訳ありませんが、お探しのページは存在しないようです。
      </p>
      <div className="flex">
        <Button
          asChild
          variant="outline"
          className="inline-flex items-center gap-2"
        >
          <Link href="/">
            <span>ホームに戻る</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
