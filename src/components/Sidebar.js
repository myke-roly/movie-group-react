import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from 'utils/logo.svg';

import { ContextCategories } from 'state/categories';
import Title from './Title';

const Sidebar = () => {
  const contextCategories = useContext(ContextCategories);

  const { genres } = contextCategories;

  return (
    <>
      <aside className="sidebar">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <br />
        <Title subtitle="GENRES" />
        <section className="sidebar__genres">
          {genres.map((genre) => (
            <Link to={`/genres/${genre.id}`} key={genre.id}>
              <div className="sidebar__genres--item">
                <small>
                  <i className="fab fa-ioxhost"></i> {genre.name}
                </small>
              </div>
            </Link>
          ))}
        </section>
      </aside>
    </>
  );
};

export default Sidebar;
