import React from "react";
import bg from "../utils/bgone.png";
import bgtwo from "../utils/bgtwo.png";
import Tradingdata from "./Tradingdata";
import KeyFeatures from "./KeyFeatures";
import SignUpAd from "./SignUpAd";
import Footer from "./Footer";

const FirstPage = () => {
  return (
    <div className="lg:mx-16 sm:mx-0 xl:mx-32  md:mx-8">
      <div className="flex sm:flex-row">
        <div className=" w-full  mx-3 mt-6 p-3 sm:flex-row ">
          <h1 className="text-4xl font-semibold mb-2 text-[#1cacce] ">
            The Rookie Traders
          </h1>
          <h2 className="text-xl font-normal mb-4 text-white ">
            Your Path From Rookie To Pro
          </h2>
          <p className="text-white font-light">
            At TheRookieTraders, we believe that trading should be accessible
            and empowering for everyone, whether you’re just starting or have
            years of experience. Our mission is to provide a platform where
            traders of all levels can grow, learn, and succeed in the fast-paced
            world of financial markets.
          </p>
        </div>
        <img className="w-4/12 hidden sm:block" src={bg}></img>
      </div>
      <div className="w-full h-[2px] bg-white"></div>
      <Tradingdata />

      <div className="w-full h-[2px] bg-white "></div>
      <div>
        <div className="flex sm:flex">
          <img
            className="w-4/12 max-w-80 h-56 items-center relative top-24 justify-center hidden sm:block"
            src={bgtwo}
          ></img>
          <div className=" w-full  mx-3 mt-6 p-3 sm:flex-row ">
            <h1 className="text-4xl font-semibold mb-2 text-[#1cacce] ">
              What Sets Us Apart?
            </h1>
            <h2 className="text-xl font-normal mb-4 text-white ">
              Join TheRookieTraders Today!
            </h2>
            <p className="text-white font-light ">
              <span className="font-semibold text-lg text-[#1cacce] ">
                Education First:
              </span>{" "}
              We offer an extensive range of educational resources, including
              webinars, tutorials, and live trading sessions designed to guide
              traders through every step of their journey.
              <br />
              <span className="font-semibold text-lg text-[#1cacce] ">
                Community Support:
              </span>{" "}
              Our vibrant community of traders is here to share insights,
              strategies, and experiences, helping you make informed decisions
              and stay ahead in the market.
              <br />
              <span className="font-semibold text-lg text-[#1cacce] ">
                Powerful Tools:
              </span>{" "}
              With our innovative trading dashboard and market analysis tools,
              you'll have the edge you need to make data-driven trades with
              confidence. <br />
              <span className="font-semibold text-lg text-[#1cacce] ">
                Transparency & Trust:
              </span>{" "}
              Transparency & Trust: We are committed to maintaining the highest
              standards of transparency and integrity, ensuring a fair and
              secure trading environment.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-3 p-3">
        <KeyFeatures />
      </div>
      <div className="w-full h-[2px] bg-white "></div>
    </div>
  );
};

export default FirstPage;
