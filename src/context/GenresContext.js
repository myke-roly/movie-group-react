import React, {createContext, useState, useEffect} from 'react'

export const ContextGenres = createContext();
const GenresContext = props => {

  const [genre, setGenre] = useState(null);
  const [genresMovies, setGenresMovies] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=bf7a0d7e84fbc649f8d6f2819491a0d6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`
      const response = await fetch(url);
      const data = await response.json();
      if (!data) return;

      setGenresMovies(data.results);
    };

    fetchApi();
  }, [genre]);


  return (
    <ContextGenres.Provider value={{
      genresMovies: genresMovies,
      genre: genre,
      getGenre: (query) => setGenre(query)
    }}>
      {props.children}
    </ContextGenres.Provider>
  )
}

export default GenresContext;