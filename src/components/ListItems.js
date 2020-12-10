import React from 'react';
import Item from './Item';
import Container from '../containers/Container';
import Pagination from '../containers/Pagination';
import LoaderSpinner from './Loader';

const ListItems = ({ data, loading, error, title, subtitle, type }) => {
  console.log(data);
  return (
    <Container title={title} subtitle={subtitle}>
      {loading && <LoaderSpinner />}
      {error && error}
      <div className="wrapper__movies">
        {data && data.map((item) => <Item key={item.id} item={item} type={type} />)}
      </div>
      <Pagination />
    </Container>
  );
};

export default ListItems;
