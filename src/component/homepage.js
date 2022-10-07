import React from "react";
import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";
import Companylist from "./companylist";
function Homepage() {
  const history = useNavigate();
  function createpage() {
    history("../createcompanyform");
  }
  function Logout() {
    history("../systemadmin");
  }
  return (
    <div>
      <h1>Welcome to company list home page</h1>

      <button onClick={createpage}>createcompany</button>
      <button onClick={Logout}>Logout</button>

      <Companylist />
    </div>
  );
}
export default Homepage;
