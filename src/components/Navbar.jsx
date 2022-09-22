import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import GoogleLogo from "../images/google.png";

export const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-warp sm:justify-between justify-center items-center border-b dark:border-gray-200 border-gray-200">
      <div className="flex justify-start items-center space-x-5 w-screen">
        <Link to="/Home">
          <img
            src={GoogleLogo}
            alt="google"
            className="md:w-24 w-24 sm:-mt-8"
          />
        </Link>
        <Search />
      </div>
      <button
        type="button"
        className="dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-2 hover:shadow-lg text-sm w-24 md:text-lg md:w-40"
        onClick={() => setDarkTheme(!darkTheme)}
      >
        {darkTheme ? "Day ☀️" : "Night 🌙"}
      </button>
    </div>
  );
};
