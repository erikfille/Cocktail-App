import Card from "../Cards/Card";
import { useSelector } from "react-redux";

export default function Favorites(props) {
  const myDrinks = useSelector((state) => state.myDrinks);

  return (
    <div>
      {myDrinks.map((d) => (
        <Card
        type="drink"
        key={d.idDrink}
        idDrink={d.idDrink}
        strAlcoholic={d.strAlcoholic}
        strDrink={d.strDrink}
        strCategory={d.strCategory}
        strGlass={d.strGlass}
        strDrinkThumb={d.strDrinkThumb}
        />
      ))}
    </div>
  );
}
