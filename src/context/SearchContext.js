import React, { createContext, useState, useEffect } from 'react';

export const ContextSearch = createContext();
const SearchContext = ({ children }) => {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      if(!query) return;      
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=bf7a0d7e84fbc649f8d6f2819491a0d6&language=en-US&query=${query}&page=1&include_adult=false`);
      const data = await response.json();
      if(!data.lenght === 0) return;
  
      setMovie(data.results);
    }

    fetchApi()
  }, [query]);

  return <ContextSearch.Provider value={{
    getQuery: (q) => setQuery(q),
    query: query,
    movie: movie 
  }}>
    {children}
  </ContextSearch.Provider>;
};

export default SearchContext;
