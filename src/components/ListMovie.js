import React from 'react';
import Movie from './Movie';
import Loading from './Loading';

const ListMovie = ({getCurrent}) => {

  const [loading, setLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  
  React.useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=bf7a0d7e84fbc649f8d6f2819491a0d6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const data = await response.json();
      if(!data) return;

      setMovies(data.results);
      setLoading(false)
    }
    
    fetchApi();
  }, [])

  return(
  <>
    {loading && <Loading />}
    <div className="wrapper-movies">

    {movies.map(movie => (
      <Movie key={movie.id}
        id={movie.id} 
        title={movie.title}
        url={movie.poster_path}
        getCurrent={getCurrent}
      />
    ))}
    </div>
    </>
  )
}

export default ListMovie;