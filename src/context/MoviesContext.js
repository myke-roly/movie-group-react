import React, { useState, useEffect } from 'react';

export const ContextMovies = React.createContext();
ContextMovies.displayName = 'ContextMovies';

const MoviesContext = props => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=bf7a0d7e84fbc649f8d6f2819491a0d6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pagination}`
      const response = await fetch(url);
      const data = await response.json();
      if (!data) return;

      setMovies(data.results);
      setLoading(false);
    };

    fetchApi();
  }, [pagination]);

  const nextPage = () => setPagination(pagination+1);
  const prevPage = () => setPagination(pagination-1);
  console.log(process.env.REACT_APP_URL);
  
  return (
    <ContextMovies.Provider value={{
      loading: loading,
      movies: movies,
      nextPage: nextPage,
      prevPage: prevPage
    }}>
      {props.children}
    </ContextMovies.Provider>
  )
}

export default MoviesContext;