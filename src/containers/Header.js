import React from 'react';
import Search from '../components/Search';
import Pagination from '../containers/Pagination';

const Header = ({getCurrent}) => {
  return (
    <header className="header">
      <Search getCurrent={getCurrent} />
      <Pagination />
    </header>
  );
};

export default Header;
