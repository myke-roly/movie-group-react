import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Movies</Link>
    <Link to="/series">Series</Link>
  </nav>
);

export default Navbar;
