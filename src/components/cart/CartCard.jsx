import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const CartCard = () => {
  return (
    <div className="flex flex-col items-start bg-white shadow-md rounded-md w-full ">
      <h1 className="font-semibold border-b w-full p-3 text-base">Cart(0)</h1>
      <div className="flex items-start flex-col px-3 py-4 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-start">
            <img
              src="images/shoes.png"
              alt="shoes"
              className="w-20 h-20 rounded-md shadow mr-4"
            />
            <div>
              <h1 className="font-medium text-lg text-gray-600 leading-5">
                name
              </h1>
              <p className="text-primary text-xs">stock</p>
            </div>
          </div>
          <h1 className="font-semibold text-lg">price</h1>
        </div>
        <div className="pt-2 flex items-center justify-between w-full">
            <h1 className="text-primary uppercase flex items-center"><MdDeleteOutline className="mr-3 w-6 h-6" />  Remove</h1>
            <div className="flex items-center">
                <h1 className="bg-primary rounded-sm hover:bg-primary100 px-3 py-1 mr-2 cursor-pointer text-white">-</h1>
                <h1 className=" px-3 py-1 mr-2 cursor-pointer ">0</h1>
                <h1 className="bg-primary cursor-pointer hover:bg-primary100 rounded-sm px-3 py-1 text-white">+</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
