import React from "react";
import Link from "next/link";
import Image from "next/image";
import { defaultImage } from "@/app/constants/defaultImage";

const PortfolioItem = ({ ...props }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link
        href={"/"}
        className="block w-full h-60 relative"
        target="_blank"
        rel="noopener noreferrer"
        prefetch={false}
      >
        <Image
          src={defaultImage}
          alt="my-portfoli"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        <div className="p-4 absolute bottom-0 left-0 right-0 bg-white bg-opacity-75">
          <h3 className="text-lg font-semibold mb-1">test</h3>
          <span className="text-sm text-gray-500 font-light">test</span>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioItem;
