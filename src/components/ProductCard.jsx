import React from "react";
import Rating from "./Rating";
import { MdAddShoppingCart } from "react-icons/md";
import FlashSales from "./FlashSales";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  
  return (
    <section>
      <div className="flex items-start bg-white shadow-md rounded-md w-full">
        <div>
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-[300px] w-[300px]"
          />
        </div>
        <div className="p-4 w-full">
          <div className="text-[10px] flex items-center">
            <h1 className="bg-[#276076] text-white p-1 rounded-sm shadow capitalize mr-2">
              Offical store
            </h1>
            <h1 className="bg-primary text-white p-1 rounded-sm shadow capitalize">
              Jumai festival deal
            </h1>
          </div>
          <h1 className="capitalize py-2">{product.title}</h1>
          <h2 className="text-xs border-b w-full border-gray-100 pb-3">
            Brand: <span className="text-sky-600">{product.brand}</span>
          </h2>
          <h1 className="text-xl py-1">₦{product.price}</h1>
          <p className="text-[10px] text-gray-500">
            {product.availabilityStatus}
          </p>
          <p className="text-xs text-gray-600 py-1">
            {product.shippingInformation}
          </p>
          <Rating rating={product.rating} />
          <button
            onClick={() => navigate("/cart")}
            className="bg-primary text-white rounded-md shadow-lg w-full text-center py-3 flex items-center justify-center relative my-4"
          >
            <MdAddShoppingCart className="absolute left-4 w-6 h-6" />
            Add to cart
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start bg-white shadow-md rounded-md w-full my-4">
        <h1 className="font-semibold border-b w-full p-3 text-base">
          Product details
        </h1>
        <p className="text-sm text-gray-600 p-4">{product.description}</p>
        <h2 className="font-semibold text-sm px-4 pb-4">
          Weight (kg) <span className="font-normal">:{product.weight}</span>
        </h2>
      </div>
      <FlashSales />
      <div className="flex flex-col items-start text-sm bg-white shadow-md rounded-md w-full my-4">
        <h1 className="font-semibold border-b w-full p-3 text-base">
          Verified Customer Feedback
        </h1>
        <div className="p-4 flex items-start justify-between w-full">
          <div className="w-[25%]">
            <h2 className="uppercase pb-2">Verified Ratings</h2>
            <div className="flex items-center justify-center flex-col h-[120px] w-full bg-gray-100 rounded-md">
              <h1 className="text-primary text-xl">{product.rating} / 5</h1>
              <Rating rating={product.rating} />
            </div>
          </div>
          <div className="w-[73%]">
            <h2 className="uppercase pb-2">Comments from Verified Purchases</h2>
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className={`py-2 ${
                  index !== product.reviews.length - 1 ? "border-b" : ""
                }`}
              >
                <Rating rating={review.rating} />
                <h2 className=" py-2">{review.comment}</h2>
                <h2 className="text-gray-500 text-xs">
                  {new Date(review.date).toLocaleDateString()} by{" "}
                  {review.reviewerName}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;