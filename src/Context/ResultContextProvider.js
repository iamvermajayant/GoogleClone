import React from 'react';
import {useState, useContext, createContext} from 'react';


const ResultContext = createContext();

const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResult = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseURL}${type}`,{
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'IN',
                'X-RapidAPI-Key': '81fa470f53msh772893b2a5d3c14p1132d1jsn6ac62985573a',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
              }
        })

        const data = await response.json();
        console.log(data);
        setResult(data);
        setIsLoading(false);
    }
    return (
        <ResultContext.Provider value={{searchTerm , getResult, isLoading, result, setSearchTerm}}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);