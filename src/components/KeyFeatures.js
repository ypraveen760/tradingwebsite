import React from "react";

const KeyFeatures = () => {
  return (
    <div>
      <div className="lg:mx-16 sm:mx-0 xl:mx-32  md:mx-10">
        <h1 className="  text-3xl text-[#1cacce]  font-bold">Key Features</h1>
        <div className="w-12/12 m-auto h-[2px] bg-white"></div>
      </div>
      <div className="lg:flex mx-3 px-3 xl:gap-10 gap-5 *:m-6">
        <div className="*:my-2">
          <h1 className="text-2xl font-semibold  text-[#1cacce]">
            Educational Resources
          </h1>
          <p className="text-white font-light">
            Detailed guides on option selling strategies, risk management, and
            market psychology. Video tutorials, eBooks, and webinars hosted by
            us. A section for beginner traders, with simple, actionable steps to
            get started.
          </p>
          <button className="bg-[#1cacce] py-2 px-4 border border-white rounded-lg text-white font-medium hover:bg-[#000d1d] hover:border-[#1cacce] hover:text-[#1cacce] cursor-pointer">
            Resources
          </button>
        </div>
        <div className="*:my-2">
          <h1 className="text-2xl font-semibold  text-[#1cacce]">
            Pre-Market Analysis Section
          </h1>
          <p className="text-white font-light">
            Daily analysis of the Nifty market. Key levels, expected market
            moves, and trade setups. Predictions based on your unique insights
            and technical indicators. Subscription option for exclusive early
            access to in-depth analysis.
          </p>
          <button className="bg-[#1cacce] py-2 px-4 border border-white rounded-lg text-white font-medium hover:bg-[#000d1d] hover:border-[#1cacce] hover:text-[#1cacce] cursor-pointer">
            Analysis
          </button>
        </div>
        <div className="*:my-2">
          <h1 className="text-2xl font-semibold  text-[#1cacce]">
            Interactive Trade Journal
          </h1>
          <p className="text-white font-light">
            A tool for users to log and analyze their trades, similar to your
            personal trade journal. Allow users to track performance, identify
            patterns, and get automated insights based on data. Tutorials on how
            to maintain an effective trade journal and analyze it for continual
            improvement.
          </p>
          <button className="bg-[#1cacce] py-2 px-4 border border-white rounded-lg text-white font-medium hover:bg-[#000d1d] hover:border-[#1cacce] hover:text-[#1cacce] cursor-pointer">
            Journal
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
