import React, { useContext } from 'react';
import ListMovies from './ListMovie';
import { ContextSeries } from '../context/SeriesContext';

const Series = () => {

  const contextSeries = useContext(ContextSeries);
  const {series} = contextSeries;
  console.log(series);

  return (
    <ListMovies movies={series} title="Discover" subtitle="Series" />
  );
};

export default Series;
