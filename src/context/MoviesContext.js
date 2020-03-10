import React, { useState, useEffect, useReducer } from 'react';
import API from '../api/tmdbApi';
import useMovies from '../reducers/useMovies';
import * as TYPES from '../types/types';

export const ContextMovies = React.createContext();
ContextMovies.displayName = 'ContextMovies';

const MoviesContext = props => {
  
  const initialState = {
    loading: true,
    error: null,
    movies: [],
    page: 1
  };
  
  const [current, setCurrent] = useState('');
  const [genre, setGenre] = useState('');
  const [query, setQuery] = useState('')
  const [state, dispatch] = useReducer(useMovies, initialState);

  const moviesDiscover = async () => {
    const response = await API('/discover/movie', { page: state.page});
    console.log(response);
    dispatch({type: TYPES.SHOW_LIST_MOVIES, payload: response.data.results});
  }

  const moviesGenres = async (genre) => {
    if(!genre) return;
    const response = await API('/discover/movie', {with_genres: genre, page: state.page});
    console.log(response);
    dispatch({type: TYPES.SHOW_GENRES_MOVIES, payload: response.data.results});
  }

  const searchMovies = async (query) => {
    if(!query) return;
    const response = await API('/search/movie', {query: query, page: state.page});
    console.log(response);
    dispatch({type: TYPES.SHOW_SEARCH_MOVIE, payload: response.data.results});
  }

  const nextPage = () => dispatch({type: TYPES.SHOW_NEXT_PAGE});
  const prevPage = () => dispatch({type: TYPES.SHOW_PREV_PAGE});

  return (
    <ContextMovies.Provider
      value={{
        loading: state.loading,
        error: state.error,
        page: state.page,
        current: current,
        genre: genre,
        query: query,
        movies: state.movies,
        nextPage: nextPage,
        prevPage: prevPage,
        moviesDiscover: moviesDiscover,
        moviesGenres: moviesGenres,
        searchMovies: searchMovies,
        getCurrent: id => setCurrent(id),
        getQuery: query => setQuery(query),
        getGenre: genre => setGenre(genre)

      }}
    >
      {props.children}
    </ContextMovies.Provider>
  );
};

export default MoviesContext;
