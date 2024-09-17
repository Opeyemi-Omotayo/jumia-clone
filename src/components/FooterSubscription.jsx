import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdStars, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { IoMdCheckbox } from "react-icons/io";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const FooterSubscription = () => {
    const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="w-full lg:w-[80%] 2xl:w-[75%] ">
      <div className=" grid grid-cols-4 gap-3 py-6">
        <Link to="/" className="flex items-center w-[30%] ">
          <h1 className="font-mono text-white uppercase font-semibold pr-[2px] text-2xl">
            jumia
          </h1>
          <MdStars className="text-primary w-4 h-4 " />
        </Link>
        <div className="text-sm text-white col-span-2 ">
          <h1 className="font-semibold uppercase">New to Jumia?</h1>
          <h2 className="text-xs">
            Subscribe to our newsletter to get updates on our latest offers!
          </h2>
          <div className="flex items-center my-4">
            <div className="relative  mr-2">
              <input
                type="text"
                placeholder="Enter E-mail Address"
                className="w-full h-12 pl-10 placeholder:text-base text-base text-black rounded-md outline-none border-gray-500 border"
              />
              <IoMail className="absolute w-6 h-6 left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="flex items-center justify-center border border-white px-6 h-12 rounded-md">
              <h1 className="uppercase">Male</h1>
            </div>
            <div className="flex items-center justify-center border border-white px-6 h-12 rounded-md ml-2">
              <h1 className="uppercase">feMale</h1>
            </div>
          </div>
          <div className="flex mt-6">
            <div className="flex items-center justify-center cursor-pointer hover:bg-orange-200 rounded-[50%] w-12 h-8 ml-[-7px] mr-1">
              {isClicked ? (
                <IoMdCheckbox
                  onClick={() => setIsClicked(!isClicked)}
                  className="text-primary w-5 h-5"
                />
              ) : (
                <MdOutlineCheckBoxOutlineBlank
                  onClick={() => setIsClicked(!isClicked)}
                  className="w-5 h-5 text-gray-400"
                />
              )}
            </div>
            <p className="text-gray-400 w-[50%]">
              I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe
              from newsletters at any time.
              <br />
              <span className="text-primary">I accept the Legal Terms</span>
            </p>
          </div>
        </div>
        <div className="text-sm text-white ">
          <div className="flex items-start">
            <div className="bg-primary p-2 rounded-md mr-2">
              <MdStars className="text-white w-6 h-6 " />
            </div>
            <div>
              <h1 className="font-semibold uppercase pb-1">
                DOWNLOAD JUMIA FREE APP
              </h1>
              <h2 className="text-xs">Get access to exclusive offers!</h2>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="flex items-center cursor-pointer hover:text-primary mr-2">
              <FaApple className="w-6 h-6" />
              <h1 className="text-[7px] leading-3">
                Download on the <br />{" "}
                <span className="text-xs font-medium">App Store</span>
              </h1>
            </div>
            <div className="flex items-center cursor-pointer hover:text-primary">
              <FaGooglePlay className="w-6 h-6" />
              <h1 className="text-[7px]">
                GET IT ON <br />{" "}
                <span className="text-xs font-medium">Google Play</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSubscription;
