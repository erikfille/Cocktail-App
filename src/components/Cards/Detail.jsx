import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import s from "./Detail.module.css"

export default function Detail() {
  const [cocktailDetail, setCocktailDetail] = useState({});

  const { drinkId } = useParams(); // useParams === { drinkId: "id del trago" }
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.drinks) {
          setCocktailDetail(data.drinks[0]);
        } else {
          window.alert("We haven't found any drinks that match :'(");
        }
      })
      .catch((err) => {
        window.alert("We haven't found any drinks that match :'(");
      });
  }, [drinkId]);

  function handleClick() {
    navigate("/home");
  }

  function ingredients() {
    let values = Object.values(cocktailDetail)
      .slice(17, 32)
      .filter((e) => e !== null);
    return values;
  }


//   function measures() {
//     let values = Object.values(cocktailDetail)
//       .slice(40, 55)
//       .filter((e) => e !== null);
//     console.log(values);
//   }


  return (
    <div className={s.divContainer}>
      <p className={s.hasAlcoholTag}>{cocktailDetail.strAlcoholic}</p>
      <h1>{cocktailDetail.strDrink}</h1>
      <img src={cocktailDetail.strDrinkThumb} alt={cocktailDetail.strDrink} />
      <hr />
      <h2>Category:</h2>
      <p>{cocktailDetail.strCategory}</p>
      <h2>Serve better in:</h2>
      <p>{cocktailDetail.strGlass}</p>
      <hr />
      <h2>Ingredients :</h2>
      <div>
        {ingredients().map((e, idx) => (
          <span key={idx}>
            {e}
            <br />
          </span>
        ))}
        <p>{cocktailDetail.strInstructions}</p>
      </div>
      {/* <div>
        {measures().map((e, idx) => (
          <span key={idx}>
            {e}
            <br />
          </span>
        ))}
      </div> */}
      <button className={s.button} onClick={handleClick}>
        Go back
      </button>
    </div>
  );
}
