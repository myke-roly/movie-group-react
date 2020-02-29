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
  
  React.useEffect(() => {
    if(!showSearch) return;
    refInput.current.focus()
  }, [showSearch])

  const searchMovie = e => {
    e.preventDefault();
    if(!input) return;
    getQuery(input);
    history.push(`/search/${input}`);
    setInput('');
  };

  return (
    <>
      <form className="search" onSubmit={searchMovie} ref={node}>
        <button className="btn search__button" onClick={() => setShowSearch(true)}>
          <i className="fas fa-search"></i>
        </button>
        <section className={`${ !showSearch ? 'search__input' : 'search__input search__input--show' }`}>
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

export default withRouter(Search);
