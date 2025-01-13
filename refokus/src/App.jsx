import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";

function App() {
  return (
    <>
      <div className="bg-[#0F1215] w-full text-white h-screen overflow-x-hidden">
        <Navbar />
        <Work />
        <Stripes />
      </div>
    </>
  );
}

export default App;
