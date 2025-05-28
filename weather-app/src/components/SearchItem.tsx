import React from "react";
import "./SearchItem.css"; // Assuming you have some styles for SearchItem

interface Props {
  query: any;
  //   onSearch: (query: string) => void;
  //   onDelete: (query: string) => void;
}

const SearchItem: React.FC<Props> = ({ query }) => {
  return (
    <div key={query} className="search-item-container">
      <div>{query.name}</div>
      <div
        // onClick={() => onSearch(query.name)}
        className="search-item-button"
      >
        <img src="/assets/search.svg" alt="search icon" />
      </div>
      <div
        // onClick={() => onDelete(query.id)}
        className="search-item-button"
      >
        <img src="/assets/delete.svg" alt="delete icon" />
      </div>
    </div>
  );
};

export default SearchItem;
