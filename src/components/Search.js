import React, { useState, useRef, useEffect } from 'react';
import { createBrowserHistory } from 'history';
import Pagination from '../containers/Pagination';

const Search = () => {
  const [input, setInput] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const refInput = useRef();
  const node = useRef();

  const { push } = createBrowserHistory();

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
    push(input);
    setInput('');
  };

  const clickButton = () => {
    setShowSearch(true);
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
    </>
  );
};

export default Search;
