import React, { useContext, useEffect } from 'react';
import { ContextMovies } from '../context/MoviesContext';
import Container from '../containers/Container';

const DetailMovie = type => {
  const { current} = useContext(ContextMovies);

  const [movie, setMovie] = React.useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      if (!current) return;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${current}?api_key=bf7a0d7e84fbc649f8d6f2819491a0d6&language=en-US`
      );
      const data = await response.json();

      if (response.status !== 200) return;
      setMovie(data);
    };

    fetchApi();
  }, [current]);

  return (
    <Container>
      <section className="wrapper__movie">
        <img
          src={current ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : ''}
          alt={movie.title}
        />
        <article>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <button>Trailer</button>
        </article>
      </section>
    </Container>
  );
};

export default DetailMovie;
