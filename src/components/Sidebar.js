import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../utils/logo.svg';

import { ContextCategories } from '../context/CategoriesContext';

const Sidebar = ({mobieMode}) => {
  const contextCategories = useContext(ContextCategories);

  const { genres } = contextCategories;
  console.log(mobieMode);

  return (
    <>
      {mobieMode
        ? <aside className="sidebar">
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <br />
            <section className="sidebar__genres">
            <Link to="/series"><small style={{margin: "1rem 0 1rem 2rem"}}><i className="fas fa-video"></i> Series</small></Link>
              {genres.map(genre => (
                <Link to={`/genres/${genre.id}`} key={genre.id}>
                  <div className="sidebar__genres--item">
                      <small><i className="fab fa-ioxhost"></i>  {genre.name}</small>
                  </div>
                </Link>
              ))}
            </section>
          </aside>
        : ''}
    </>
  );
};

export default Sidebar;
