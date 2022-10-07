// import React from "react";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";
function Companyadmin() {
  const [state, setState] = useState({
    email: "",
    password: "",
    error: "",
  });
  const [company, setcompanyList] = useState([]);

  const arr = [];
  function data() {
    var add = JSON.parse(window.localStorage.getItem("company"));
    arr.push(add);
    console.log("arr", ...arr);
    setcompanyList(...arr);
  }
  useEffect(() => {
    data();
  }, []);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = () => {
    // e.preventDefault();
    var Login = company.find((value) => {
      return value.email === state.email && value.password === state.password;
    });
     console.log("Incompany",Login);
    if (Login) {
      navigate("../companyHomepage");
          window.localStorage.setItem("companylogin", JSON.stringify(Login));

    } else {
    }
  };

  return (
    <div>
      <form>
        <h1>Companyadmin Login</h1>
        <input
          type="text"
          className="form-control"
          id="email"
          // aria-describedby="emailHelp"
          placeholder="Enter email"
          value={state.email}
          onChange={handleChange}
        />

        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Register
        </button>
      </form>
    </div>
  );
}
export default Companyadmin;
