import React, { useEffect, useReducer, useState } from "react";
import reducer from "../reducer/reducer";

const SearchBox = ({ onInput, searchData, onSearchSuggest }) => {
  const filterItems = (arr, query) => {
    return arr.filter((el) => {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  };

  const [input, setInput] = useState("");
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      onInput(input);
    }
  };

  useEffect(() => {
    if (searchData.length > 0 && input !== "") {
      const newSearchSuggest = filterItems(searchData, input);
      onSearchSuggest(newSearchSuggest);
      return;
    }
    onSearchSuggest(searchData);
  }, [input]);

  return (
    <div>
      <input
        onChange={(e) => {
          setInput(e.currentTarget.value);
        }}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search google or type a URL"
      />
    </div>
  );
};

export default SearchBox;
