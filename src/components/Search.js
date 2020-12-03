import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const history = useHistory();
  const [input, setInput] = useState('');

  const searchMovie = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      if (!input) return;
      history.push(`/search/${input}`);
      setInput('');
    }
  };

  return (
    <div className="search">
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search Movies | Series"
        value={input}
        onKeyPress={searchMovie}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Search;
