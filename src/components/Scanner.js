import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Scanner = () => {
  return (
    <div>
      <Header />
      <div>
        {" "}
        <div className="min-h-screen flex flex-col justify-center items-center">
          <image
            src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
            alt="Logo"
            className="mb-8 h-40"
          ></image>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">
            Site is under maintenance
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">
            Scanner page is under construction it will take time
          </h1>
          <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
            We're working hard to improve the user experience. Stay tuned!
          </p>
          <div className="flex space-x-4">
            <Link to="/">
              <p
                href="#"
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Home
              </p>
            </Link>
            <a
              href="#"
              className="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white"
            >
              Reload
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Scanner;
