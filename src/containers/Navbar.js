import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div>
      <Link to="/">Movies</Link>
      <Link to="/series">Series</Link>
    </div>
    <div className="navbar__menu--genres">Genres</div>
  </nav>
);

export default Navbar;
