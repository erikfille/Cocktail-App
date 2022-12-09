import s from "./Card.module.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { addDrink, removeDrink } from "../../redux/actions";
import { connect } from "react-redux";

export function Card(props) {
  const { idDrink, removeDrink, addDrink, myDrinks } = props;

  const [favDrink, setFavDrink] = React.useState(false);

  function handleFavorite() {
    if (favDrink) {
      setFavDrink(false);
      removeDrink(idDrink);
    }
    if (!favDrink) {
      setFavDrink(true);
      addDrink(props);
    }
  }

  useEffect(() => {
    myDrinks.forEach((fav) => {
      if (fav.idDrink === idDrink) {
        setFavDrink(true);
      }
    });
  }, [myDrinks, idDrink]);

  const drinkCard = (
    <div className={s.divContainer}>
      {" "}
      <button className={s.button} onClick={() => props.onClose(idDrink, props.type)}>
        X
      </button>
      {favDrink ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <p className={s.hasAlcoholTag}>{props.strAlcoholic}</p>
      <Link to={`/drink/${idDrink}`}>
        <h1 className={s.name}>{props.strDrink}</h1>
      </Link>
      <img
        className="drinkImg"
        src={props.strDrinkThumb}
        alt={props.strDrink}
      />
      <hr />
      <h2>Category:</h2>
      <p>{props.strCategory}</p>
      <h2>Serve better in:</h2>
      <p>{props.strGlass}</p>
    </div>
  );

  const ingredientCard = (
    <div className={s.divContainer}>
      <button className={s.button} onClick={() => props.onClose(idDrink, props.type)}>
        X
      </button>
      <Link to={`/drink/${idDrink}`}>
        <h1 className={s.name}>{props.strDrink}</h1>
      </Link>
      <img
        className="ingredientImg"
        src={props.strDrinkThumb}
        alt={props.strDrink}
      />
      <hr/>
      <h2>Drink ID in Database:</h2>
      <p>{idDrink}</p>
    </div>
  );

  return props.type === "drink" ? drinkCard : ingredientCard;
}

function mapDispatchToProps(dispatch) {
  return {
    addDrink: (props) => {
      dispatch(addDrink(props));
    },
    removeDrink: (idDrink) => {
      dispatch(removeDrink(idDrink));
    },
  };
}

function mapStateToProps(state) {
  return {
    myDrinks: state.myDrinks,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
