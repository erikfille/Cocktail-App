import { useState } from "react";
import "./SearchBar.modules.css";

export default function SearchBar(props) {
  const { onSearch } = props;

  const [search, setSearch] = useState({
    drinks: "",
    ingredients: "",
  });

  const [searchType, setSearchType] = useState("drinks");

  function handleInputChange(e) {
    setSearch({
      ...search,
      [searchType]: e.target.value,
    });
    // if (e.target.name === "drinks") {
    //   setSearch({ ...search, drinks: e.target.value });
    // }
    // if (e.target.name === "ingredients") {
    //   setSearch({ ...search, ingredients: e.target.value });
    // }
  }

  function onSelect(e) {
    setSearchType(e.target.value);
  }

  return (
    <div className="inputContainer">
      <select name="type" className="input" onChange={onSelect}>
        <option value="drinks">Drinks</option>
        <option value="ingredients">Ingredients</option>
      </select>
      <div className="searchDiv">
        <label htmlFor="search">Search for a Drink </label>
        <input
          value={searchType === "drinks" ? search.drinks : search.ingredients}
          type="text"
          name="search"
          id="search"
          className="input"
          placeholder="What do you want to search?"
          onChange={handleInputChange}
        />
        <button className="button" onClick={() => onSearch(search[searchType], searchType)}>
          Search
        </button>
      </div>
      {/* <div className="searchDiv">
        <label>
          Search by Ingredient{" "}
          <input
            value={search.ingredients}
            type="text"
            name="ingredients"
            id="ingredients"
            className="input"
            placeholder="Search for an ingredient"
            onChange={handleInputChange}
          />
        </label>
      <button className="button" onClick={() => onSearch(search.ingredients)}>
        Search
      </button>
      </div> */}
    </div>
  );
}
