import React, { useContext } from 'react';
import ListMovie from '../components/ListMovie';
import { ContextMovies } from '../context/MoviesContext';

const Discover = () => {
  const contextMovies = useContext(ContextMovies);
  const { movies } = contextMovies;

  return <ListMovie movies={movies} title="Discover Movies" />;
};

export default Discover;
