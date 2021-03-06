import * as TYPES from './types';

const useMovies = (state, action) => {
  switch (action.type) {
    case TYPES.REQUEST_LIST_MOVIES:
      return {
        ...state,
        movies: {
          data: null,
          loading: true,
          error: null,
        },
      };
    case TYPES.SHOW_LIST_MOVIES:
      return {
        ...state,
        movies: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case TYPES.REQUEST_GENRES_MOVIES:
      return {
        ...state,
        moviesByGenre: {
          data: null,
          loading: true,
          error: null,
        },
      };
    case TYPES.SHOW_GENRES_MOVIES:
      return {
        ...state,
        moviesByGenre: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case TYPES.REQUEST_SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: {
          data: null,
          loading: true,
          error: null,
        },
      };
    case TYPES.SHOW_SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case TYPES.REQUEST_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: {
          data: null,
          loading: true,
        },
      };
    case TYPES.GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: {
          data: action.payload,
          loading: false,
        },
      };
    case TYPES.SHOW_NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case TYPES.SHOW_PREV_PAGE:
      return { ...state, page: state.page - 1 };
    default:
      return state;
  }
};

export default useMovies;
