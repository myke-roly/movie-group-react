import React from 'react';
import Search from '../components/Search';
import Title from './Title';
const Header = ({title, subtitle}) => {
  return (
    <header className="header">
      <Search />
      <Title title={title} subtitle={subtitle} />
    </header>
  );
};

export default Header;
