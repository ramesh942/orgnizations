import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, useNavigate } from "react-router-dom";
import Userlist from "./userlist";
function CompanyHomepage() {
  const [email, setEmail] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [id, setId] = useState("");
  const [listofuser, setListofuser] = useState([]);

  const history = useNavigate();

  function createpage() {
    history("../createuser");
  }

  const [userlist, setUserlist] = useState([]);
  console.log(
    "userlist",
    userlist.filter((value) => {
      return id === value.companyID;
    })
  );
  var Login = userlist.filter((value) => {
    return id === value.companyID;
  });

  listofuser.push(Login);

  // console.log("Logindata",Login);
  // console.log("userlist", userlist.find((value) => {
  //   console.log("Login", value.companyID);

  //   // return id === value.companyID
  // }));
  const arr = [];
  function userdata() {
    var add = JSON.parse(window.localStorage.getItem("userdata"));
    arr.push(add);
    setUserlist(...arr);
  }
  useEffect(() => {
    userdata();
  }, []);
  function data() {
    var add = JSON.parse(window.localStorage.getItem("companylogin"));
    setEmail(add.email);
    setCompanyname(add.companyname);
    setId(add.id);
  }
  useEffect(() => {
    data();
  }, []);
  function Logout() {
    history("../companyadmin");
  }
  return (
    <div>
      <button onClick={createpage}>Create User</button>
      <button onClick={Logout}>Logout</button>

      {console.log("home", email)}
      <h1>Welcome to company home page</h1>
      <h1>email:-{email}</h1>
      <h1>id:-{id}</h1>

      <h1> Company name {companyname}</h1>
      <Userlist />
    </div>
  );
}
export default CompanyHomepage;
