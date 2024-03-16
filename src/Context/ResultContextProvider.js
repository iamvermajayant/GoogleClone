import React from 'react';
import {useState, useContext, createContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
// eslint-disable-next-line
import {makeAPICall, makeWebAPICall} from './makeAPICall';

const ResultContext = createContext();

export const ResultContextProvider = ({children}) => {
    const [resultweb, setResultWeb] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [imageResult, setImageResult] = useState([]);

    // useEffect(() =>{
    //     localStorage.setItem('searchItem', JSON.stringify(searchTerm));
    // },[searchTerm])

    // useEffect(() =>{
    //     // const items
    //     setSearchTerm(JSON.parse(window.localStorage.getItem('searchItem')));
    // },[])

    const Navigate = useNavigate();

    useEffect(()=>{
        if(searchTerm === ''){
            Navigate('/home');
            setImageResult([]);
        }
        // eslint-disable-next-line
    }, [])

   
    

    
    const updateImageSearchResults = async (searchTerm) => {
        try {
            const response = await makeAPICall(searchTerm);
            console.log(response.results);
            setImageResult(response.results);
            // Handle response data as needed
        } catch (error) {
            console.error(error);
        }
    };


    const updateSearchResults = async (query) => {
        setIsLoading(true);
        setSearchTerm(query);
        try {
          const webResults = await makeWebAPICall(query);
          setResultWeb(webResults);
        } catch (error) {
          console.error(error);
        }
        setIsLoading(false);
      };
  

    console.log(searchTerm);
    
    
    return (
        <ResultContext.Provider value={{searchTerm , imageResult, updateSearchResults, updateImageSearchResults, setIsLoading, isLoading, resultweb, setSearchTerm}}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);