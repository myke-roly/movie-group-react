import React, { useContext, useEffect } from 'react';
import Container from 'containers/Container';
import { Link } from 'react-router-dom';
import { ContextSeries } from 'state/series';

const MoviesDetail = ({ match }) => {
  const { getSeriesDetail, seriesDetail } = useContext(ContextSeries);

  const { id } = match.params;
  useEffect(() => {
    if (!id) return;
    getSeriesDetail(id);
  }, [id]); //eslint-disable-line

  console.log(seriesDetail);
  return (
    <Container>
      {seriesDetail?.loading && 'Loading...'}
      {seriesDetail?.data && (
        <section className="wrapper__movie">
          <div className="movie-left">
            <img
              src={
                seriesDetail.data.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${seriesDetail.data.poster_path}`
                  : `https://image.tmdb.org/t/p/original/${seriesDetail.data.backdrop_path}`
              }
              alt="Background"
            />
          </div>
          <article className="movie__right">
            <h1 className="movie__right--title">{seriesDetail.data.name}</h1>
            <h2 className="movie__right--subtitle">{seriesDetail.data.tagline}</h2>
            <section className="movie__right--info">
              <section className="stars">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <small>{seriesDetail.data.vote_average}</small>
              </section>
              <span>
                {seriesDetail.data.original_language} - Seasons: <strong>{seriesDetail.data.number_of_seasons}</strong>{' '}
                Episodes: <strong>{seriesDetail.data.number_of_episodes}</strong>
              </span>
            </section>

            <div className="movie__right--genres">
              <h3>The Genres</h3>
              <ul>
                {seriesDetail.data.genres?.map((genre) => (
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
              <p>{seriesDetail.data.overview}</p>
            </section>

            <section className="movie__right--cast">
              <h3>The Cast</h3>
            </section>

            <section className="movie__right--btns">
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="btn btn-trailer">
                Trailer <i className="fab fa-youtube"></i>
              </a>
              <a
                href={seriesDetail.data.homepage}
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
