// import React from "react";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";
import home from "./homepage";
function Payadmin() {
  const [state, setState] = useState({
    email: "",
    password: "",
    error: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    // e.preventDefault();
    if (state.email === "ramesh" && state.password === "temp1234") {
      console.log("hi");
      navigate("../homepage");

      // sendDetailsToServer();
    } else {
      console.log();
      setState({ error: "please provide valide user name" });

      // props.showError("Passwords do not match");
    }
  };

  return (
    <div>
      <form>
        <h1>Systemadmin Login</h1>
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
export default Payadmin;
