import React, { useContext, useEffect } from 'react';

// import { ContextSearch } from '../context/SearchContext';
import { ContextMovies } from '../context/MoviesContext';
import ListMovie from './ListMovie';

const SearchMovie = () => {
  const contextSearch = useContext(ContextMovies);
  const { searchMovies, movies, loading, error, query, page } = contextSearch;

  useEffect(() => {
    searchMovies(query, page);
  }, [query, page]);

  return (
    <ListMovie
      movies={movies}
      loading={loading}
      error={error}
      title="Search Movie"
      subtitle={query}
    />
  );
};

export default SearchMovie;
