import React from "react";
import Header from "./Header";
import GitHubProfile from "./GitHubProfile";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="container mb-2">
        <GitHubProfile />
        <div className="flex flex-col gap-4">{children}</div>
      </div>
      <Footer />
    </main>
  );
}
