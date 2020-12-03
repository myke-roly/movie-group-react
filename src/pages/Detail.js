import React, { useContext, useEffect } from 'react';
import Container from '../containers/Container';
import { ContextMovies } from '../context/MoviesContext';
import { Link } from 'react-router-dom';

const DetailMovie = ({ match }) => {
  const { detailMovie, movie, loading } = useContext(ContextMovies);

  const { id } = match.params;
  useEffect(() => {
    if (!id) return;
    detailMovie(id);
  }, [id]); //eslint-disable-line

  return (
    <Container>
      {loading && 'Loading...'}
      <section className="wrapper__movie">
        <div className="movie-left">
          <img
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
            }
            alt={movie.title}
          />
        </div>
        <article className="movie__right">
          <h1 className="movie__right--title">{movie.title}</h1>
          <h2 className="movie__right--subtitle">{movie.tagline}</h2>
          <section className="movie__right--info">
            <section className="stars">
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <small>{movie.vote_average}</small>
            </section>
            <span>
              {movie.original_language} / {movie.runtime} min. / {movie.release_date}
            </span>
          </section>

          <div className="movie__right--genres">
            <h3>The Genres</h3>
            <ul>
              {movie.genres
                ? movie.genres.map((genre) => (
                    <li key={genre.id}>
                      <Link to={`/genres/${genre.id}`}>
                        <i className="fas fa-genderless"></i> {genre.name}
                      </Link>
                    </li>
                  ))
                : ''}
            </ul>
          </div>

          <section className="movie__right--desc">
            <h3>The Synopsis</h3>
            <p>{movie.overview}</p>
          </section>

          <section className="movie__right--cast">
            <h3>The Cast</h3>
          </section>

          <section className="movie__right--btns">
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="btn btn-trailer">
              Trailer <i className="fab fa-youtube"></i>
            </a>
            <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="btn btn-homepage">
              web site <i className="fas fa-link"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="btn btn-imdb">
              imdb <i className="fab fa-imdb"></i>
            </a>
          </section>
        </article>
      </section>
    </Container>
  );
};

export default DetailMovie;
