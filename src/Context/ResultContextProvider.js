import React from 'react';
import {useState, useContext, createContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const ResultContext = createContext();

export const ResultContextProvider = ({children}) => {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    
    useEffect(() =>{
        localStorage.setItem('searchItem', JSON.stringify(searchTerm));
    },[searchTerm])

    useEffect(() =>{
        // const items
        setSearchTerm(JSON.parse(window.localStorage.getItem('searchItem')));
    },[])

    const Navigate = useNavigate();

    useEffect(()=>{
        if(searchTerm === ''){
            Navigate('/home');
        }
        // eslint-disable-next-line
    }, [])




    const updateSearchResults = (results) => {
        setResult(results);
    };

    console.log(searchTerm);
    
    
    return (
        <ResultContext.Provider value={{searchTerm , updateSearchResults, setIsLoading, isLoading, result, setSearchTerm}}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);