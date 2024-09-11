import React from "react";
import Banner from "../components/Banner";
import HeaderBanner from "../components/HeaderBanner";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-primary w-full flex items-center justify-center">
        <Banner src="images/festival.gif" alt="festival" className="w-[90%]" />
      </div>
     <HeaderBanner />
    </div>
  );
};

export default LandingPage;
