import { React, useState } from "react";
import { Link } from "react-router-dom";
import  Validation  from "./LoginValidation"; 
import "../App.css";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="app">
      <div className="container-login">
        <div className="image-container">
          <img
            src="/assets/d0333051d24ff9adba8cc63b100016a9.png"
            height="100px"
            width="100px"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="container-login">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="auth-form-container"
            />
            {errors.email && (
              <span className="text-danger"> {errors.email}</span>
            )}
          </div>
          <div className="container-login">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="auth-form-container"
            />
            {errors.password && (
              <span className="text-danger"> {errors.password}</span>
            )}
          </div>
          <Link to={"/Welcome"}>
            <button type="submit" className="button1">
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
