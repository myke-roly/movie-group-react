import React, { useContext } from 'react';

import { ContextSearch } from '../context/SearchContext';
import ListMovie from './ListMovie';

const SearchMovie = () => {
  const contextSearch = useContext(ContextSearch);
  const { movies, query } = contextSearch;

  return <ListMovie movies={movies} title="Search Movie" subtitle={query} />
};

export default SearchMovie;
