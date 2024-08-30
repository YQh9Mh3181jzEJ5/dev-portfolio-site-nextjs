import { githubName } from "@/app/constants/githubName";
import { githubUrl } from "@/app/constants/githubUrl";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const GitHubProfile = () => {
  return (
    <div
      className="flex items-center justify-between p-8 w-full
                      sm:py-12 md:py-16 lg:py-24 xl:py-32
                      sm:flex-row sm:items-start
                      bg-background dark:bg-gray-900"
    >
      <div className="flex flex-col md:flex-row items-center justify-between container  ">
        <div className="flex flex-col gap-4 mb-8 md:mb-0 ">
          <h1
            className="text-4xl font-bold tracking-tighter
                       sm:text-5xl md:text-6xl lg:text-7xl text-center md:text-left"
          >
            はじめまして！
          </h1>
          <p className="max-w-[600px] mb-2 text-gray-500 dark:text-gray-400 text-sm md:text-base lg:text-xl !leading-loose  text-center md:text-left">
            Web系エンジニアです。このサイトでは今まで作った作品とブログ記事を投稿しています。好きな言語はTypeScriptです！
          </p>
          <div className="flex flex-col gap-2 sm:gap-2 md:flex-row ">
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
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <Image
            src="/images/profile.png"
            alt="GitHubProfile"
            width={360}
            height={360}
            priority
            className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
          />
          <Link
            href={`https://github.com/${githubName}`}
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
            className="text-sm sm:text-base"
          >
            @{githubName}
            <span className="sr-only">(外部リンク、新しいタブで開きます)</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GitHubProfile;
