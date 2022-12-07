import Card from "./Card";

export default function Cards(props) {
  const { drinks, onClose } = props;
  return (
    <div>
      {drinks.map((d) => (
        <Card
          key={d.idDrink}
          idDrink={d.idDrink}
          strAlcoholic={d.strAlcoholic}
          strDrink={d.strDrink}
          strCategory={d.strCategory}
          strGlass={d.strGlass}
          strImageSource={d.strImageSource}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
