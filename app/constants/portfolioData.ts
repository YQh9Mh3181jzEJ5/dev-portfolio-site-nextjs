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
    url: "app-blog-markdown-nextjs",
    txt: "個人ブログです。",
    image: "/images/tech-blog.jpg",
    badges: ["TypeScript", "Next.js", "Docker", "Firebase", "Tailwind CSS"],
  },
  {
    id: "2",
    name: "WeatherNow",
    url: "dev-weather-dashboard-react",
    txt: "天気予報APIを活用したアプリです。",
    image: "/images/weather-app.png",
    badges: ["TypeScript", "React", "Tailwind CSS", "Vercel", "OpenWeather"],
  },
  {
    id: "3",
    name: "Spotify Music App",
    url: "dev-music-spotify-api-react",
    txt: "Spotify APIを活用したアプリです。",
    image: "/images/music-app.jpg",
    badges: ["TypeScript", "React", "Tailwind CSS", "Wavesurfer.js"],
  },
  {
    id: "4",
    name: "Naruto Library",
    url: "dev-naruto-api-react",
    txt: "ナルトのキャラクター図鑑です。",
    image: "/images/naruto-library.jpg",
    badges: ["TypeScript", "React", "Axios", "CSS Modules"],
  },

  {
    id: "5",
    name: "SNS APP",
    url: "dev-sns-login-react",
    txt: "Supabaseを活用したSNSアプリです。",
    image: "/images/sns-app.png",
    badges: ["TypeScript", "React", "Tailwind CSS", "Supabase"],
  },

  {
    id: "5",
    name: "Todo App",
    url: "dev-todolist-shadcnui-react",
    txt: "Shadcn/uiを活用したTodoアプリです。",
    image: "/images/todo-app.jpg",
    badges: ["TypeScript", "React", "Jotai", "Shadcn/ui", "ESLint", "Prettier"],
  },
  {
    id: "6",
    name: "Discord Clone",
    url: "tutorial-udemy-discord-clone",
    txt: "Discordのクローンアプリです。",
    badges: ["TypeScript", "React", "Tailwind CSS", "Firebase"],
  },
  {
    id: "7",
    name: "ポケモン風カウントアップ",
    url: "learn-levelup-usestate-react-basics",
    txt: "ポケモン風カウントアップです。useStateの研究の一貫です。",
    image: "/images/pokemon-count-up.png",
    badges: ["TypeScript", "React", "Tailwind CSS"],
  },
  {
    id: "8",
    name: "何でも画像検索",
    url: "dev-masonry-layouts-nextjs",
    txt: "画像検索&表示サイトです。画像を高速に検索します",
    image: "/images/dev-masonry-layouts-nextjs.png",
    badges: ["TypeScript", "React", "Tailwind CSS", "TanStack Query"],
  },
];
