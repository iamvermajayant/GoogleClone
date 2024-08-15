// import axios from "axios";

// export const makeAPICall = async (query) => {
//   console.log(query);
//   const options = {
//     method: "GET",
//     url: "https://duckduckgo-image-search.p.rapidapi.com/search/image",
//     params: { q: query },
//     headers: {
//       "X-RapidAPI-Key": "81fa470f53msh772893b2a5d3c14p1132d1jsn6ac62985573a",
//       "X-RapidAPI-Host": "duckduckgo-image-search.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const makeWebAPICall = async (query) => {
//   try {
//     const options = {
//       method: "GET",
//       url: "https://real-time-web-search.p.rapidapi.com/search",
//       params: {
//         q: query,
//         limit: "100",
//       },
//       headers: {
//         "X-RapidAPI-Key": process.env.REACT_APP_KEY,
//         "X-RapidAPI-Host": "real-time-web-search.p.rapidapi.com",
//       },
//     };

//     const response = await axios.request(options);
//     return response.data.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };


// export const makeNewsAPICall = async (query) => {
//   const options = {
//     method: "GET",
//     url: "https://real-time-news-data.p.rapidapi.com/search",
//     params: {
//       query: query,
//       country: "US",
//       lang: "en",
//     },
//     headers: {
//       "X-RapidAPI-Key": "81fa470f53msh772893b2a5d3c14p1132d1jsn6ac62985573a",
//       "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };



import axios from "axios";

const API_KEYS = {
  duckDuckGo: process.env.REACT_APP_DUCKDUCKGO_KEY,
  news: process.env.REACT_APP_NEWS_API_KEY,
  web: process.env.REACT_APP_WEB_API_KEY,
};

export const makeAPICall = async (query) => {
  const options = {
    method: "GET",
    url: "https://duckduckgo-image-search.p.rapidapi.com/search/image",
    params: { q: query },
    headers: {
      "X-RapidAPI-Key": API_KEYS.duckDuckGo,
      "X-RapidAPI-Host": "duckduckgo-image-search.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const makeWebAPICall = async (query) => {
  const options = {
    method: "GET",
    url: "https://real-time-web-search.p.rapidapi.com/search",
    params: {
      q: query,
      limit: "100",
    },
    headers: {
      "X-RapidAPI-Key": API_KEYS.web,
      "X-RapidAPI-Host": "real-time-web-search.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const makeNewsAPICall = async (query) => {
  const options = {
    method: "GET",
    url: "https://real-time-news-data.p.rapidapi.com/search",
    params: {
      query: query,
      country: "US",
      lang: "en",
    },
    headers: {
      "X-RapidAPI-Key": API_KEYS.news,
      "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

