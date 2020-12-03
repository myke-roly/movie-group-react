import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const history = useHistory();
  const [input, setInput] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const refInput = useRef();
  const node = useRef();

  /** hidden from if not focused */
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedow', handleClick);
  }, []);

  const handleClick = (e) => {
    if (node.current) {
      if (node.current.contains(e.target)) return;
      setShowSearch(false);
    }
  };

  useEffect(() => {
    refInput.current.focus();
  }, [showSearch]);

  const searchMovie = (e) => {
    e.preventDefault();
    if (!input) return;
    history.push(`/search/${input}`);
    setInput('');
  };

  return (
    <div className="search" onSubmit={searchMovie} ref={node}>
      <i className="fas fa-search"></i>
      <input type="text" placeholder="Search Movie..." value={input} ref={refInput} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default Search;
