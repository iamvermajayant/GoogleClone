import React, { useEffect, useState } from "react";
import profilePicture from "../images/profile.jpeg";
import GoogleLogo from "../images/google.png";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useResultContext } from "../Context/ResultContextProvider";

const Home = ({ darkTheme, setDarkTheme }) => {
  const [searchText, setSearchText] = useState("");
  const {updateSearchResults, setSearchTerm, setIsLoading} = useResultContext()
  const [debouncedValue] = useDebounce(searchText, 1000);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedValue) {
        try {
          const options = {
            method: 'GET',
            url: 'https://real-time-web-search.p.rapidapi.com/search',
            params: {
              q: debouncedValue,
              limit: '100'
            },
            headers: {
              'X-RapidAPI-Key': '81fa470f53msh772893b2a5d3c14p1132d1jsn6ac62985573a',
              'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
            }
          };

          Navigate("/search");
          setIsLoading(true);
          const response = await axios.request(options);
          console.log("runing again again")
          console.log(response.data.data);
          updateSearchResults(response.data.data);
          setSearchTerm(debouncedValue);
          setIsLoading(false);

        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
   
  }, [debouncedValue]);


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
          onChange={(e) => setSearchText(e.target.value)}
          className="sm:w-2/5 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg -mt-20"
        />
      </div>
      <div className="flex flex-wrap w-full justify-center items-center mt-10">
        <Link to="/Home">
          <button
            type="button"
            className="text-lg border bg-gray-100 hover:drop-shadow-md hover:border-slate-400 px-2 py-1 mr-2  dark:text-gray-200 dark:bg-royal-blue"
          >
            Google Search
          </button>
        </Link>
        <button
          type="button"
          className="text-lg border bg-gray-100 hover:drop-shadow-md hover:border-slate-400 px-2 py-1 ml-2 dark:text-gray-200 dark:bg-royal-blue"
        >
          I'm Feeling Lucky
        </button>
      </div>
      <div className="flex flex-wrap w-full justify-center items-center">
        <p className="mt-48 ">Google Inc</p>
      </div>
      <div className="flex flex-wrap w-full justify-end items-center mr-8">
        <button
          type="button"
          onClick={(e) => setDarkTheme(!darkTheme)}
          className="bg-royal-blue dark:text-gray-900 dark:bg-white border rounded-full px-2 py-2 hover:shadow-lg text-lg"
        >
          {darkTheme ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
};

export default Home;
