import React from 'react';

const DetailMovie = ({current}) => {
  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    if(!current) return;
    const fetchApi = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${current}?api_key=bf7a0d7e84fbc649f8d6f2819491a0d6&language=en-US`);
      const data = await response.json();
      if(!data) return;
      setMovie(data);
    }
    
    fetchApi()
  }, [current])

  console.log(movie.backdrop_path)

  return (
    <div className="container">
      <section className="movie">
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
        <article>
          <p>{movie.overview}</p>
          <button>Trailer</button>
        </article>
      </section>
    </div>
  )
}

export default DetailMovie;