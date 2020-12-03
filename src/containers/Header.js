import React from 'react';
import InputSearch from '../components/InputSearch';
import Navbar from './Navbar';

const Header = () => (
  <header className="header">
    <Navbar />
    <InputSearch />
  </header>
);

export default Header;
