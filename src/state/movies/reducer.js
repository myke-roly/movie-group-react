import * as TYPES from '../types';

const useMovies = (state, action) => {
  switch (action.type) {
    case TYPES.SHOW_LIST_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case TYPES.SHOW_GENRES_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case TYPES.SHOW_SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case TYPES.SHOW_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case TYPES.SHOW_ERROR:
      return { ...state, error: 'Not movies' };
    case TYPES.SHOW_NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case TYPES.SHOW_PREV_PAGE:
      return { ...state, page: state.page - 1 };
    default:
      return state;
  }
};

export default useMovies;