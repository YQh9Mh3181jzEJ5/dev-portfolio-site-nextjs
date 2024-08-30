import React from "react";
import PortfolioItem from "./portfolioItem";

const PortfolioList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4">
      <PortfolioItem
        name="Discord Clone"
        url="discord-clone"
        txt="Disocordのクローンアプリです。"
        badges={["TypeScript", "React", "Tailwind CSS", "Firebase"]}
      />
      <PortfolioItem
        name="ToDo List"
        url="todo-list-with-shadcn-ui"
        txt="React / TypeScript / shadcn/ui"
        badges={["TypeScript", "Next.js", "Tailwind CSS"]}
      />
      <PortfolioItem
        name="ToDo List"
        url="todo-list-with-shadcn-ui"
        txt="React / TypeScript / shadcn/ui"
        badges={["TypeScript", "Next.js", "Tailwind CSS"]}
      />
      <PortfolioItem
        name="ToDo List"
        url="todo-list-with-shadcn-ui"
        txt="React / TypeScript / shadcn/ui"
        badges={["TypeScript", "Next.js", "Tailwind CSS"]}
      />
      <PortfolioItem
        name="ToDo List"
        url="todo-list-with-shadcn-ui"
        txt="React / TypeScript / shadcn/ui"
        badges={["TypeScript", "Next.js", "Tailwind CSS"]}
      />
    </div>
  );
};

export default PortfolioList;
