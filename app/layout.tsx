import { PageProvider } from "./contexts/PageContext";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

import { Noto_Sans_JP } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BackgroundImage from "./components/layout/BackgroundImage";

const notoSansJP = Noto_Sans_JP({
  display: "swap",
  preload: false,
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio Site with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PageProvider>
            <div className="flex min-h-screen w-full flex-col items-center relative">
              <BackgroundImage />
              <div className="w-full z-10 relative">
                <Header />
                <main>{children}</main>
                <Footer />
              </div>
            </div>
          </PageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
