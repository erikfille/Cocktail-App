import SearchBar from "./SearchBar.jsx";
import "./Nav.modules.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const { onSearch } = props;

  return (
    <div className="navContainer">
      <Link to="/home">
      <img src="" alt="Logo/Home"/>
      </Link>
      <br/>
      <Link to="/about">About</Link>
      <SearchBar onSearch={onSearch} />
      <button onClick={() => props.logout()}>Logout</button>
    </div>
  );
}
