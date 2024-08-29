import React from "react";
import PortfolioItem from "./portfolioItem";

// interface PortfolioListProps {
//   items: PortfolioItem[];
// }

const PortfolioList = ({ items }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4">
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </div>
  );
};

export default PortfolioList;
