import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  const data = [
    {
      url: "Some Images",
      num: "01",
    },
    {
      url: "Some Images",
      num: "02",
    },
    {
      url: "Some Images",
      num: "03",
    },
    {
      url: "Some Images",
      num: "04",
    },
    {
      url: "Some Images",
      num: "05",
    },
    {
      url: "Some Images",
      num: "06",
    },
  ];
  return (
    <>
      <div className="flex items-center my-20">
        {data.map((elem, index) => {
          return <Stripe key={index} val={elem} />;
        })}
      </div>
    </>
  );
}

export default Stripes;
