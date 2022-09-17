import React from 'react';
import {Link} from  'react-router-dom';

export const Navbar = ({setDarkTheme, darkTheme}) => {
  return (
    <div className="p-5 pb-0 flex flex-warp sm:justify-between justify-center items-center border-b dark:border-gray-200 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
       <Link to="">
          <p className="text-2xl font-bold py-1 px-2 text-white bg-blue-500 rounded dark:bg-gray-500 dark:text-gray-900">
            Google 🔍
          </p>
       </Link>
       <button type="button" onClick={() => setDarkTheme(!darkTheme)}>click</button>
      </div>
    </div>
  )
}
