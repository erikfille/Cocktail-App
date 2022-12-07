import { useState } from "react";

export default function SearchBar(props) {
  const { onSearch } = props;

  const [search, setSearch] = useState({
    drinks: "",
    ingredients: "",
  });

  function handleInputChange(e) {
    if (e.target.name === "drinks") {
      setSearch({...search, drinks: e.target.value});
    }
    if (e.target.name === "ingredients") {
      setSearch({...search, ingredients: e.target.value});
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="drinks">Search for a Drink</label>
        <input
          value={search.drinks}
          type="text"
          name="drinks"
          placeholder="Search for a drink"
          onChange={handleInputChange}
        />
        <button onClick={() => onSearch(search.drinks)}>Search</button>
      </div>
      <div>
        <label>
          Search by Ingredient
          <input
            value={search.ingredients}
            type="text"
            name="ingredients"
            placeholder="Search for an ingredient"
            onChange={handleInputChange}
          />
        </label>
        <button onClick={() => onSearch(search.ingredients)}>Search</button>
      </div>
    </div>
  );
}
