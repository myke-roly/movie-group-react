import React, { useState, useRef, useEffect, useContext } from 'react';
import { createBrowserHistory } from 'history';
import { ContextSearch } from '../context/SearchContext';
import Movie from './Movie';
import { queryAllByAltText } from '@testing-library/react';

const Search = ({ getCurrent }) => {
  const [input, setInput] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const refInput = useRef();
  const node = useRef();

  const { push } = createBrowserHistory();

  /** search movie  */
  const contextSearch = useContext(ContextSearch);
  const { movie, getQuery, query } = contextSearch;

  /** hidden from if not focused */
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedow', handleClick);
  }, []);

  const handleClick = e => {
    if (node.current) {
      if (node.current.contains(e.target)) return;
      setShowSearch(false);
    }
  };

  const searchMovie = e => {
    e.preventDefault();
    // push(input);
    setInput('');
  };

  const clickButton = () => {
    setShowSearch(true);
    getQuery(input);
    setTimeout(() => {
      refInput.current.focus();
    }, 500);
  };

  return (
    <>
      <form className="search" onSubmit={searchMovie} ref={node}>
        <button className="btn search__button" onClick={clickButton}>
          <i className="fas fa-search"></i>
        </button>
        <section
          className={`search__input ${
            showSearch ? 'search__input--show' : null
          } `}
        >
          <input
            type="text"
            placeholder="Search Movie..."
            value={input}
            ref={refInput}
            onChange={e => setInput(e.target.value)}
          />
        </section>
      </form>
      {!query || !showSearch ? '' : (
        <div className="modal" ref={node}>
          <div className="modal__movies">
          Elementos encontrados de: {query.toLowerCase()}
            <section className="wrapper-movies">
              {movie.map(mov => (
                <Movie
                  key={mov.id}
                  id={mov.id}
                  title={mov.title}
                  url={mov.poster_path}
                  getCurrent={getCurrent}
                />
              ))}
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
