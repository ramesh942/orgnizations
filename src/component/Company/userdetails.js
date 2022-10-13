import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

var arr = [];

function UserDetail(props) {
  const [userdetail, setUserdetails] = useState([]);
  const [id, setId] = useState("");
  const params = useParams();

  let [userData, setuserData] = useState({
    id: "",
    companyID: "",
    username: "",
  });
  const handleInputChange = ({ target }) => {
    console.log("id", target);
    setuserData({
      ...userData,
      [target.name]: target.value,
    });
  };
  function handleSubmit(e) {
    console.log("Hi");
    // console.log("e", e);
    // userlist.push(e);
    // window.localStorage.setItem("userdata", JSON.stringify(userlist));
    // navigate("../companyHomepage");
  }
  const userinfo = () => {
    var add = JSON.parse(window.localStorage.getItem("userdata"));
    arr.push(add);
    setUserdetails(...arr);
  };
  useEffect(() => {
    userinfo();
  }, []);
  function company() {
    var add = JSON.parse(window.localStorage.getItem("companylogin"));
    setId(add.id);
  }
  useEffect(() => {
    company();
  }, []);
  var Login = userdetail.filter((value) => {
    return id === value.companyID;
  });
  var detail = Login.find((value, id) => {
    return params.id === value.id;
  });

  return (
    <>
      <div>
        <h1>User Details</h1>
        <div className="form-group">
          <label className="form-label mt-2" htmlFor="inputValid">
            ID
          </label>
          <input
            name="id"
            type="number"
            value={detail?.id}
            onChange={handleInputChange}
            className="form-control"
            // id="inputValid"
          />
        </div>
        <div className="form-group">
          <label className="form-label mt-2" htmlFor="inputValid">
            CompanyID
          </label>
          <input
            name="companyID"
            type="number"
            value={detail?.companyID}
            // onChange={handleInputChange}
            className="form-control"
            // id="inputValid"
          />
        </div>
        <div className="form-group">
          <label className="form-label mt-2" htmlFor="inputValid">
            User name
          </label>
          <input
            name="username"
            type="text"
            value={ userData.username || detail?.username}
            onChange={handleInputChange}
            className="form-control"
            // id="inputValid"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button
            className="btn btn-outline-primary btn-block"
            onClick={() => handleSubmit(userData)}
          >
            submit
            {/* {id ? "Edit" : "Add"} Employee */}
          </button>
        </div>
      </div>
    </>
  );
}
export default UserDetail;
