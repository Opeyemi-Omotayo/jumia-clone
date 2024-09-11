import React from "react";
import { MdStars } from "react-icons/md";
import { IoShieldHalfOutline } from "react-icons/io5";

const HeaderBanner = () => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gray-100 w-full h-10">
      <div className="w-[80%]">
        <div className="w-[55%] b">
          <div className="flex items-center justify-between">
            <div className="cursor-pointer flex items-center">
              <MdStars className="text-primary w-5 h-5" />
              <h1 className="text-primary font-normal pl-[2px] leading-5 text-xs">
                Sell On Jumia
              </h1>
            </div>
            <div className="flex">
              <div className="cursor-pointer flex items-center mr-2">
                <h1 className="font-mono uppercase font-semibold pr-[2px] text-sm">
                  jumia
                </h1>
                <MdStars className="text-primary w-3 h-3 " />
              </div>
              <div className="text-gray-400 hover:text-blue-400 cursor-pointer flex items-center">
                <IoShieldHalfOutline className="w-4 h-4 " />
                <h1 className=" font-mono  font-semibold pl-[2px] text-sm">
                  Pay
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
