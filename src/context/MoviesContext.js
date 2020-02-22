import React, { useState, useEffect } from 'react';

export const ContextMovies = React.createContext();
ContextMovies.displayName = 'ContextMovies';
const MoviesContext = props => {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=bf7a0d7e84fbc649f8d6f2819491a0d6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      );
      const data = await response.json();
      if (!data) return;

      setMovies(data.results);
      setLoading(false);
    };

    fetchApi();
  }, []);

  return (
    <ContextMovies.Provider value={{
      loading: loading,
      movies: movies
    }}>
      {props.children}
    </ContextMovies.Provider>
  )
}

export default MoviesContext;