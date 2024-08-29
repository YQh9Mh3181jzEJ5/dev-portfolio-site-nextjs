import { githubName } from "@/app/constants/githubName";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GitHubProfile = () => {
  return (
    <header className="flex flex-col items-center p-4 bg-blue-600 w-full h-full gap-2">
      <Image
        src="/images/profile.png"
        alt="GitHubProfile"
        width={160}
        height={160}
        className="rounded-full"
      />
      <h1 className="text-2xl font-bold">
        <Link
          href={`https://github.com/${githubName}`}
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          @{githubName}
          <span className="sr-only">(外部リンク、新しいタブで開きます)</span>
        </Link>
      </h1>
      <p className="text-sm">Web系エンジニア。好きな言語はTypeScriptです！</p>
    </header>
  );
};

export default GitHubProfile;
