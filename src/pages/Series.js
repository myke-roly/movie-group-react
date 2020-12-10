import React, { useContext, useEffect } from 'react';
import ListItems from 'components/ListItems';
import { ContextSeries } from 'state/series';

const Series = () => {
  const contextSeries = useContext(ContextSeries);
  const { series, getSeries } = contextSeries;
  useEffect(() => {
    getSeries();
  }, []);

  return <ListItems data={series.data} type="series" title="Discover Series" />;
};

export default Series;
