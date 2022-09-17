import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import { Results } from './Results';
import Search from './Search';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/search'/>}/>
      {["/search", "/images", "/news", "/videos"].map(path =>(
        <Route path={path} element={<Results/>}/>
      ))}
    </Routes>
  )
}
