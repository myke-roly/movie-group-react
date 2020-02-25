import React from 'react';
import Search from '../components/Search';
import Pagination from '../containers/Pagination';

const Header = () => {
  return (
    <header className="header">
      <Search />
      <Pagination />
    </header>
  );
};

export default Header;
