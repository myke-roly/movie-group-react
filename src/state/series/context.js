import React, { useState, createContext, useEffect } from 'react';

export const ContextSeries = createContext();
const SeriesContext = props => {

  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.themoviedb.org/3/discover/tv?api_key=bf7a0d7e84fbc649f8d6f2819491a0d6&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;
      const response = await fetch(url);
      const data = await response.json();
      if (!data) return;

      setSeries(data.results);
    };

    fetchApi();
  }, []);

  return (
    <ContextSeries.Provider value={{
      series: series,
    }}>
      {props.children}
    </ContextSeries.Provider>
  )
}

export default SeriesContext;