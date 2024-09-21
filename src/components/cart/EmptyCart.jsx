import React from "react";

const EmptyCart = () => {
  return (
    <div className="flex items-center justify-center flex-col py-10 bg-white shadow-md rounded-md w-full">
      <img src="images/cart-empty.svg" alt="empty cart" />
      <h1 className="font-semibold text-base leading-5 py-4">
        Your cart is empty!
      </h1>
      <p className="text-sm text-gray-500 leading-4">
        Browse our categories and discover our best deals!
      </p>
      <button
            className="bg-primary text-white rounded-md uppercase shadow-lg w-[70%] lg:w-[25%] mt-8 text-center py-3 flex items-center justify-center relative"
          >
            start shopping
          </button>
    </div>
  );
};

export default EmptyCart;
