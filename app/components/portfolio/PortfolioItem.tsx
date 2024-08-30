import React from "react";
import Link from "next/link";
import Image from "next/image";
import { defaultImage } from "@/app/constants/defaultImage";
import { githubUrl } from "@/app/constants/githubUrl";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PortfolioItemProps = {
  name: string;
  url: string;
  txt: string;
  badges: string[];
};

const PortfolioItem = ({ name, url, txt, badges }: PortfolioItemProps) => {
  return (
    <Card className="overflow-hidden flex flex-col justify-between">
      <CardContent className="p-6">
        <Link
          href={`${githubUrl}/${url}`}
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          <div className="relative h-48 w-full rounded-md overflow-hidden">
            <Image
              src={defaultImage}
              alt="portfolio-image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Link>
      </CardContent>
      <CardHeader className="px-6 pt-0 pb-6">
        <CardTitle className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          {name}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-400 ">
          {txt}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-wrap gap-2">
        {badges.map((badge, index) => (
          <Badge
            key={index}
            variant="outline"
            className="text-gray-400 font-normal"
          >
            {badge}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
};

export default PortfolioItem;
