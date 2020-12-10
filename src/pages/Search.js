import React, { useContext, useEffect } from 'react';

// import { ContextSearch } from 'context/SearchContext';
import { ContextMovies } from 'state/movies';
import ListItems from 'components/ListItems';

const Search = ({ match }) => {
  const { id } = match.params;
  const contextSearch = useContext(ContextMovies);
  const {
    getSearchMovies,
    searchMovies: { data, loading, error },
  } = contextSearch;

  useEffect(() => {
    getSearchMovies(id);
  }, [id]); //eslint-disable-line

  return <ListItems data={data} loading={loading} type="movies" error={error} title="Search Movies" subtitle={id} />;
};

export default Search;
