import logo from "./logo.svg";
import "./App.css";
import Google from "./asset/google.png";
import SearchBox from "./components/SearchBox";
import ShortcutIcon from "./components/ShortcutIcon";
import Facebook from "./asset/facebook.svg";
import { useEffect, useReducer, useState } from "react";
import reducer from "./reducer/reducer";
import SearchSuggestion from "./components/SearchSuggestion";

function App() {
  const filterItems = (arr, query) => {
    return arr.filter((el) => {
      return el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  };

  const initialState = {
    input: [],
  };

  const icons = [
    { id: 1, name: "Facebook", img: Facebook },
    { id: 2, name: "Google", img: Facebook },
    { id: 3, name: "Instagram", img: Facebook },
    { id: 4, name: "Instagram", img: Facebook },
    { id: 5, name: "Facebook", img: Facebook },
    { id: 6, name: "Facebook", img: Facebook },
  ];
  const [input, setInput] = useState("");
  const [filteredIcons, setFilteredIcons] = useState([...icons]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searhSuggestion, setSearchSuggestion] = useState([]);

  useEffect(() => {
    const arr = filterItems(icons, input);
    setFilteredIcons(arr);
    if (input !== "") {
      const newLog = [...state.input, input];
      dispatch({ type: "saveLog", payload: newLog });
    }
  }, [input]);

  const handleSearchSuggest = (val) => {
    setSearchSuggestion(val);
  };

  const handleInput = (val) => {
    setInput(val);
  };

  return (
    <div className="App">
      <img src={Google} alt="google" />
      <SearchBox
        filterItems={filterItems}
        onSearchSuggest={handleSearchSuggest}
        onInput={handleInput}
        searchData={state.input}
      />
      <div className="search-suggest">
        <SearchSuggestion onInput={handleInput} data={searhSuggestion} />
      </div>
      <ShortcutIcon iconList={filteredIcons} />
      <a href="https://github.com/kakalak22/myapp" target="_blank">
        Github
      </a>
    </div>
  );
}

export default App;
