import React, { useContext } from 'react';
import Movie from './Movie';
import Loading from '../containers/Loading';
import Container from '../containers/Container';
import Pagination from '../containers/Pagination';

const ListMovie = ({ movies, getCurrent }) => {
  return (
    <Container>
      <div className="wrapper-movies">
        {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            url={movie.poster_path}
            getCurrent={getCurrent}
          />
        ))}
      </div>
      <Pagination />
    </Container>
  );
};

export default ListMovie;
