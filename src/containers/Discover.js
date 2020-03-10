import React, { useContext, useEffect } from 'react';
import ListMovie from '../components/ListMovie';
import { ContextMovies } from '../context/MoviesContext';

const Discover = () => {
  const contextMovies = useContext(ContextMovies);
  const { movies, moviesDiscover, loading, error, page } = contextMovies;

  useEffect(() => {
    moviesDiscover(page);
  }, [page]);

  return (
    <ListMovie
      movies={movies}
      loading={loading}
      error={error}
      title="Discover Movies"
    />
  );
};

export default Discover;
