import { githubName } from "@/app/constants/githubName";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-6 py-4 bg-red-800">
      <div className="flex items-center justify-between gap-2">
        <Image
          src="/images/profile.png"
          alt="GitHubProfile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>Portfolio Site</div>
      </div>
      <Link
        href={`https://github.com/${githubName}`}
        target="_blank"
        rel="noopener noreferrer"
        prefetch={false}
        className="text-white hover:text-slate-300"
      >
        My GitHub
        <span className="sr-only">(外部リンク、新しいタブで開きます)</span>
      </Link>
    </div>
  );
};

export default Header;
