import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-5 border-b-[1px] border-zinc-800 flex items-center justify-between">
      <div className="navLeft flex items-center gap-3">
        <h1 className="font-bold text-xl">Refokus</h1>
        <div className="flex gap-10 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[1px] h-15 bg-zinc-300"></span>
            ) : (
              <a
                className="text-sm flex items-center gap-2"
                //   href={`/${elem.toLowerCase()}`}
                href={`/`}
                key={index}
              >
                {index === 0 && (
                  <span
                    style={{ boxShadow: "0 0 0.25rem #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-800 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
