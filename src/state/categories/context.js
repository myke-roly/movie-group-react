import React, { useState, useEffect } from 'react';

export const ContextCategories = React.createContext();

const CategoriesContext = (props) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=bf7a0d7e84fbc649f8d6f2819491a0d6&language=en-US'
      );
      const data = await response.json();
      setGenres(data.genres);
    };

    fetchApi();
  }, []);

  return <ContextCategories.Provider value={{ genres: genres }}>{props.children}</ContextCategories.Provider>;
};

export default CategoriesContext;
