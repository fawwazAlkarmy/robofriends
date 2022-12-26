import React from "react";

const SearchBox = ({ searchField, onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        value={searchField}
        onChange={onSearchChange}
        type="search"
        placeholder="Search Robots"
        className="pa3 ba br3 "
      />
    </div>
  );
};

export default SearchBox;
