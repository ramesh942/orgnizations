import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Userlist = () => {
  const [userlist, setUserlist] = useState([]);
  const [list, setlist] = useState([]);

  const [id, setId] = useState("");

  const history = useNavigate();

  const arr = [];
  function data() {
    var add = JSON.parse(window.localStorage.getItem("userdata"));
    arr.push(add);
    setUserlist(...arr);
  }
  useEffect(() => {
    data();
  }, []);
  function company() {
    var add = JSON.parse(window.localStorage.getItem("companylogin"));
    setId(add.id);
  }
  useEffect(() => {
    company();
  }, []);

  var Login = userlist.filter((value) => {
    return id === value.companyID;
  });

  const handleClick = (id) => {
    console.log("hi", id);
    history(`../userdetails/${id}`);
  };
  console.log("Login", Login);
  const handleDelete = (index) => {
    console.log("index", index);
    // console.log("in handle",userlist.filter((i) => i !== index));
    var arr = Login.filter((item, i) => i !== index);
    console.log("arr", arr);
    setUserlist(arr);
  };
  return (
    <div>
      {Login.length >= 0 ? (
        <div className="card bg-secondary p-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Password</th>
                <th>Company Id</th>
              </tr>
            </thead>
            <tbody>
              {Login.map((data, i) => {
                return (
                  <>
                    <tr key={data.id} onClick={(e) => handleClick(data.id)}>
                      <td>{data.id}</td>
                      <td>{data.username}</td>
                      <td>{data.password}</td>
                      <td>{data.companyID}</td>
                      <td>
                        <button onClick={(e) => handleDelete(i)}>Delete</button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
            {/* <Compnyitem /> */}
          </table>
        </div>
      ) : (
        <h1> No company List</h1>
      )}
    </div>
  );
};
export default Userlist;
