import React from 'react';
import Movie from './Movie';
import Container from '../containers/Container';
import Pagination from '../containers/Pagination';

const ListMovie = ({ movies, title, subtitle }) => {
  return (
    <Container title={title} subtitle={subtitle}>
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
