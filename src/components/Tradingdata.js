import React, { useEffect, useState } from "react";

const Tradingdata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://openapiv1.coinstats.app/coins?currency=INR",
        {
          headers: {
            "X-API-KEY": "FfSC0f50aVglpVAVPLklLJ0M5z5G78zYlBJ6MoBqUBg=",
          },
        }
      );
      const json = await response.json();
      setData(json.result);
      console.log(json.result);
    } catch (error) {
      console.error("Error Occured", error);
    }
  };

  if (data.length === 0) {
    return <h1 className="text-white text-4xl">Loading......</h1>;
  }

  return (
    <div>
      <div className="middle">
        <div className="w-full h-20 mx-auto p-1 border-2 border-[#1cacce] relative flex overflow-hidden my-3">
          <div className="flex animate-marquee whitespace-nowrap hover:animate-none space-x-16">
            {data.map((val) => (
              <div
                key={val.id}
                className="text-white flex flex-col text-center"
              >
                <span className="text-[#33d1f4]">{val.name}</span>
                <span>₹ {val.price.toFixed(4)}</span>
                {val.priceChange1h > 0 ? (
                  <span className="text-green-600">{val.priceChange1h}</span>
                ) : (
                  <span className="text-red-600">{val.priceChange1h}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="m-4 gap-5 flex ">
        <div className="w-full h-48 border-2 border-white rounded-md p-3 ">
          <div className="main">
            <div className="flex justify-around items-center">
              <h1 className="text-[#1cacce] text-xl font-bold ">
                {data[0].name}
              </h1>
              <img className="w-8" src={data[0].icon}></img>
            </div>
            <div className="flex flex-col items-start mt-2">
              <h1 className="text-white">
                <span className="text-lg font-semibold text-[#1cacce]">
                  Price:
                </span>{" "}
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
        <div className="w-full h-48 border-2 border-white rounded-md p-3">
          {" "}
          <div className="main">
            <div className="flex justify-around items-center">
              <h1 className="text-[#1cacce] text-xl font-bold ">
                {data[1].name}
              </h1>
              <img className="w-8" src={data[1].icon}></img>
            </div>
            <div className="flex flex-col items-start mt-2">
              <h1 className="text-white">
                <span className="text-lg font-semibold text-[#1cacce]">
                  Price:
                </span>{" "}
                ₹ {data[1].price.toFixed(0)}
              </h1>
              {data[1].priceChange1h > 0 ? (
                <h1 className="text-green-600">
                  <span className=" text-md text-[#1cacce]">1HR Change:</span>{" "}
                  {data[1].priceChange1h}
                </h1>
              ) : (
                <h1 className="text-red-600">
                  <span className=" text-md text-[#1cacce]">1HR Change:</span>{" "}
                  {data[1].priceChange1h}
                </h1>
              )}
              {data[1].priceChange1d > 0 ? (
                <h1 className="text-green-600">
                  <span className=" text-md text-[#1cacce]">1D change:</span>{" "}
                  {data[1].priceChange1d}
                </h1>
              ) : (
                <h1 className="text-red-600">
                  <span className=" text-md text-[#1cacce]">1D change:</span>{" "}
                  {data[1].priceChange1d}
                </h1>
              )}

              <h1 className="text-white">
                <span className=" text-md text-[#1cacce]">Volume:</span>{" "}
                {(Math.abs(Number(data[1].volume)) / 1.0e9).toFixed(0)}
                {"  "}B
              </h1>
              <h1 className="text-white">
                <span className=" text-md text-[#1cacce]">Total Supply:</span>{" "}
                {(Math.abs(Number(data[1].totalSupply)) / 1.0e6).toFixed(0)}
                {"  "}M
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-48 border-2 border-white rounded-md p-3 hidden 2xl:block">
          {" "}
          <div className="main">
            <div className="flex justify-around items-center">
              <h1 className="text-[#1cacce] text-xl font-bold ">
                {data[2].name}
              </h1>
              <img className="w-8" src={data[2].icon}></img>
            </div>
            <div className="flex flex-col items-start mt-2">
              <h1 className="text-white">
                <span className="text-lg font-semibold text-[#1cacce]">
                  Price:
                </span>{" "}
                ₹ {data[2].price.toFixed(0)}
              </h1>
              {data[2].priceChange1h > 0 ? (
                <h1 className="text-green-600">
                  <span className=" text-md text-[#1cacce]">1HR Change:</span>{" "}
                  {data[2].priceChange1h}
                </h1>
              ) : (
                <h1 className="text-red-600">
                  <span className=" text-md text-[#1cacce]">1HR Change:</span>{" "}
                  {data[2].priceChange1h}
                </h1>
              )}
              {data[2].priceChange1d > 0 ? (
                <h1 className="text-green-600">
                  <span className=" text-md text-[#1cacce]">1D change:</span>{" "}
                  {data[2].priceChange1d}
                </h1>
              ) : (
                <h1 className="text-red-600">
                  <span className=" text-md text-[#1cacce]">1D change:</span>{" "}
                  {data[2].priceChange1d}
                </h1>
              )}

              <h1 className="text-white">
                <span className=" text-md text-[#1cacce]">Volume:</span>{" "}
                {(Math.abs(Number(data[2].volume)) / 1.0e9).toFixed(0)}
                {"  "}B
              </h1>
              <h1 className="text-white">
                <span className=" text-md text-[#1cacce]">Total Supply:</span>{" "}
                {(Math.abs(Number(data[2].totalSupply)) / 1.0e6).toFixed(0)}
                {"  "}M
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-48 border-2 border-white rounded-md p-3 hidden xl:block">
          {" "}
          <div className="main">
            <div className="flex justify-around items-center">
              <h1 className="text-[#1cacce] text-xl font-bold ">
                {data[3].name}
              </h1>
              <img className="w-8" src={data[3].icon}></img>
            </div>
            <div className="flex flex-col items-start mt-2">
              <h1 className="text-white">
                <span className="text-lg font-semibold text-[#1cacce]">
                  Price:
                </span>{" "}
                ₹ {data[3].price.toFixed(0)}
              </h1>
              {data[3].priceChange1h > 0 ? (
                <h1 className="text-green-600">
                  <span className=" text-md text-[#1cacce]">1HR Change:</span>{" "}
                  {data[3].priceChange1h}
                </h1>
              ) : (
                <h1 className="text-red-600">
                  <span className=" text-md text-[#1cacce]">1HR Change:</span>{" "}
                  {data[3].priceChange1h}
                </h1>
              )}
              {data[3].priceChange1d > 0 ? (
                <h1 className="text-green-600">
                  <span className=" text-md text-[#1cacce]">1D change:</span>{" "}
                  {data[3].priceChange1d}
                </h1>
              ) : (
                <h1 className="text-red-600">
                  <span className=" text-md text-[#1cacce]">1D change:</span>{" "}
                  {data[3].priceChange1d}
                </h1>
              )}

              <h1 className="text-white">
                <span className=" text-md text-[#1cacce]">Volume:</span>{" "}
                {(Math.abs(Number(data[3].volume)) / 1.0e9).toFixed(0)}
                {"  "}B
              </h1>
              <h1 className="text-white">
                <span className=" text-md text-[#1cacce]">Total Supply:</span>{" "}
                {(Math.abs(Number(data[3].totalSupply)) / 1.0e6).toFixed(0)}
                {"  "}M
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-48 border-2 border-white rounded-md p-3 hidden md:block">
          {" "}
          <div className="main">
            <div className="flex justify-around items-center">
              <h1 className="text-[#1cacce] text-xl font-bold ">
                {data[4].name}
              </h1>
              <img className="w-8" src={data[4].icon}></img>
            </div>
            <div className="flex flex-col items-start mt-2">
              <h1 className="text-white">
                <span className="text-lg font-semibold text-[#1cacce]">
                  Price:
                </span>{" "}
                ₹ {data[4].price.toFixed(0)}
              </h1>
              {data[4].priceChange1h > 0 ? (
                <h1 className="text-green-600">
                  <span className=" text-md text-[#1cacce]">1HR Change:</span>{" "}
                  {data[4].priceChange1h}
                </h1>
              ) : (
                <h1 className="text-red-600">
                  <span className=" text-md text-[#1cacce]">1HR Change:</span>{" "}
                  {data[4].priceChange1h}
                </h1>
              )}
              {data[4].priceChange1d > 0 ? (
                <h1 className="text-green-600">
                  <span className=" text-md text-[#1cacce]">1D change:</span>{" "}
                  {data[4].priceChange1d}
                </h1>
              ) : (
                <h1 className="text-red-600">
                  <span className=" text-md text-[#1cacce]">1D change:</span>{" "}
                  {data[4].priceChange1d}
                </h1>
              )}

              <h1 className="text-white">
                <span className=" text-md text-[#1cacce]">Volume:</span>{" "}
                {(Math.abs(Number(data[4].volume)) / 1.0e9).toFixed(0)}
                {"  "}B
              </h1>
              <h1 className="text-white">
                <span className=" text-md text-[#1cacce]">Total Supply:</span>{" "}
                {(Math.abs(Number(data[4].totalSupply)) / 1.0e6).toFixed(0)}
                {"  "}M
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-48 border-2 border-white rounded-md p-3 hidden sm:block">
          {" "}
          <div className="main">
            <div className="flex justify-around items-center">
              <h1 className="text-[#1cacce] text-xl font-bold ">
                {data[5].name}
              </h1>
              <img className="w-8" src={data[5].icon}></img>
            </div>
            <div className="flex flex-col items-start mt-2">
              <h1 className="text-white">
                <span className="text-lg font-semibold text-[#1cacce]">
                  Price:
                </span>{" "}
                ₹ {data[5].price.toFixed(0)}
              </h1>
              {data[5].priceChange1h > 0 ? (
                <h1 className="text-green-600">
                  <span className=" text-md text-[#1cacce]">1HR Change:</span>{" "}
                  {data[5].priceChange1h}
                </h1>
              ) : (
                <h1 className="text-red-600">
                  <span className=" text-md text-[#1cacce]">1HR Change:</span>{" "}
                  {data[5].priceChange1h}
                </h1>
              )}
              {data[5].priceChange1d > 0 ? (
                <h1 className="text-green-600">
                  <span className=" text-md text-[#1cacce]">1D change:</span>{" "}
                  {data[5].priceChange1d}
                </h1>
              ) : (
                <h1 className="text-red-600">
                  <span className=" text-md text-[#1cacce]">1D change:</span>{" "}
                  {data[5].priceChange1d}
                </h1>
              )}

              <h1 className="text-white">
                <span className=" text-md text-[#1cacce]">Volume:</span>{" "}
                {(Math.abs(Number(data[5].volume)) / 1.0e9).toFixed(0)}
                {"  "}B
              </h1>
              <h1 className="text-white">
                <span className=" text-md text-[#1cacce]">Total Supply:</span>{" "}
                {(Math.abs(Number(data[5].totalSupply)) / 1.0e6).toFixed(0)}
                {"  "}M
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tradingdata;
