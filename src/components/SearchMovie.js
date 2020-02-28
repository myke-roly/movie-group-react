import React, { useContext } from 'react';

import { ContextSearch } from '../context/SearchContext';
import ListMovie from './ListMovie';

const SearchMovie = ({ getCurrent }) => {
  const contextSearch = useContext(ContextSearch);
  const { movies, query } = contextSearch;

  return (
    <>{!query ? '' : <ListMovie getCurrent={getCurrent} movies={movies} />}</>
  );
};

export default SearchMovie;
