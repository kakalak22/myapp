import React from "react";

const SearchSuggestion = ({ data, onInput }) => {
  return (
    <div className="search-suggest">
      <ul>
        {data
          ? data.map((suggestion, index) => (
              <li onClick={() => onInput(suggestion)} key={index}>
                {suggestion}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default SearchSuggestion;
