import React, { useContext } from 'react';
import { ContextCategories } from '../context/CategoriesContext';
import {Link} from 'react-router-dom'; 

const Sidebar = () => {

  const contextCategories = useContext(ContextCategories)
  const { genres } = contextCategories;

  return (
    <aside className="sidebar">
      <section>
        <h1>Sidebar</h1>
        {genres.map(genre => (
          <Link to={`/genre/${genre.name}`} key={genre.id}>
            <h2>{genre.name}</h2>
          </Link>
        ))}
      </section>
    </aside>
  )
}

export default Sidebar;