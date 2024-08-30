import Link from "next/link";
import { githubName } from "@/app/constants/githubName";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-2 text-sm font-light text-gray-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <span className="mr-1">&copy; {currentYear}</span>
          <Link
            href={`https://github.com/${githubName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-gray-300"
            prefetch={false}
          >
            <span>{githubName}. All rights reserved.</span>
            <span className="sr-only">
              GitHub プロフィール (新しいタブで開きます)
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
