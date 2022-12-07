import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx"

function App() {

 const [ drinks, setDrinks ] = useState([])

 function onClose(e){
  let newDrinks = drinks.filter((d) => d.idDrink !== e)
  setDrinks(newDrinks)
 }

 function onSearch(search) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.drinks && search!=="") {
        setDrinks(data.drinks);
      } else {
        window.alert("We haven't found any drinks that match :'(");
      }
    });
}

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards drinks={drinks} onClose={onClose} />
    </div>
  );
}

export default App;
