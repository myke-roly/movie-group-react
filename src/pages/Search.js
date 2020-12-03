import React, { useContext, useEffect } from 'react';

// import { ContextSearch } from '../context/SearchContext';
import { ContextMovies } from '../context/MoviesContext';
import ListItems from '../components/ListItems';

const Search = ({ match }) => {
  const contextSearch = useContext(ContextMovies);
  const { searchMovies, movies, loading, error } = contextSearch;

  const { id } = match.params;
  useEffect(() => {
    searchMovies(id);
  }, [id]); //eslint-disable-line

  return <ListItems data={movies} loading={loading} error={error} title="Search Movies" subtitle={id} />;
};

export default Search;
