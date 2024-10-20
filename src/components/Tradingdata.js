import React from "react";

const Tradingdata = () => {
  return (
    <div>
      <div className="middle">
        <div className="w-full h-16 border-2 border-[#1cacce]  my-3"></div>
      </div>

      <div className="m-4 gap-5 flex ">
        <div className="w-full  h-48 border-2 border-white rounded-md p-3 "></div>
        <div className="w-full  h-48 border-2 border-white rounded-md p-3 "></div>
        <div className="w-full  h-48 border-2 border-white rounded-md p-3 hidden 2xl:block "></div>
        <div className="w-full  h-48 border-2 border-white rounded-md p-3 hidden xl:block"></div>
        <div className="w-full  h-48 border-2 border-white rounded-md p-3 hidden md:block"></div>
        <div className="w-full h-48 border-2 border-white rounded-md p-3   hidden sm:block    "></div>
      </div>
    </div>
  );
};

export default Tradingdata;
