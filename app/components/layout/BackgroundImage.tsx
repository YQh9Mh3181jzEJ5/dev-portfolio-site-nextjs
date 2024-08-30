"use client";
import { usePageContext } from "../../contexts/PageContext";

export default function BackgroundImage() {
  const { isArticlePage } = usePageContext();

  if (isArticlePage) return null;

  return (
    <div className="fixed inset-0 z-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/bg-tokyo.jpg')` }}
      />
      <div className="absolute inset-0 bg-black opacity-10" />
    </div>
  );
}
