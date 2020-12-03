import React, { useReducer } from 'react';
import API from '../api/tmdbApi';
import useMovies from './reducer';
import * as TYPES from '../types';

export const ContextMovies = React.createContext();
ContextMovies.displayName = 'ContextMovies';

const MoviesContext = (props) => {
  const initialState = {
    loading: true,
    error: null,
    movies: [],
    movie: {},
    page: 1,
  };

  const [state, dispatch] = useReducer(useMovies, initialState);

  const dicoverMovies = async () => {
    const response = await API('/discover/movie', { page: state.page });
    console.log(response);
    dispatch({ type: TYPES.SHOW_LIST_MOVIES, payload: response.data.results });
  };

  const genresMovies = async (genre) => {
    if (!genre) return;
    const response = await API('/discover/movie', { with_genres: genre, page: state.page });
    console.log(response);
    dispatch({ type: TYPES.SHOW_GENRES_MOVIES, payload: response.data.results });
  };

  const searchMovies = async (query) => {
    if (!query) return;
    const response = await API('/search/movie', { query: query, page: state.page });
    console.log(response);
    dispatch({ type: TYPES.SHOW_SEARCH_MOVIES, payload: response.data.results });
  };

  const detailMovie = async (current) => {
    const response = await API(`/movie/${current}`);
    console.log(response.data);
    dispatch({ type: TYPES.SHOW_MOVIE, payload: response.data });
  };

  const nextPage = () => dispatch({ type: TYPES.SHOW_NEXT_PAGE });
  const prevPage = () => dispatch({ type: TYPES.SHOW_PREV_PAGE });

  return (
    <ContextMovies.Provider
      value={{
        loading: state.loading,
        error: state.error,
        page: state.page,
        movies: state.movies,
        movie: state.movie,
        moviesDiscover: dicoverMovies,
        moviesGenres: genresMovies,
        searchMovies: searchMovies,
        detailMovie: detailMovie,
        nextPage: nextPage,
        prevPage: prevPage,
      }}
    >
      {props.children}
    </ContextMovies.Provider>
  );
};

export default MoviesContext;
