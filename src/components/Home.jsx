import React from "react";
import profilePicture from "../images/profile.jpeg";
import GoogleLogo from "../images/google.png";
const Home = () => {
  return (
    <div className="flex flex-wrap w-full h-full">
      <div className="flex flex-wrap w-full h-10 justify-end mr-3 mt-3">
        <p className="mr-5">Gmail</p>
        <p className="mr-5">Images</p>
        <img
          src={profilePicture}
          alt="profilePic"
          className="mr-5 w-9 rounded-full"
        />
      </div>
      <div className="flex flex-wrap flex-col w-full justify-center items-center">
        <img src={GoogleLogo} alt="google logo" className="h-96 w-96 -mt-10" />
        <input
          type="text"
          placeholder="Google Search"
          className="sm:w-2/5 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg -mt-20"
        />
      </div>
      <div className="flex flex-wrap w-full justify-center items-center mt-10">
        <button
          type="button"
          className="text-lg border bg-gray-100 hover:drop-shadow-md hover:border-slate-400 px-2 py-1 mr-2"
        >
          Google Search
        </button>
        <button
          type="button"
          className="text-lg border bg-gray-100 hover:drop-shadow-md hover:border-slate-400 px-2 py-1 ml-2"
        >
          I'm Feeling Lucky
        </button>
      </div>
    </div>
  );
};

export default Home;
