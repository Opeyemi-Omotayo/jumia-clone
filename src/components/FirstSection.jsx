import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Categories from "./Categories";
import Banner from "./Banner";

const FirstSection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1900 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1900, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 280 },
      items: 1.2,
    },
  };

  const ads = [
    {
      src: "images/Artboard-1-copy-2.gif",
      alt: "artboard",
    },
    {
      src: "images/ju-ads.png",
      alt: "ads",
    },
    {
      src: "images/REDMI.jpg",
      alt: "redmi",
    },
    {
      src: "images/shoes.png",
      alt: "shoes",
    },
    {
      src: "https://ng.jumia.is/cms/0-1-initiatives/Why-pay-more/updated/712X384b_why.jpg",
      alt: "why",
    },
  ];

  return (
    <div className="flex items-center justify-between mt-4">
      <Categories />
      <div className="w-full lg:w-[80%] flex items-center ">
        <div className="h-[270px] lg:h-[420px] w-full lg:w-[70%]">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
            showDots={true}
            arrows={false}
          >
            {ads.map((ad, index) => (
              <Banner
                key={index}
                src={ad.src}
                alt={ad.alt}
                className="h-[420px] rounded-sm w-full"
              />
            ))}
          </Carousel>
        </div>
        <div className="ml-4 hidden lg:flex flex-col items-center justify-between h-[420px]">
          <div className="flex flex-col items-start justify-center bg-white p-4 shadow-sm rounded-md w-full h-[48%]">
            <div className="flex items-start my-3">
              <img
                src="images/call-to-order.png"
                alt="sell on jumia"
                className="w-7 h-7"
              />
              <div className="flex flex-col ml-2">
                <h1 className="font-medium text-gray-700 text-base uppercase">
                  call to order
                </h1>
                <p className="text-gray-600 text-xs ">0903-414-4706</p>
              </div>
            </div>
            <div className="flex items-center my-3">
              <img
                src="images/sell-on-jumia.png"
                alt="sell on jumia"
                className="w-7 h-7"
              />
              <h1 className="font-medium text-gray-700 text-base capitalize ml-2">
                sell on jumia
              </h1>
            </div>
            <div className="flex items-center my-3">
              <img
                src="images/best-deals.png"
                alt="best-deals"
                className="w-7 h-7"
              />
              <h1 className="font-medium text-gray-700 text-base capitalize ml-2">
                Best deals
              </h1>
            </div>
          </div>
          <Banner
            src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2024/Untitled-3.gif"
            alt="why"
            className="h-[200px] rounded-md shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
