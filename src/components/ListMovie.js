import React, { useContext } from 'react';
import Movie from './Movie';
import Loading from '../containers/Loading';

//context
import { ContextMovies } from '../context/MoviesContext';

const ListMovie = ({ getCurrent }) => {

  const contextMovies = useContext(ContextMovies);
  const { movies, loading } = contextMovies;

  return (
    <div>
      {loading && <Loading />}
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
    </div>
  );
};

export default ListMovie;
