import React from "react";
import { Link } from "react-router-dom";
import Logo from "../utils/Logo.png";
import {
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-evenly">
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
            <Link to="/scanner">
              {" "}
              <li className="hover:text-[#1cacce] cursor-pointer">Scanner</li>
            </Link>
            <Link to="/journal">
              {" "}
              <li className="hover:text-[#1cacce] cursor-pointer">Journal</li>
            </Link>

            <a href="mailto:therookietradersofficial@gmail.com">
              {" "}
              <li className="hover:text-[#1cacce] cursor-pointer">Contact</li>
            </a>
          </ul>
        </div>
        <div className="flex items-center *:text-2xl gap-4 mr-7 sm:justify-center ">
          <a href="https://www.instagram.com/therookietraders/">
            {" "}
            <FaInstagram className="text-white hover:text-[#1cacce] cursor-pointer" />
          </a>
          <a href="https://www.youtube.com/@therookietradersofficial">
            <FaYoutube className="text-white hover:text-[#1cacce] cursor-pointer" />
          </a>
          <a href="mailto:therookietradersofficial@gmail.com">
            <FaEnvelope className="text-white hover:text-[#1cacce] cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="w-11/12 mx-auto h-[2px] bg-slate-400 my-1  "></div>
      <div className="flex  items-center justify-center ">
        <FaCopyright className="text-white hover:text-[#1cacce] cursor-pointer" />
        <p className="text-slate-300 p-5 ">
          2024 TheRookieTraders.All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
