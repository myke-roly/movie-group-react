import React, { useContext } from 'react';
import { ContextCategories } from '../context/CategoriesContext';
import { Link } from 'react-router-dom';
import logo from '../utils/logo.svg';

const Sidebar = () => {
  const contextCategories = useContext(ContextCategories);
  const { genres } = contextCategories;

  return (
    <aside className="sidebar">
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <section className="sidebar__genres">
        
        {genres.map(genre => (
          <Link to={`/genres/${genre.name}`} key={genre.id}>
            <div className="sidebar__genres--item">
              <small><i className="fab fa-ioxhost"></i>  {genre.name}</small>
          </div>
            </Link>
        ))}
      </section>
    </aside>
  );
};

export default Sidebar;
