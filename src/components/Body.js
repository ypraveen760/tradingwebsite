import React from "react";
import Header from "./Header";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Scanner from "./Scanner";
import Login from "./Login";
import Home from "./Home";
import Journal from "./Journal";
import Blogs from "./Blogs";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "Scanner",
      element: <Scanner />,
    },
    {
      path: "signin",
      element: <Login />,
    },
    {
      path: "journal",
      element: <Journal />,
    },
    {
      path: "blogs",
      element: <Blogs />,
    },
  ]);
  return (
    <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
