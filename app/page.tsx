import Link from "next/link";
import GitHubProfile from "./components/githubProfile/GitHubProfile";
import Header from "./components/layouts/header/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-700 ">
      <Header />
      <div className="container">
        <GitHubProfile />
        <div className="bg-red-600 w-full h-full">
          <Link href="/posts">Postsへ移動する</Link>
        </div>
      </div>
    </main>
  );
}
