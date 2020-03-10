import React from 'react';
import * as TYPES from '../types/types';

const useMovies = (state, action) => {
  switch (action.type) {
    case TYPES.SHOW_LIST_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case TYPES.SHOW_GENRES_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case TYPES.SHOW_SEARCH_MOVIE:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case TYPES.SHOW_ERROR:
      return { ...state, error: 'Not movies with this Genre' };
    case TYPES.SHOW_NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case TYPES.SHOW_PREV_PAGE:
      return { ...state, page: state.page - 1 };
    default:
      return state;
  }
};

export default useMovies;