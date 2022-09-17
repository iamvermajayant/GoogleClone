import React ,{useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {Loading} from './Loading';
import  {useResultContext}  from '../Context/ResultContextProvider';

export const Results = () => {
  const {getResult, result, isLoading, searchTerm, setSearchTerm} = useResultContext();
  const location = useLocation();
  //console.log(location);    
    useEffect(() => {
        getResult('/search/q=indeed&num=40');
    },[])

    if(isLoading)return <Loading/>

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {result.results?.map(({link,title,description}, index)=>(
                        <div key={index} className="md:w-2/5 w-full">
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-sm">
                                    {link.length > 30 ? link.substring(0,30) : link}
                                </p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                                <p className="text-xs dark:text-gray-400 text-gray-900">
                                    {description && description}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            );
        case '/images':
            return 'images';
        case '/videos':
            return 'videos';
        case '/news':
            return 'news';
    
        default:
            return 'ERROR!';
    }
   

}
