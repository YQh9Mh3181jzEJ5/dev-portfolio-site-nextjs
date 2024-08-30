import { defaultImage } from "@/app/constants/defaultImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogItemsProps {
  url: string;
  src: string;
  name: string;
  date: string;
}

const BlogItems = ({ url, src, name, date }: BlogItemsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={url} className="block w-full h-60 relative">
        <Image
          src={src || defaultImage}
          alt="my-portfoli"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        <div className="p-4 absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 ">
          <h3 className="text-lg font-semibold mb-1 text-gray-700">{name}</h3>
          <span className="text-sm text-gray-500 font-light">{date}</span>
        </div>
      </Link>
    </div>
  );
};

export default BlogItems;
