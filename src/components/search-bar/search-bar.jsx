import React, { useState } from 'react';
import './search-bar.styles.scss';

const SearchBar = ({ searchItems }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setInputValue(e.target.value);
    searchItems(inputValue);
  };
  return (
    <div className="search-container">
      <form action="">
        <input
          type="text"
          placeholder="search 🔍"
          className="search-input"
          value={inputValue}
          onChange={e => handleChange(e)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
