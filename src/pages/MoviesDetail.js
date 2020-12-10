import React, { useContext, useEffect } from 'react';
import Container from 'containers/Container';
import { ContextMovies } from 'state/movies/';
import { Link } from 'react-router-dom';
import LoaderSpinner from 'components/Loader';

const MoviesDetail = ({ match }) => {
  const { getDetailMovie, movieDetail } = useContext(ContextMovies);

  const { id } = match.params;
  useEffect(() => {
    if (!id) return;
    getDetailMovie(id);
  }, [id]); //eslint-disable-line

  console.log(movieDetail);

  return (
    <Container>
      {movieDetail.loading && <LoaderSpinner />}
      {movieDetail.data && (
        <section className="wrapper__movie">
          <div className="movie-left">
            <img
              src={
                movieDetail.data.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${movieDetail.data.poster_path}`
                  : `https://image.tmdb.org/t/p/original/${movieDetail.data.backdrop_path}`
              }
              alt={movieDetail.data.title}
            />
          </div>
          <article className="movie__right">
            <h1 className="movie__right--title">{movieDetail.data.title}</h1>
            <h2 className="movie__right--subtitle">{movieDetail.data.tagline}</h2>
            <section className="movie__right--info">
              <section className="stars">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <small>{movieDetail.data.vote_average}</small>
              </section>
              <span>
                {movieDetail.data.original_language} / {movieDetail.data.runtime} min. / {movieDetail.data.release_date}
              </span>
            </section>

            <div className="movie__right--genres">
              <h3>The Genres</h3>
              <ul>
                {movieDetail.data.genres?.map((genre) => (
                  <li key={genre.id}>
                    <Link to={`/genres/${genre.id}`}>
                      <i className="fas fa-genderless"></i> {genre.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <section className="movie__right--desc">
              <h3>The Synopsis</h3>
              <p>{movieDetail.data.overview}</p>
            </section>

            <section className="movie__right--cast">
              <h3>The Cast</h3>
            </section>

            <section className="movie__right--btns">
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="btn btn-trailer">
                Trailer <i className="fab fa-youtube"></i>
              </a>
              <a
                href={movieDetail.data.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-homepage"
              >
                web site <i className="fas fa-link"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="btn btn-imdb">
                imdb <i className="fab fa-imdb"></i>
              </a>
            </section>
          </article>
        </section>
      )}
    </Container>
  );
};

export default MoviesDetail;
