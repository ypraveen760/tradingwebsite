import React from "react";
import { Link } from "react-router-dom";

const SignUpAd = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#0093E9]  to-[#80D0C7] border rounded-md w-10/12 my-8 h-52 flex *:my-3 flex-col items-center justify-center mx-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-white text-center">
            Ready to get started?
            <br />
            Open an account Today.
          </h1>
          <p className=" text-white text-center">
            Your Path From Rookie To Pro.
          </p>
        </div>
        <div>
          <Link to="/signin">
            {" "}
            <button className="bg-white py-2 px-4 border rounded-md font-semibold hover:bg-[#000d1d] hover:border-white] hover:text-white  cursor-pointe ">
              Get Early access
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpAd;
