import * as types from './types';

export const seriesReducer = (state, action) => {
  switch (action.type) {
    case types.REQUEST_SERIES:
      return {
        ...state,
        series: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case types.GET_SERIES:
      return {
        ...state,
        series: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case types.REQUEST_SERIES_DETAIL:
      return {
        ...state,
        seriesDetail: {
          loading: true,
          error: null,
          data: null,
        },
      };
    case types.GET_SERIES_DETAIL:
      return {
        ...state,
        seriesDetail: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    default:
      return state;
  }
};
