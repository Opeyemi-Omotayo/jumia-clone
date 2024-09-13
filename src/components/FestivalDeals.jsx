import React, {useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { FaChevronRight } from "react-icons/fa6";
import { getAllProducts } from "../Store/thunk";

const FestivalDeals = () => {
  const dispatch = useAppDispatch();
  const { products, status, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  console.log(products);

  return (
    <div className="bg-white rounded-md shadow-sm w-full overflow-hidden mt-5">
      <div className="flex items-center justify-between text-white bg-[#4B158D] p-4 rounded-t-md">
        <h1 className="text-white font-bold capitalize text-lg">
          Jumia Festival Deals
        </h1>
        <div className="flex items-center text-sm cursor-pointer">
          <h1 className="uppercase font-medium ">See all</h1>
          <FaChevronRight />
        </div>
      </div>
      <div className="p-3 w-full grid grid-cols-6 gap-2">
        {products.slice(0, 18).map((product, index) => (
          <div
            key={index}
            className=" text-sm hover:shadow-md hover:scale-95 cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-md h-48 w-full object-cover"
            />
            <div className="p-2">
            <h1 className="text-gray-600 capitalize ">
              {product.title.slice(0, 20)}
            </h1>
            <h2 className="text-base mt-1">₦{product.price}</h2>
            <h2 className="text-gray-500 line-through text-xs mb-1">₦{product.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FestivalDeals;
