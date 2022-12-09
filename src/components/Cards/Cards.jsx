import Card from "./Card";
// import "./Cards.modules.css"

export default function Cards(props) {
  const { drinks, ingredients, onClose } = props;
  return (
    <div>
      {drinks.search
        ? drinks.drinks.map((d) => (
            <Card
              type="drink"
              key={d.idDrink}
              idDrink={d.idDrink}
              strAlcoholic={d.strAlcoholic}
              strDrink={d.strDrink}
              strCategory={d.strCategory}
              strGlass={d.strGlass}
              strDrinkThumb={d.strDrinkThumb}
              onClose={onClose}
            />
          ))
        : ingredients.drinks.map((d) => (
            <Card
              type="ingredient"
              key={d.idDrink}
              idDrink={d.idDrink}
              strDrink={d.strDrink}
              strDrinkThumb={d.strDrinkThumb}
              onClose={onClose}
            />
          ))}
    </div>
  );
}
