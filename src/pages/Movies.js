import React, { useContext, useEffect } from 'react';
import ListItems from 'components/ListItems';
import { ContextMovies } from 'state/movies';

const Movies = () => {
  const contextMovies = useContext(ContextMovies);
  const {
    movies: { data, loading, error },
    getDicoverMovies,
    page,
  } = contextMovies;

  useEffect(() => {
    getDicoverMovies(page);
  }, [page]); //eslint-disable-line

  return <ListItems data={data} loading={loading} error={error} title="Discover Movies" />;
};

export default Movies;
