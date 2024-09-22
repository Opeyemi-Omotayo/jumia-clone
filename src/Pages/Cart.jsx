import React from "react";
import Banner from "../components/Banner";
import HeaderBanner from "../components/HeaderBanner";
import Navbar from "../components/Navbar";
import EmptyCart from "../components/cart/EmptyCart";
import CartCard from "../components/cart/CartCard";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
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
      <div className="w-full flex items-start justify-between px-4 lg:px-0 lg:w-[80%] 2xl:w-[75%] my-4 ">
        {/* <EmptyCart /> */}
        <div className="w-[71%]"> 
           <CartCard />
        </div>
        <div className="w-[28%]">
            <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
