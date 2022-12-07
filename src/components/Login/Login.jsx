import { useState } from "react";
import validation from "./validation.js";

export default function Login(props) {
  const { login } = props;

  const [inputs, setInputs] = useState({
    username: "fakemail@fake.com",
    password: "FakePassword123",
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleInputChange}
          className={errors.username && "danger"}
        />
        {errors.username && <span>{errors.username}</span>}
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleInputChange}
          className={errors.password && "danger"}
        />
        {errors.password && <span>{errors.password}</span>}
        <label htmlFor="checkbox">I'm 18 years old or older</label>
        <input
          name="checkbox"
          type="checkbox"
          value={inputs.checkbox}
          onChange={handleInputChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
