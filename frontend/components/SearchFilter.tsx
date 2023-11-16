import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../redux/actions';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(actions.searchConversations(searchTerm));
  };

  return (
    <div id="search-filter">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search conversations..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchFilter;