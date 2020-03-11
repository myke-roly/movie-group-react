import React, { useContext, useEffect } from 'react';
import ListMovie from './ListMovie';
// import { ContextGenres } from '../context/GenresContext';
import { ContextMovies } from '../context/MoviesContext';
import { ContextCategories } from '../context/CategoriesContext';

const Genres = ({match}) => {
  const contextMovies = useContext(ContextMovies);
  const contextCategories = useContext(ContextCategories);

  const { moviesGenres, loading, error, movies, page } = contextMovies;
  const { genres } = contextCategories;
  
  const { id } = match.params;
  useEffect(() => {
    moviesGenres(id, page);
  }, [id, page]);
  
  let genre = genres.find(g => g.id === parseInt(id));
  return (
    <ListMovie
      movies={movies}
      loading={loading}
      error={error}
      title="Genres"
      subtitle={genre ? genre.name : ''}
    />
  );
};

export default Genres;
