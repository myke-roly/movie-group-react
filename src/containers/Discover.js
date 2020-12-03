import React, { useContext, useEffect } from 'react';
import ListItems from '../components/ListItems';
import { ContextMovies } from '../context/MoviesContext';

const Discover = () => {
  const contextMovies = useContext(ContextMovies);
  const { movies, moviesDiscover, loading, error, page } = contextMovies;

  useEffect(() => {
    moviesDiscover(page);
  }, [page]); //eslint-disable-line

  return <ListItems data={movies} loading={loading} error={error} title="Discover Movies" />;
};

export default Discover;
