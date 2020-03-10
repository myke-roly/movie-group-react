import React, { useContext, useEffect } from 'react';
import ListMovie from './ListMovie';
// import { ContextGenres } from '../context/GenresContext';
import { ContextMovies } from '../context/MoviesContext';
import { ContextCategories } from '../context/CategoriesContext';

const Genres = () => {
  const contextMovies = useContext(ContextMovies);
  const contextCategories = useContext(ContextCategories);

  const { moviesGenres, genre, loading, error, movies, page } = contextMovies;
  const { genres } = contextCategories;

  useEffect(() => {
    moviesGenres(genre, page);
  }, [genre, page]);

  let subtitle = genres.find(g => g.id === genre);

  return (
    <ListMovie
      movies={movies}
      loading={loading}
      error={error}
      title="Genres"
      subtitle={genre ? subtitle.name : ''}
    />
  );
};

export default Genres;
