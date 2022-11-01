import React from "react";

const SearchSuggestion = ({ data, onInput }) => {
  return (
    <ul>
      {data
        ? data.map((suggestion, index) => (
            <li onClick={() => onInput(suggestion)} key={index}>
              {suggestion}
            </li>
          ))
        : null}
    </ul>
  );
};

export default SearchSuggestion;
