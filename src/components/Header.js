import React from "react";
import Logo from "../utils/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mx-3 py-5 px-3 flex justify-between *:sm:items-center lg:mx-16 sm:mx-0 xl:mx-32  md:mx-10">
      <div className="w-20 flex items-center">
        <img
          className="rounded-s-lg border-r-2 border-[#1cacce] hover:border-white rounded-full hidden sm:block "
          src={Logo}
          alt="logo"
        ></img>
        <p className="relative left-2 text-white hover:text-[#1cacce] text-lg font-serif   hidden sm:block">
          TheRookie
          <br />
          Traders
        </p>
      </div>
      <div className="flex">
        <ul className="flex *:mr-3 *:text-white items-center *:text-lg *:font-medium *:lg:mx-5 ">
          <Link to="/">
            {" "}
            <li className="hover:text-[#1cacce] cursor-pointer">Home</li>
          </Link>
          <Link to="/scanner">
            <li className="hover:text-[#1cacce] cursor-pointer">Scanner</li>
          </Link>
          <Link to="/journal">
            <li className="hover:text-[#1cacce] cursor-pointer">Journal</li>
          </Link>
          <Link to="/blogs">
            <li className="hover:text-[#1cacce] cursor-pointer">Blogs</li>
          </Link>
          <Link to="/signin">
            <button className="border-2 border-[#1cacce] cursor-pointer hover:border-white hover:text-[#1cacce] rounded-md px-4 py-1">
              SignIn
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
