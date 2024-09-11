import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdStars } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className="w-full">
        <div className="items-center justify-center hidden py-4  bg-white lg:flex">
          <div className="w-[80%] flex items-center justify-between ">
            <Link to="/" className="flex items-center ">
              <h1 className="font-mono uppercase font-semibold pr-[2px] text-2xl">
                jumia
              </h1>
              <MdStars className="text-primary w-4 h-4 " />
            </Link>
            <div className="flex w-[80%]">
              <div className="flex flex-1 items-center">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="search products, brands and categories"
                    className="w-full p-2 pl-10 placeholder:text-base text-base text-black rounded-md outline-none border-gray-500 border"
                  />
                  <BiSearchAlt2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <button className="flex ml-2 items-center text-sm px-4 py-3 text-white uppercase rounded-md shadow-2xl bg-primary100 font-medium">
                  Search
                </button>
              </div>

              <div className="flex">
                <div className="flex items-center mx-2 text-black hover:text-primary cursor-pointer">
                  <BsPerson className="w-5 h-5 " />
                  <span className="mx-3 ">Account</span>
                  <FaChevronDown className=" w-3 h-3  " />
                </div>
                <div className="flex items-center mx-2 text-black hover:text-primary cursor-pointer">
                  <FaRegCircleQuestion className="w-5 h-5 " />
                  <span className="mx-3 ">Help</span>
                  <FaChevronDown className=" w-3 h-3  " />
                </div>
                <div className="flex items-center mx-2 text-black hover:text-primary cursor-pointer">
                  <AiOutlineShoppingCart className="w-5 h-5 " />
                  <span className="mx-3 ">Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="flex items-center justify-between p-4 bg-white lg:hidden">
          <div className="flex">
            <div
              className="block text-3xl lg:hidden"
              onClick={() => setNav(!nav)}
            >
              <IoMdMenu />
            </div>
            <Link to="/" className="flex items-center ml-3 ">
              <h1 className="font-mono uppercase font-semibold pr-[2px] text-2xl">
                jumia
              </h1>
              <MdStars className="text-primary w-4 h-4 " />
            </Link>
          </div>
          <div className="flex">
            <BsPerson className="w-6 h-6 " />
            <AiOutlineShoppingCart className="w-6 h-6  ml-3" />
          </div>
          {nav && (
            <div
              className="fixed inset-0 bg-black opacity-30 z-10"
              onClick={() => setNav(false)}
            ></div>
          )}
          <ul
            onClick={() => setNav(!nav)}
            className={`absolute top-[0px] z-20 bg-gray-50 items-center w-[80%] left-0  h-full ${
              nav ? "block" : "hidden"
            }`}
          >
            <div className="flex py-4">
              <div
                className="block text-3xl lg:hidden"
                onClick={() => setNav(!nav)}
              >
                <IoMdClose />
              </div>
              <Link to="/" className="flex items-center ml-3 ">
                <h1 className="font-mono uppercase font-semibold pr-[2px] text-2xl">
                  jumia
                </h1>
                <MdStars className="text-primary w-4 h-4 " />
              </Link>
            </div>
            <Sidebar />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
