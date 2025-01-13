import React from "react";

function Stripe({ val }) {
  const { url, num } = val;
  return (
    <>
      <div className="w-[50%] flex justify-between items-center border-t-[1px] border-b-[1px] border-r-[1px] py-5 px-3 border-zinc-700">
        <span>{url}</span>
        <span className="font-semibold">{num}</span>
      </div>
    </>
  );
}

export default Stripe;
