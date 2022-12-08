import { useState } from "react";
import validation from "./validation.js";
import logo from "../../assets/img/Logo.png";
import "./Login.module.css";

export default function Login(props) {
  const { login } = props;

  const [inputs, setInputs] = useState({
    username: "fakemail@fake.com",
    password: "FakePass12",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(inputs);
  }

  return (
    <div className="generalContainer">
      <div className="divContainer">
        <img className="logo" src={logo} alt="Modern Cocktail Logo" />
        <hr/>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleInputChange}
            className={errors.username && "danger"}
          /><br/>
          {errors.username && <p>{errors.username}</p>}
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleInputChange}
            className={errors.password && "danger"}
          />
          {errors.password && <p>{errors.password}</p>}
          <br/>
          <label htmlFor="checkbox">I'm 18 years old or older</label>
          <input
            name="checkbox"
            type="checkbox"
            value={inputs.checkbox}
            onChange={handleInputChange}
          />
          <br/>
          <button className="button">Login</button>
        </form>
      </div>
    </div>
  );
}
