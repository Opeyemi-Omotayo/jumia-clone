import React from "react";
import { GiCookingPot, GiLipstick } from "react-icons/gi";
import {
  IoPhonePortraitOutline,
  IoHome,
  IoShirtOutline,
} from "react-icons/io5";
import { FaTv } from "react-icons/fa";
import { CiApple } from "react-icons/ci";
import { IoMdLaptop } from "react-icons/io";
import { PiBaby } from "react-icons/pi";
import { FaGamepad } from "react-icons/fa";
import { TbDotsCircleHorizontal } from "react-icons/tb";


const Categories = () => {
  const categories = [
    {
      icon: <GiCookingPot />,
      text: "Appliances",
    },
    {
      icon: <IoPhonePortraitOutline />,
      text: "Phones & Tablets",
    },
    {
      icon: <GiLipstick />,
      text: "Health & Beauty",
    },
    {
      icon: <IoHome />,
      text: "Home & Office",
    },
    {
      icon: <FaTv />,
      text: "Electronics",
    },
    {
      icon: <IoShirtOutline />,
      text: "Fashion",
    },
    {
      icon: <CiApple />,
      text: "Supermarket",
    },
    {
      icon: <IoMdLaptop />,
      text: "Computing",
    },
    {
      icon: <PiBaby />,
      text: "Baby Products",
    },
    {
      icon: <FaGamepad />,
      text: "Gaming",
    },
  ];

  return (
    <div className="bg-white p-3 w-[18%] h-[420px] hidden lg:flex flex-col">
      {categories.map((item) => (
        <div className="flex items-center text-sm text-gray-600 my-1 ">
          {item.icon}
          <h1 className="capitalize font-normal leading-6 ml-3 ">
            {item.text}
          </h1>
        </div>
      ))}
      <h1 className="capitalize text-sm text-gray-600 font-normal leading-6">Musical Instruments</h1>
      <div className="flex items-center text-sm text-gray-600 my-2 ">
          <TbDotsCircleHorizontal />
          <h1 className="capitalize font-normal leading-6 ml-3 ">Other Categories</h1>
        </div>
    </div>
  );
};

export default Categories;
