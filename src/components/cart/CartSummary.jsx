import React from "react";

const CartSummary = () => {
  return (
    <div className="flex flex-col items-start text-sm bg-white shadow-md rounded-md w-full">
      <h1 className="font-semibold uppercase border-b w-full p-3 text-base">
        Cart summary
      </h1>
      <div className=" w-full">
        <div className="flex items-center justify-between border-b py-3">
          <p className="text-sm text-gray-500 px-3">Subtotal</p>
          <h2 className="text-lg font-semibold px-3">N56788</h2>
        </div>
        <div className="p-3">
        <button className="bg-primary text-white rounded-md uppercase shadow-lg w-full text-center py-3 flex items-center justify-center relative">
          checkout (N 56677)
        </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
