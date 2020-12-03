import React, { useContext } from 'react';
import ListItems from '../components/ListItems';
import { ContextSeries } from '../context/SeriesContext';

const Series = () => {
  const contextSeries = useContext(ContextSeries);
  const { series } = contextSeries;

  return <ListItems data={series} title="Discover" subtitle="Series" />;
};

export default Series;
