import React, { useState, createContext, useEffect } from 'react';
import API from 'api/tmdbApi';

export const ContextSeries = createContext();
const SeriesContext = ({ children }) => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const url = `/discover/tv?api_key=bf7a0d7e84fbc649f8d6f2819491a0d6&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    API(url).then((res) => {
      setSeries(res.data.results);
    });
  }, []);

  return (
    <ContextSeries.Provider
      value={{
        series: series,
      }}
    >
      {children}
    </ContextSeries.Provider>
  );
};

export default SeriesContext;
