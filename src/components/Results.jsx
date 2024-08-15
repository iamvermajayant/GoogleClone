import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//import ReactPlayer from "react-player";
import { Loading } from "./Loading";
import { useResultContext } from "../Context/ResultContextProvider";

export const Results = () => {
  //eslint-disable-next-line
  const {
    resultweb,
    isLoading,
    imageResult,
    searchTerm,
    //eslint-disable-next-line
    setSearchTerm,
    updateImageSearchResults,
    updateNewsSearchResults,
    newsResult,
  } = useResultContext();
  const location = useLocation();
  console.log(location.pathname);

  console.log(resultweb);

  useEffect(() => {
    updateNewsSearchResults(searchTerm);
    updateImageSearchResults(searchTerm);
    console.log("hi");
    //eslint-disable-next-line
  }, [searchTerm]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-36 px-9 pt-9">
          {resultweb?.map(
            ({ title, snippet, url, domain, position }, index) => (
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
            )
          )}
        </div>
      );

    case "/image":
      return (
        <div className="flex flex-wrap justify-center items-center pt-5">
          {imageResult?.map(({ title, image, url, thumbnail }, index) => (
            <a
              className="p-5"
              href={url}
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={thumbnail}
                alt={title}
                loading="lazy"
                width="275px"
                height="183px"
                style={{ height: "183px" }}
              />
              <p className="sm:w-72 w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );

    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-36 items-center pt-9">
          {newsResult?.map(
            (
              { title, link, photo_url, source_url, published_datetime_utc },
              index
            ) => (
              <div key={title} className="md:w-full w-full sm:w-full">
                <a
                  href={link?.[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <p className="text-lg dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                </a>
                <div className="flex-gap-4">
                  <a
                    href={source_url?.href}
                    className="hover:underline hover:text-blue-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {source_url?.href}
                  </a>
                </div>
                <p className="text-sm mt-2">{published_datetime_utc}</p>
              </div>
            )
          )}
        </div>
      );

    default:
      return "ERROR!";
  }
};
