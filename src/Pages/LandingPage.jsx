import React from "react";
import Banner from "../components/Banner";
import HeaderBanner from "../components/HeaderBanner";
import Navbar from "../components/Navbar";
import FirstSection from "../components/FirstSection";
import SpecialOffers from "../components/SpecialOffers";
import Trends from "../components/Trends";
import FlashSales from "../components/FlashSales";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center  bg-gray-100 ">
      <div className="bg-primary w-full flex items-center justify-center ">
        <Banner
          src="images/festival.gif"
          alt="festival"
          className="w-full lg:w-[90%] h-[50px]"
        />
      </div>
      <HeaderBanner />
      <Navbar />
      <div className="w-full px-4 lg:px-0 lg:w-[80%]">
        <FirstSection />
        <SpecialOffers />
        <Trends />
        <FlashSales />
      </div>
    </div>
  );
};

export default LandingPage;
