import React, { useState, useEffect, createContext } from 'react';
import API from 'api/tmdbApi';

export const ContextCategories = createContext();

const CategoriesContext = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const url = '/genre/movie/list?api_key=bf7a0d7e84fbc649f8d6f2819491a0d6&language=en-US';

  useEffect(() => {
    API(url).then((res) => {
      setGenres(res.data.genres);
    });
  }, []);

  return <ContextCategories.Provider value={{ genres }}>{children}</ContextCategories.Provider>;
};

export default CategoriesContext;
