import React, { useContext, useEffect } from 'react';
import ListItems from './ListItems';
// import { ContextGenres } from '../context/GenresContext';
import { ContextMovies } from '../context/MoviesContext';
import { ContextCategories } from '../context/CategoriesContext';

const Genres = ({ match }) => {
  const contextMovies = useContext(ContextMovies);
  const contextCategories = useContext(ContextCategories);

  const { moviesGenres, loading, error, movies, page } = contextMovies;
  const { genres } = contextCategories;

  const { id } = match.params;
  useEffect(() => {
    moviesGenres(id, page);
  }, [id, page]); //eslint-disable-line

  let genre = genres.find((g) => g.id === parseInt(id));
  return <ListItems data={movies} loading={loading} error={error} title="Genres Movies" subtitle={genre ? genre.name : ''} />;
};

export default Genres;
