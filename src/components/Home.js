import React from "react";
import Header from "./Header";
import FirstPage from "./FirstPage";
import SignUpAd from "./SignUpAd";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] ">
      <Header />
      <FirstPage />
      <SignUpAd />
      <Footer />
    </div>
  );
};

export default Home;
