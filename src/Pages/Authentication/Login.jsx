import React from "react";
import { MdStars } from "react-icons/md";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16">
      <div className="w-full md:w-3/5 lg:w-[35%] xl:w-[30%]">
        <div className="flex items-center justify-center flex-col">
          <MdStars className="text-primary w-20 h-20" />
          <h1 className="font-mono text-xl font-semibold">Welcome to Jumia</h1>
          <p className="text-sm text-gray-600 pb-4 text-center">
            Type your email or phone number to log in or create a Jumia account.
          </p>
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-4 border border-gray-400 focus:border-primary w-full my-4 outline-none rounded-md placeholder:text-gray-500"
          />
          <input
            type="password"
            placeholder="Email or phone number"
            className="p-4 border border-gray-400 focus:border-primary w-full my-4 outline-none rounded-md placeholder:text-gray-500"
          />
          <button className="w-full bg-primary text-white p-4 rounded-md shadow-md mt-4 mb-2">
            Continue
          </button>
          <p className="text-xs w-[60%] text-center">
            By continuing you agree to Jumia’s{" "} <br/>
            <span className="underline text-primary">
              Terms and Conditions
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
