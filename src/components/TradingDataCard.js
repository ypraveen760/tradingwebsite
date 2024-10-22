import React from "react";

const TradingDataCard = (data) => {
  return (
    <div>
      {" "}
      <div className="main">
        <div className="flex justify-around items-center">
          <h1 className="text-[#1cacce] text-xl font-bold ">{data[0].name}</h1>
          <img className="w-8" src={data[0].icon}></img>
        </div>
        <div className="flex flex-col items-start mt-2">
          <h1 className="text-white">
            <span className="text-lg font-semibold text-[#1cacce]">Price:</span>{" "}
            ₹ {data[0].price.toFixed(0)}
          </h1>
          {data[0].priceChange1h > 0 ? (
            <h1 className="text-green-600">
              <span className=" text-md text-[#1cacce]">1HR Change:</span>{" "}
              {data[0].priceChange1h}
            </h1>
          ) : (
            <h1 className="text-red-600">
              <span className=" text-md text-[#1cacce]">1HR Change:</span>{" "}
              {data[0].priceChange1h}
            </h1>
          )}
          {data[0].priceChange1d > 0 ? (
            <h1 className="text-green-600">
              <span className=" text-md text-[#1cacce]">1D change:</span>{" "}
              {data[0].priceChange1d}
            </h1>
          ) : (
            <h1 className="text-red-600">
              <span className=" text-md text-[#1cacce]">1D change:</span>{" "}
              {data[0].priceChange1d}
            </h1>
          )}

          <h1 className="text-white">
            <span className=" text-md text-[#1cacce]">Volume:</span>{" "}
            {(Math.abs(Number(data[0].volume)) / 1.0e9).toFixed(0)}
            {"  "}B
          </h1>
          <h1 className="text-white">
            <span className=" text-md text-[#1cacce]">Total Supply:</span>{" "}
            {(Math.abs(Number(data[0].totalSupply)) / 1.0e6).toFixed(0)}
            {"  "}M
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TradingDataCard;
