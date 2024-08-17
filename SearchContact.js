import React from 'react';

// SearchContact component to handle searching for contacts
const SearchContact = ({ searchTerm, setSearchTerm }) => (
  <div className="search-contact">
    <input
      type="text"
      placeholder="Search Contacts..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);

export default SearchContact;
