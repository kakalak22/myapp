import React, { useEffect, useReducer, useState } from "react";
import reducer from "../reducer/reducer";
import SearchSuggestion from "./SearchSuggestion";

const SearchBox = ({ onInput, searchData, onSearchSuggest }) => {
  const filterItems = (arr, query) => {
    return arr.filter((el) => {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  };

  const [input, setInput] = useState("");
  const [onFocus, setOnFocus] = useState(true);
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      onInput(input);
      setOnFocus(false);
    }
  };

  useEffect(() => {
    if (searchData.length > 0 && input !== "") {
      const newSearchSuggest = filterItems(searchData, input);
      setSearchSuggestion(newSearchSuggest);
      return;
    }
    setSearchSuggestion(searchData);
  }, [input]);

  return (
    <div
      className={` input-wrapper ${
        searchData.length > 0 && searchSuggestion.length > 0
          ? "hide-box-shadow"
          : "show-box-shadow"
      } `}
    >
      <input
        onChange={(e) => {
          setInput(e.currentTarget.value);
        }}
        onKeyDown={handleKeyDown}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        type="text"
        placeholder="Search google or type a URL"
      />
      <SearchSuggestion
        classStyle={onFocus ? "active" : "inactive"}
        data={searchSuggestion}
      />
    </div>
  );
};

export default SearchBox;
