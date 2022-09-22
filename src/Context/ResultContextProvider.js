import React from 'react';
import {useState, useContext, createContext, useEffect} from 'react';


const ResultContext = createContext();

const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('lpu');
    
    useEffect(() =>{
        localStorage.setItem('searchItem', JSON.stringify(searchTerm));
    },[searchTerm])

    useEffect(() =>{
        // const items
        setSearchTerm(JSON.parse(window.localStorage.getItem('searchItem')));
    },[])


    const getResult = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseURL}${type}`,{
            method: 'GET',
            
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'IN',
                'X-RapidAPI-Key': process.env.REACT_APP_KEY,
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
              }
        })

        const data = await response.json();
        if(type.includes('/news')){
            setResult(data.entries);
            console.log(data.entries);
        }
        else if(type.includes('/image')){
            setResult(data.image_results);
            console.log(data.image_results);
        }
        else {
            setResult(data.results);
            console.log(data.results);
        }
        setIsLoading(false);
    }
    return (
        <ResultContext.Provider value={{searchTerm , getResult, isLoading, result, setSearchTerm}}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);