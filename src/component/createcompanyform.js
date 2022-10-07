import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Createcompanyform = () => {
  const navigate = useNavigate();
  let [inputValues, setInputValues] = useState({
    companyname: "",
    email: "",
    password: "",
    id: "",
  });
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const handleInputChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };

  {
    console.log("wrongAnswers", wrongAnswers);
  }
  let arr = [];
  function data() {
    var add = JSON.parse(window.localStorage.getItem("company"));
    arr = arr || []; //assign an empty array

    arr.push(add);
    console.log("arr", ...arr);
    setWrongAnswers(...arr);
  }
  useEffect(() => {
    data();
  }, []);
  const resetForm = () => {
    setInputValues(inputValues);
  };

  function back() {
    // console.log("wrongAnswers", wrongAnswers);
    navigate("../homepage");
  }
  function handleSubmit(e) {
    console.log("e", e);
    wrongAnswers.push(e);
    // console.log("data", data);
    window.localStorage.setItem("company", JSON.stringify(wrongAnswers));
    navigate("../homepage");
  }

  return (
    <div className="d-flex my-5 justify-c">
      <h1>Add company</h1>
      <button onClick={back}>Back</button>
      <div className="card border-primary p-5 m-5">
        <div>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Company Name
            </label>
            <input
              name="companyname"
              type="text"
              value={inputValues.companyname}
              onChange={handleInputChange}
              className="form-control"
              // id="inputValid"
            />
          </div>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Company ID
            </label>
            <input
              type="text"
              name="id"
              value={inputValues.id}
              onChange={handleInputChange}
              className="form-control"
              // id="inputValid"
            />
          </div>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="inputValid">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={inputValues.email}
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
export default Createcompanyform;
