import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Cards/Detail.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Login from "./components/Login/Login.jsx";
import About from "./components/Nav/About.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  const [drinks, setDrinks] = useState({ drinks: [], search: false });

  const [ingredients, setIngredients] = useState({
    drinks: [],
    search: false,
  });

  const [access, setAccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const username = "fakemail@fake.com";
  const password = "FakePass12";

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      return window.alert("Incorrect username or password");
    }
  }

  function logout() {
    setAccess(false);
  }

  function onClose(e, type) {
    if (type === "drink"){ 
    let newDrinks = drinks.drinks.filter((d) => d.idDrink !== e);
    setDrinks({ ...drinks, drinks: newDrinks });
    }
    if (type === "ingredient"){ 
      let newDrinks = ingredients.drinks.filter((d) => d.idDrink !== e);
      setIngredients({ ...ingredients, drinks: newDrinks }); 
  }
}

  function onSearch(search, type) {
    if (type === "drinks") {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.drinks && search !== "") {
            setDrinks({ drinks: data.drinks, search: true });
            setIngredients({ drinks: [], search: false });
          } else {
            window.alert("We haven't found any drinks that match :'(");
          }
        });
      navigate("/home");
    }
    if (type === "ingredients") {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.drinks && search !== "") {
            setIngredients({ drinks: data.drinks, search: true });
            setDrinks({ drinks: [], search: false });
          } else {
            window.alert("We haven't found any drinks that match :'(");
          }
        });
      navigate("/home");
    }
  }

  useEffect(() => {
    access === false && navigate("/");
  }, [access, navigate]);

  // useEffect(() => {
  //   fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.drinks && search !== "") {
  //         setRandom(data.drinks);
  //       } else {
  //         window.alert("We haven't found any drinks that match :'(");
  //       }
  //     });
  // }, [random]);

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route
          path="/home"
          element={
            <Cards
              drinks={drinks}
              ingredients={ingredients}
              onClose={onClose}
            />
          }
        />
        <Route path="/drink/:drinkId" element={<Detail />} />
        <Route path="/menu" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
