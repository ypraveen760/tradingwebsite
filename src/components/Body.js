import React, { useEffect } from "react";
import Header from "./Header";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Scanner from "./Scanner";
import Login from "./Login";
import Home from "./Home";
import Journal from "./Journal";
import Blogs from "./Blogs";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
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
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // ...
      } else {
        dispatch(removeUser());
        // User is signed out
        // ...
      }
    });
  });
  return (
    <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-[100vh]">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
