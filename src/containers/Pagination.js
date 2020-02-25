import React from 'react';
import {ContextMovies} from '../context/MoviesContext';

const Pagination = () => {
  const contextMovies = React.useContext(ContextMovies);
  const { prevPage, nextPage } = contextMovies;

  return (
    <div className="pagination">
      <button 
        className="btn pagination__button pagination__toLeft"
        onClick={prevPage}
      >
        <i className="fas fa-arrow-left"></i>
      </button>
      <button 
        className="btn pagination__button pagination__toLeft"
        onClick={nextPage}
      >
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
