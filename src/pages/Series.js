import React, { useContext, useEffect } from 'react';
import ListItems from 'components/ListItems';
import { ContextSeries } from 'state/series';

const Series = () => {
  const { series, getSeries } = useContext(ContextSeries);

  useEffect(() => {
    getSeries();
  }, []); //eslint-disable-line

  return <ListItems data={series.data} loading={series.loading} type="series" title="Discover Series" />;
};

export default Series;
