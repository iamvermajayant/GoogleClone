import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Links } from "./Links";
import { useResultContext } from "../Context/ResultContextProvider";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm, updateSearchResults } = useResultContext();

  const [debouncedValue] = useDebounce(text, 1000);
  
  
  useEffect(() => {
    if (debouncedValue) {
      setSearchTerm(debouncedValue);
      updateSearchResults(debouncedValue);
    }
    //eslint-disable-next-line
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-42 md:ml-72 sm:mt-5 mt-3 md:mr-46">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search Google "
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => setText("")}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};
export default Search;
