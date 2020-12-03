import React from 'react';
import Search from '../components/Search';
import Navbar from './Navbar';

const Header = ({ title, subtitle }) => {
  return (
    <header className="header">
      <Navbar />
      <Search />
    </header>
  );
};

export default Header;
