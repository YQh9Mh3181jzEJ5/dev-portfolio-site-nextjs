"use client";

import { portfolioItems } from "../../constants/portfolioData";
import PortfolioItem from "./PortfolioItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PortfolioList = () => {
  return (
    <div className="container">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {portfolioItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <PortfolioItem
                name={item.name}
                url={item.url}
                txt={item.txt}
                badges={item.badges}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default PortfolioList;
