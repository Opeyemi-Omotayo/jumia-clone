import React from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { PaystackButton } from "react-paystack";
import { clearCart } from "../../Store/cart/CartSlice";
import { formatEmail } from "../../utils/formatEmail";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
  const navigate = useNavigate();
  const { carts } = useAppSelector((state) => state.carts);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  let name;
  if (user) {
    name = formatEmail(user?.email);
  }
  const publicKey = `${process.env.REACT_APP_PAYSTACK_KEY}`;

  const calculateTotalPrice = carts.reduce((total, cart) => {
    return total + cart.price * cart.quantity;
  }, 0);

  const componentProps = {
    email: "jumia.clone@gmail.com",
    amount: calculateTotalPrice * 100,
    publicKey,
    text: `checkout (₦ ${calculateTotalPrice.toFixed(2)})`,
    onSuccess: () => handleClearCart(),
    onClose: () => alert("Wait! You need this item, don't go :)!!!!"),
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col items-start text-sm bg-white shadow-md rounded-md w-full mt-6 lg:mt-0">
      <h1 className="font-semibold uppercase border-b w-full p-3 text-base hidden lg:block">
        Cart summary
      </h1>
      <div className=" w-full">
        <div className="flex items-center justify-between border-b py-3">
          <p className="text-sm text-gray-500 px-3">Subtotal</p>
          <h2 className="text-lg font-semibold px-3">
            ₦{calculateTotalPrice.toFixed(2)}
          </h2>
        </div>
        <div className="p-3">
          {name ? (
            <PaystackButton
              {...componentProps}
              className="bg-primary text-white rounded-md uppercase shadow-lg w-full text-center py-3 flex items-center justify-center relative"
            />
          ) : (
            <button onClick={() => navigate("/login")} className="bg-primary text-white rounded-md uppercase shadow-lg w-full text-center py-3 flex items-center justify-center relative">
              checkout (₦ {calculateTotalPrice.toFixed(2)})
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
