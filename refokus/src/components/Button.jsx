import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Button() {
  return (
    <>
      <div className="min-w-40 rounded-full bg-slate-100 py-1 cursor-pointer px-5 text-black font-regular flex items-center justify-between">
        <span>Get Started</span>
        <FaArrowRightLong />
      </div>
    </>
  );
}

export default Button;
