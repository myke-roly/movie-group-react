import React from 'react';
import Search from '../components/Search';
import Title from './Title';
const Header = ({title, subtitle, changeModeMobile}) => {
  return (
    <header className="header">
      <Search />
      <Title title={title} subtitle={subtitle} />
      <h2 className="header__burguer" onClick={changeModeMobile}>Menu</h2>
    </header>
  );
};

export default Header;
