import React, { useId } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Createuser = () => {
  const id = useId();

  const navigate = useNavigate();
  const [userlist, setUserlist] = useState([]);
  let arr = [];
  function data() {
    var add = JSON.parse(window.localStorage.getItem("userdata"));
    var companyID = JSON.parse(window.localStorage.getItem("companylogin"));
    // console.log("companyID", companyID.id);
    arr.push(add);
    console.log("arr", ...arr);
    setUserlist(...arr);
    setInputValues({ companyID: companyID.id });
  }
  let [inputValues, setInputValues] = useState({
    username: "",
    password: "",
    companyID: "",
    id: "",
  });
  {
    console.log("input", id);
  }
  const handleInputChange = ({ target }) => {
    console.log("id", target);
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };
  // const ref = useRef(null);

  useEffect(() => {
    data();
  }, []);

  function back() {
    // console.log("wrongAnswers", wrongAnswers);
    // navigate("../homepage");
    navigate("../companyHomepage");
  }
  function handleSubmit(e) {
    console.log("e", e);
    userlist.push(e);
    window.localStorage.setItem("userdata", JSON.stringify(userlist));
    navigate("../companyHomepage");
  }

  return (
    <div className="d-flex my-5 justify-c">
      <h1>Add User</h1>
      <button onClick={back}>Back</button>
      <div className="card border-primary p-5 m-5">
        <div>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              username
            </label>
            <input
              name="username"
              type="text"
              value={inputValues.username}
              onChange={handleInputChange}
              className="form-control"
              // id="inputValid"
            />
          </div>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              ID
            </label>
            <input
              name="id"
              type="number"
              value={inputValues.id}
              onChange={handleInputChange}
              className="form-control"
              // id="inputValid"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Passwords
            </label>
            <input
              type="password"
              name="password"
              value={inputValues.password}
              onChange={handleInputChange}
              className="form-control"
              // id="inputValid"
            />
          </div>
          {/* <div className="form-group">
            <label className="form-label mt-2">ID</label>
            <input
              type="text"
              name="companyID"
              value={companyID}
              // key={companyID}
              onChange={handleInputChange}
              // className="form-control"
              // id="inputValid"
            />
          </div> */}
          <div className="d-grid gap-2 mt-3">
            <button
              className="btn btn-outline-primary btn-block"
              onClick={() => handleSubmit(inputValues)}
            >
              submit
              {/* {id ? "Edit" : "Add"} Employee */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Createuser;
