import React, { useState, createContext, useEffect, useReducer } from 'react';
import API from 'api/tmdbApi';
import * as types from './types';
import { seriesReducer } from './reducer';

export const ContextSeries = createContext();
const SeriesContext = ({ children }) => {
  const initialState = {
    series: {},
    seriesDetail: {},
  };

  const [state, dispatch] = useReducer(seriesReducer, initialState);

  const getSeries = () => {
    const url = `/discover/tv?api_key=bf7a0d7e84fbc649f8d6f2819491a0d6&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;

    dispatch({ type: types.REQUEST_SERIES });

    API(url).then((res) => {
      dispatch({ type: types.GET_SERIES, payload: res.data.results });
    });
  };

  const getSeriesDetail = (id) => {
    const url = `/tv/${id}?api_key=bf7a0d7e84fbc649f8d6f2819491a0d6`;

    dispatch({ type: types.REQUEST_SERIES_DETAIL });

    API(url).then((res) => {
      dispatch({ type: types.GET_SERIES_DETAIL, payload: res.data });
    });
  };

  return (
    <ContextSeries.Provider
      value={{
        series: state.series,
        seriesDetail: state.seriesDetail,
        getSeries,
        getSeriesDetail,
      }}
    >
      {children}
    </ContextSeries.Provider>
  );
};

export default SeriesContext;
