import SearchBar from "./SearchBar.jsx";

export default function Nav(props) {

  const { onSearch } = props;

  return (
    <div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
