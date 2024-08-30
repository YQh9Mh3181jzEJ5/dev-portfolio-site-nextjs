import { githubName } from "@/app/constants/githubName";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-6 py-4">
      <div className="flex items-center justify-between gap-2">
        <Avatar>
          <AvatarImage src="/images/profile.png" />
          <AvatarFallback>YQh9Mh3181jzEJ5</AvatarFallback>
        </Avatar>
        <div>Portfolio Site</div>
      </div>
      <Link
        href={`https://github.com/${githubName}`}
        target="_blank"
        rel="noopener noreferrer"
        prefetch={false}
        className="text-white hover:text-slate-300 flex items-center jusityf-between gap-2"
      >
        <FaGithub aria-hidden="true" />
        My GitHub
        <span className="sr-only">(外部リンク、新しいタブで開きます)</span>
      </Link>
    </div>
  );
};

export default Header;
