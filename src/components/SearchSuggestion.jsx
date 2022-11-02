import React from "react";

const SearchSuggestion = ({ data, onInput, classStyle }) => {
  if (data.length > 0)
    return (
      <ul className={classStyle}>
        {" "}
        {data.map((suggestion, index) => (
          <li onClick={() => onInput(suggestion)} key={index}>
            {suggestion}
          </li>
        ))}
      </ul>
    );
  return null;
};

export default SearchSuggestion;
