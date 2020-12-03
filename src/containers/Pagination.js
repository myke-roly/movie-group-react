import React from 'react';
import { ContextMovies } from 'state/movies';

const Pagination = () => {
  const contextMovies = React.useContext(ContextMovies);
  const { prevPage, nextPage, page } = contextMovies;

  return (
    <div className="pagination">
      {page > 1 ? (
        <button className="btn pagination__button pagination__toLeft" onClick={prevPage}>
          <i className="fas fa-arrow-left"></i>
          &ensp;Prev
        </button>
      ) : null}
      <button className="btn pagination__button pagination__toLeft" onClick={nextPage}>
        Next&ensp;
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
