import React from "react";

function Work() {
  const ImgData = [
    {
      url: "https://img.freepik.com/free-photo/person-wearing-yellow-jacket-standing-mesmerizing-waterfall_181624-16503.jpg?t=st=1736670565~exp=1736674165~hmac=73f49ec4b4678fe02342d273b177a1e3f64d2133cc72336b788fcad09fadac78&w=996",
      left: "50%",
      top: "50%",
      isActive: true,
    },
    {
      url: "https://img.freepik.com/free-photo/person-wearing-yellow-jacket-standing-mesmerizing-waterfall_181624-16503.jpg?t=st=1736670565~exp=1736674165~hmac=73f49ec4b4678fe02342d273b177a1e3f64d2133cc72336b788fcad09fadac78&w=996",
      left: "45%",
      top: "60%",
      isActive: true,
    },
    {
      url: "https://img.freepik.com/free-photo/person-wearing-yellow-jacket-standing-mesmerizing-waterfall_181624-16503.jpg?t=st=1736670565~exp=1736674165~hmac=73f49ec4b4678fe02342d273b177a1e3f64d2133cc72336b788fcad09fadac78&w=996",
      left: "50%",
      top: "50%",
      isActive: false,
    },
    {
      url: "https://img.freepik.com/free-photo/person-wearing-yellow-jacket-standing-mesmerizing-waterfall_181624-16503.jpg?t=st=1736670565~exp=1736674165~hmac=73f49ec4b4678fe02342d273b177a1e3f64d2133cc72336b788fcad09fadac78&w=996",
      left: "50%",
      top: "50%",
      isActive: false,
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="relative max-w-screen-xl mx-auto text-center">
          <h1 className="text-[35vw] leading-none font-medium select-none tracking-tight">
            work
          </h1>
          <div className="absolute top-0 w-full h-full ">
            {ImgData.map(
              (elem, index) =>
                elem.isActive && (
                  <img
                    key={index}
                    src={elem.url}
                    className="w-60 absolute translate-y-[-50%] translate-x-[-50%]"
                    style={{ left: elem.left, top: elem.top }}
                    alt=""
                  />
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
