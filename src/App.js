import React, {useState} from 'react';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {Routing} from './components/Routing';
import {useLocation} from "react-router-dom";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const location = useLocation();
  //console.log(location.pathname);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className=" bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        {location.pathname === '/Home' ? '' : <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}
        <Routing darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        {location.pathname === '/Home' ? '' : <Footer/>}
      </div>
    </div>
  );
};

export default App;
