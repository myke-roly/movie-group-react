import React, { useContext } from 'react';
import ListItems from 'components/ListItems';
import { ContextSeries } from 'state/series';

const Series = () => {
  const contextSeries = useContext(ContextSeries);
  const { series } = contextSeries;

  return <ListItems data={series} type="series" title="Discover Series" />;
};

export default Series;
