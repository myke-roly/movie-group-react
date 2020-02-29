import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import imgNotFound from '../utils/not-found.jpg';
import { ContextMovies } from '../context/MoviesContext';

const Movie = ({ title, url, id }) => {
  const { getCurrent } = useContext(ContextMovies);

  return (
    <Link to={`/detail-movie/${id}`}>
      <section className="wrapper__movies-item" onClick={() => getCurrent(id)}>
        <img
          src={url ? `https://image.tmdb.org/t/p/original/${url}` : imgNotFound}
          alt={title}
        />
        <h2>{title} </h2>
        <i className="far fa-heart"></i>
      </section>
    </Link>
  );
};

export default Movie;
