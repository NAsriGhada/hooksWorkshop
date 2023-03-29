import React from 'react'

const SearchBar = ({ setQuery }) => {
  return (
    <div>
      <hr />
      <input type="text" placeholder="Search by name" onChange={(e) => setQuery(e.target.value)} />
      <hr />
    </div>
  );
};

export default SearchBar