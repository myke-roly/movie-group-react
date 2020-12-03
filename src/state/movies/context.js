import React, { useReducer, createContext } from 'react';
import API from 'api/tmdbApi';
import useMovies from './reducer';
import * as TYPES from '../types';

export const ContextMovies = createContext();
ContextMovies.displayName = 'ContextMovies';

const MoviesContext = (props) => {
  const initialState = {
    loading: false,
    error: null,
    data: null,
  };

  const states = {
    movies: initialState,
    moviesByGenre: initialState,
    searchMovies: initialState,
    movie: initialState,
    page: 1,
  };

  const [state, dispatch] = useReducer(useMovies, states);

  const getDicoverMovies = async () => {
    dispatch({ type: TYPES.REQUEST_LIST_MOVIES });

    const response = await API('/discover/movie', { page: state.page });
    dispatch({ type: TYPES.SHOW_LIST_MOVIES, payload: response.data.results });
  };

  const getMoviesByGenre = async (genre) => {
    if (!genre) return;
    dispatch({ type: TYPES.REQUEST_GENRES_MOVIES });

    const response = await API('/discover/movie', { with_genres: genre, page: state.page });
    dispatch({ type: TYPES.SHOW_GENRES_MOVIES, payload: response.data.results });
  };

  const getSearchMovies = async (query) => {
    dispatch({ type: TYPES.REQUEST_SEARCH_MOVIES });

    if (!query) return;
    const response = await API('/search/movie', { query: query, page: state.page });
    dispatch({ type: TYPES.SHOW_SEARCH_MOVIES, payload: response.data.results });
  };

  const getDetailMovie = async (current) => {
    const response = await API(`/movie/${current}`);
    dispatch({ type: TYPES.SHOW_MOVIE, payload: response.data });
  };

  const nextPage = () => dispatch({ type: TYPES.SHOW_NEXT_PAGE });
  const prevPage = () => dispatch({ type: TYPES.SHOW_PREV_PAGE });

  return (
    <ContextMovies.Provider
      value={{
        page: state.page,
        movies: state.movies,
        moviesByGenre: state.moviesByGenre,
        searchMovies: state.searchMovies,
        movie: state.movie,
        getDetailMovie,
        getDicoverMovies,
        getMoviesByGenre,
        getSearchMovies,
        nextPage,
        prevPage,
      }}
    >
      {props.children}
    </ContextMovies.Provider>
  );
};

export default MoviesContext;
