import React, { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSubmit = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    console.log(message);
  };
  const switchSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="p-5 border border-white w-80 m-auto my-20 rounded-2xl backdrop-blur-3xl bg-cyan-200/5   ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col justify-center items-center  "
        >
          <h1 className="my-3 text-2xl text-[#1cacce] font-bold hover:cursor-default">
            {isSignIn ? "Login" : "Register"}
          </h1>
          {!isSignIn && (
            <input
              className="my-3 bg-transparent text-white border border-stone-100 rounded-3xl placeholder:text-cyan-100 placeholder:text-center p-2"
              type="text"
              placeholder="Name"
              required
            ></input>
          )}
          <input
            ref={email}
            className="my-3 bg-transparent text-white  border border-stone-100 rounded-3xl placeholder:text-cyan-100 placeholder:text-center p-2"
            type="text"
            placeholder="Email ID"
            required
          ></input>
          <input
            ref={password}
            className="my-3 bg-transparent border text-white border-stone-100 rounded-3xl placeholder:text-cyan-100 placeholder:text-center p-2"
            type="password"
            placeholder="Password"
            required
          ></input>
          <p className="text-red-600 font-semibold">{errorMessage}</p>
          <div className="text-sm mt-2 text-white ">
            {isSignIn ? (
              <input className="accent-[#1cacce]" type="checkbox" />
            ) : (
              <input className="accent-[#1cacce]" type="checkbox" required />
            )}{" "}
            <span className="cursor-default">
              {isSignIn ? "Remember Me" : "I agree to terms & conditions"}
            </span>{" "}
            <span className="cursor-pointer text-md font-semibold hover:text-[#1cacce] ">
              {isSignIn && "Forgot Password"}
            </span>
          </div>

          <button
            className="bg-[#1cacce] py-1 px-4 border my-3 border-white rounded-lg text-white font-medium hover:bg-[#000d1d] hover:border-[#1cacce] hover:text-[#1cacce] cursor-pointer"
            onClick={handleSubmit}
          >
            {isSignIn ? "Login" : "Register"}
          </button>
          <div>
            <span className="text-sm my-2 text-white ">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
            </span>
            <span
              className="text-md font-semibold my-2 text-white cursor-pointer hover:text-[#1cacce]"
              onClick={switchSignIn}
            >
              {" "}
              {!isSignIn ? "Login" : "Register"}
            </span>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
