import React from "react";
import Header from "./Header";
import GitHubProfile from "./GitHubProfile";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center relative">
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/bg-tokyo.jpg')` }}
        />
        <div className="absolute inset-0 bg-black opacity-10" />
      </div>
      <div className="w-full z-10 relative">
        <Header />
        <GitHubProfile />
        <div className="flex flex-col">{children}</div>
        <Footer />
      </div>
    </main>
  );
}
