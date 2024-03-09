import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Loading } from "./Loading";
import { useResultContext } from "../Context/ResultContextProvider";

export const Results = () => {
  //eslint-disable-next-line
  const { getResult, result, isLoading, searchTerm, setSearchTerm } =
    useResultContext();
  const location = useLocation();
  console.log(location.pathname);

  console.log(result);

  if(location.pathname === '/image'){
    console.log("running");
  }


  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-36 px-9 pt-9">
          {result?.map(({ title, snippet, url, domain, position }, index) => (
            <div key={index} className="md:w-full w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <p className="text-sm">{snippet}</p>
                <p className="text-sm dark:text-gray-400 text-gray-900 w-3/5">
                  {domain}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
      
    default:
      return "ERROR!";
  }
};
