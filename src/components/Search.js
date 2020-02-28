import React, { useState, useRef, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { ContextSearch } from '../context/SearchContext';

const Search = ({ history }) => {
  const [input, setInput] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const refInput = useRef();
  const node = useRef();

  /** search movie  */
  const contextSearch = useContext(ContextSearch);
  const {  getQuery } = contextSearch;

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
    getQuery(input);
    history.push(`/search/${input}`);
    setInput('');
  };

  const clickButton = () => {
    refInput.current.focus();
    setShowSearch(true);
  };

  return (
    <>
      <form className="search" onSubmit={searchMovie} ref={node}>
        <button className="btn search__button" onClick={clickButton} type="button">
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
            onChange={e => {
              setInput(e.target.value);
            }}
          />
        </section>
      </form>
    </>
  );
};

export default withRouter(Search);
