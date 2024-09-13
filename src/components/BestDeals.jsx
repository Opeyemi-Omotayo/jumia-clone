import React from "react";
import Banner from "./Banner";

const BestDeals = () => {
  const deals = [
    {
      image: "images/bestdeals/buy-2.jpg",
      alt: "buy 2 & get 1 free",
    },
    {
      image: "images/bestdeals/shine.png",
      alt: "shine & dazzle",
    }
  ];

  return (
    <div className="bg-white rounded-md shadow-sm grid grid-cols-2 gap-2 p-3 my-5">
      {deals.map((deal, index) => (
        <Banner key={index} src={deal.image} alt={deal.alt} className="h-[250px] w-full rounded-md shadow-sm hover:scale-95" />
      ))}
    </div>
  );
};

export default BestDeals;
