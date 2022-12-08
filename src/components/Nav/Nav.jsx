import SearchBar from "./SearchBar.jsx";
import "./Nav.modules.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.png"

export default function Nav(props) {
  const { onSearch } = props;

  return (
    <div className="navContainer">
      <Link to="/home">
      <img className="img" src={logo} alt="Logo/Home"/>
      </Link>
      <br/>
      <SearchBar onSearch={onSearch} />
      <Link to="/menu" className="link">Drink Menu</Link>
      <Link to="/about" className="link">About</Link>
      <button className="logoutButton" onClick={() => props.logout()}>Logout</button>
    </div>
  );
}
