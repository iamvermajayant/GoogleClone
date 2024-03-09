import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import Home from './Home';
import { Results } from './Results';
//import Search from './Search';

export const Routing = ({darkTheme, setDarkTheme}) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/home'/>}/>
      {["/search", "/image", "/news", "/videos"].map(path =>(
        <Route path={path} key={path} element={<Results/>}/>
      ))}
      <Route path="/home" element={<Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />}/>
    </Routes>
  )
}
