import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const SearchBar = ({ placeholder = "Search..." }) => {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input 
        type="text" 
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;