// SearchHistory.tsx
import React from "react";
import SearchItem from "./SearchItem";

interface Props {
  history: Object[];
  onSearch: (query: string) => void;
  onDelete: (query: string) => void;
}

const SearchHistory: React.FC<Props> = ({ history, onSearch, onDelete }) => (
  <div>
    <div>Search History</div>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {history.map((q) => (
        <SearchItem query={q} />
      ))}
    </ul>
  </div>
);

export default SearchHistory;
