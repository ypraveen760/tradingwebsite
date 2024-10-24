import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_KEY } from "./keys";

const Scanner = () => {
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
    const interavl = setInterval(() => {
      fetchData();
    }, 10000);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://openapiv1.coinstats.app/coins?currency=INR",
        {
          headers: {
            "X-API-KEY": API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCurrency(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    }
  };

  if (currency.length === 0) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error occurred: {error.message}</h1>;
  }
  return (
    <div>
      <Header />
      <div>
        <h2 className="m-4 text-center text-2xl text-[#33d1f4]  ">
          Cryptocurrency Market Overview:{" "}
          <span className="text-white">Real-Time Data on Leading Coins</span>
        </h2>
        <div className="flex flex-col w-64 bg-transparent mx-auto">
          <input
            className="border-2 text-center p-1 placeholder:text-[#33d1f4] text-white rounded-xl bg-transparent "
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex justify-center overflow-x-auto  my-10">
          <table className="text-center border border-white p-5">
            <thead className="border border-white ">
              <tr>
                <th>
                  <div className="md:mx-5 md:my-3 text-sm m-2 text-white sm:text-lg  text-start">
                    Rank
                  </div>
                </th>
                <th>
                  <div className="md:mx-5 md:my-3 text-sm m-2 text-white md:text-lg text-start">
                    Name
                  </div>
                </th>
                <th>
                  <div className="md:mx-5 md:my-3 text-sm m-2 text-white md:text-lg text-start">
                    Symbol
                  </div>
                </th>
                <th>
                  <div className="md:mx-5 md:my-3 text-sm m-2 text-white md:text-lg text-start">
                    Market Cap
                  </div>
                </th>
                <th>
                  {" "}
                  <div className="md:mx-5 md:my-3 text-sm m-2 text-white md:text-lg text-start">
                    Price
                  </div>
                </th>
                <th>
                  {" "}
                  <div className="md:mx-5 md:my-3 text-sm m-2 text-white md:text-lg text-start">
                    Available Supply
                  </div>
                </th>
                <th>
                  <div className="md:mx-5 md:my-3 text-sm m-2 text-white md:text-lg text-start">
                    Volume (24h)
                  </div>
                </th>
                <th>
                  <div className="md:mx-5 md:my-3 text-sm m-2 text-white md:text-lg text-start">
                    Price Change (1D)
                  </div>
                </th>
                <th>
                  {" "}
                  <div className="md:mx-5 md:my-3 text-sm m-2 text-white md:text-lg text-start">
                    Price Change (1H)
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currency
                .filter((val) =>
                  val.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((val) => (
                  <tr key={val.id}>
                    <td>
                      <div className="text-center text-white">{val.rank}</div>
                    </td>
                    <td>
                      <div className="flex my-3 mx-4 gap-4 items-center justify-start  text-[#33d1f4]">
                        <img
                          src={val.icon}
                          alt={`${val.name} logo`}
                          width={20}
                        />
                        <a href={val.websiteUrl}>{val.name}</a>
                      </div>
                    </td>
                    <td>
                      <div className="text-[#33d1f4]">{val.symbol}</div>
                    </td>
                    <td>
                      <div className="text-gray-300">
                        {(Math.abs(Number(val.marketCap)) / 1.0e9).toFixed(0)} B
                      </div>
                    </td>
                    <td>
                      <div className="text-[#33d1f4]">
                        {val.price.toFixed(2)}
                      </div>
                    </td>
                    <td>
                      <div className="text-gray-300">
                        {(
                          Math.abs(Number(val.availableSupply)) / 1.0e6
                        ).toFixed(2)}{" "}
                        M
                      </div>
                    </td>
                    <td>
                      <div className="text-gray-300">
                        {(Math.abs(Number(val.volume)) / 1.0e9).toFixed(0)} B
                      </div>
                    </td>
                    <td>
                      {val.priceChange1d > 0 ? (
                        <h1 className="text-green-600">
                          {val.priceChange1d} %
                        </h1>
                      ) : (
                        <h1 className="text-red-600">{val.priceChange1d} %</h1>
                      )}
                    </td>
                    <td>
                      {" "}
                      {val.priceChange1h > 0 ? (
                        <h1 className="text-green-600">
                          {val.priceChange1h} %
                        </h1>
                      ) : (
                        <h1 className="text-red-600">{val.priceChange1h} %</h1>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Scanner;
