export type PortfolioItemType = {
  id: string;
  name: string;
  url: string;
  image?: string;
  txt: string;
  badges: string[];
};

export const portfolioItems: PortfolioItemType[] = [
  // TODO: Replace with my own data
  {
    id: "1",
    name: "Tech Blog",
    url: "blog-sample",
    txt: "個人ブログです。",
    image: "/images/tech-blog.jpg",
    badges: ["TypeScript", "Next.js", "Docker", "Firebase", "Tailwind CSS"],
  },
  {
    id: "2",
    name: "WeatherNow",
    url: "weather-app",
    txt: "天気予報APIを活用したアプリです。",
    image: "/images/weather-app.png",
    badges: ["TypeScript", "React", "Tailwind CSS", "Vercel", "OpenWeather"],
  },
  {
    id: "3",
    name: "Spotify Music App",
    url: "music-app",
    txt: "Spotify APIを活用したアプリです。",
    image: "/images/music-app.jpg",
    badges: ["TypeScript", "React", "Tailwind CSS", "Wavesurfer.js"],
  },
  {
    id: "4",
    name: "Naruto Library",
    url: "naruto-library",
    txt: "ナルトのキャラクター図鑑です。",
    image: "/images/naruto-library.jpg",
    badges: ["TypeScript", "React", "Axios", "CSS Modules"],
  },

  {
    id: "5",
    name: "SNS APP",
    url: "sns-app",
    txt: "Supabaseを活用したSNSアプリです。",
    image: "/images/sns-app.jpg",
    badges: ["TypeScript", "React", "Tailwind CSS", "Supabase"],
  },

  {
    id: "5",
    name: "Todo App",
    url: "todo-list-with-shadcn-ui",
    txt: "Shadcn/uiを活用したTodoアプリです。",
    image: "/images/todo-app.jpg",
    badges: ["TypeScript", "React", "Jotai", "Shadcn/ui", "ESLint", "Prettier"],
  },
  {
    id: "6",
    name: "Discord Clone",
    url: "discord-clone",
    txt: "Discordのクローンアプリです。",
    badges: ["TypeScript", "React", "Tailwind CSS", "Firebase"],
  },
];
