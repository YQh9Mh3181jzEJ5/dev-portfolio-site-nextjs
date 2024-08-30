import { githubName } from "@/app/constants/githubName";
import { githubUrl } from "@/app/constants/githubUrl";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const GitHubProfile = () => {
  return (
    <header className="flex items-center justify-between p-4 py-12 md:py-24 lg:py-32 container">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          こんにちは！
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          Web系エンジニアです。このサイトでは今まで作った作品とブログ記事を投稿しています。好きな言語はTypeScriptです！
        </p>
        <div className="flex">
          <Button
            asChild
            variant="outline"
            className="inline-flex items-center gap-2"
          >
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5" />
              <span>View My GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/images/profile.png"
          alt="GitHubProfile"
          width={500}
          height={500}
        />
        <Link
          href={`https://github.com/${githubName}`}
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          @{githubName}
          <span className="sr-only">(外部リンク、新しいタブで開きます)</span>
        </Link>
      </div>
    </header>
  );
};

export default GitHubProfile;
