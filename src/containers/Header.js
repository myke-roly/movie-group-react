import React from 'react';
import Search from '../components/Search';

const Header = ({getCurrent}) => {
  return (
    <header className="header">
      <Search getCurrent={getCurrent} />
    </header>
  );
};

export default Header;
