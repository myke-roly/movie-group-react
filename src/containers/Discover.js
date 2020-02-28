import React, {useContext} from 'react';
import ListMovie from '../components/ListMovie';
import { ContextMovies } from '../context/MoviesContext';

const Discover = ({ getCurrent }) => {
  const contextMovies = useContext(ContextMovies);
  const { movies, loading } = contextMovies;

  return <ListMovie movies={movies} getCurrent={getCurrent} />;
};

export default Discover;