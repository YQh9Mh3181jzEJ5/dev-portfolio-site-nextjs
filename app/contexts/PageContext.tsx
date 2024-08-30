"use client";
import React, { createContext, useContext, useState } from "react";

type PageContextType = {
  isArticlePage: boolean;
  setIsArticlePage: (value: boolean) => void;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isArticlePage, setIsArticlePage] = useState<boolean>(false);

  return (
    <PageContext.Provider value={{ isArticlePage, setIsArticlePage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error("usePageContext must be used within a PageProvider");
  }
  return context;
};
