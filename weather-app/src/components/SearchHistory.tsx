import React from 'react';

interface Props {
  history: string[];
  onSearch: (query: string) => void;
  onDelete: (query: string) => void;
}

const SearchHistory: React.FC<Props> = ({ history, onSearch, onDelete }) => (
  <ul>
    {history.map((q) => (
      <li key={q}>
        <span onClick={() => onSearch(q)}>{q}</span>
        <button onClick={() => onDelete(q)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default SearchHistory;
