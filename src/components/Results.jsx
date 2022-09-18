import React ,{useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {Loading} from './Loading';
import  {useResultContext}  from '../Context/ResultContextProvider';

export const Results = () => {
  const {getResult, result, isLoading, searchTerm, setSearchTerm} = useResultContext();
  const location = useLocation();
  console.log(location.pathname);    
    useEffect(() => {
        if(location.pathname === '/videos') {
            getResult(`/search/q=${searchTerm} videos`);
        }
        else{
            getResult(`${location.pathname}/q=${searchTerm}&num=40`);
        }
        //eslint-disable-next-line
    },[searchTerm, location.pathname]);

    if(isLoading)return <Loading/>

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {result.results?.map(({link,title,description}, index)=>(
                        <div key={index} className="md:w-full w-full">
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-sm">
                                    {link.length > 30 ? link.substring(0,30) : link}
                                </p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                                <p className="text-xs dark:text-gray-400 text-gray-900 w-3/5">
                                    {description && description}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            );
        case '/image':
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {result?.image_results?.map(({image, link: {href, title}}, index)=>(
                        <a className="p-5" href={href} key={index} target="_blank" rel="noreferrer">
                            <img src={image?.src} alt={title} loading='lazy' width="250px" height="150px"/>
                            <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
                        </a>
                    ))}
                </div>
            );
        case '/videos':
            return 'videos';
        case '/news':
            return 'news';
    
        default:
            return 'ERROR!';
    }
   

}
