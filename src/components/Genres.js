import React from 'react';
import ListMovie from './ListMovie';
import { ContextGenres } from '../context/GenresContext';
import { useContext } from 'react';
import {ContextCategories} from '../context/CategoriesContext';

const Genres = () => {
  const contextGenres = useContext(ContextGenres);
  const contextCategories = useContext(ContextCategories);
  
  const { genresMovies, genre} = contextGenres;
  const { genres } = contextCategories;

  let subtitle = genres.find(g => g.id === genre)

  return (
      <ListMovie movies={genresMovies} title="Genres" subtitle={genre ? subtitle.name : '' } />
  );
};

export default Genres;
