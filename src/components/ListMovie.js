import React from 'react';
import Movie from './Movie';
import Container from '../containers/Container';
import Pagination from '../containers/Pagination';

const ListMovie = ({ movies, loading, error, title, subtitle }) => {
  return (
    <Container title={title} subtitle={subtitle}>
      {loading && 'Loading...'}
      {error && error}
      <div className="wrapper__movies">
        {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            url={movie.poster_path}
          />
        ))}
      </div>
      <Pagination />
    </Container>
  );
};

export default ListMovie;
