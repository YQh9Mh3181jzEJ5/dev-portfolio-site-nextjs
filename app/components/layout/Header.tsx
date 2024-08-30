"use client";
import { githubName } from "@/app/constants/githubName";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex items-center justify-between w-full px-6 py-4">
      <div className="flex items-center justify-between gap-2">
        <Avatar>
          <AvatarImage src="/images/profile.png" />
          <AvatarFallback>YQh9Mh3181jzEJ5</AvatarFallback>
        </Avatar>
        <div>Portfolio Site</div>
      </div>
      <div className="flex items-center justify-between gap-2">
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
