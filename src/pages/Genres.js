import React, { useContext, useEffect } from 'react';
import ListItems from 'components/ListItems';

// import { ContextGenres } from 'context/GenresContext';
import { ContextMovies } from 'state/movies';
import { ContextCategories } from 'state/categories';

const Genres = ({ match }) => {
  const contextMovies = useContext(ContextMovies);
  const contextCategories = useContext(ContextCategories);

  const { getMoviesByGenre, moviesByGenre, page } = contextMovies;
  const { genres } = contextCategories;

  const { id } = match.params;
  useEffect(() => {
    getMoviesByGenre(id, page);
  }, [id, page]); //eslint-disable-line

  let genre = genres.find((g) => g.id === parseInt(id));
  return (
    <ListItems
      data={moviesByGenre.data}
      loading={moviesByGenre.loading}
      error={moviesByGenre.error}
      title="Genres Movies"
      subtitle={genre ? genre.name : ''}
    />
  );
};

export default Genres;
