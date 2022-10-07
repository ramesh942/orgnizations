import React, { useEffect, useState } from "react";
const Userlist = () => {
  const [userlist, setUserlist] = useState([]);
    const [list, setlist] = useState([]);

    const [id, setId] = useState("");

  // conso
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

  return (
    <div>
      {/* <h1 className="my-5 text-center">Manage Company</h1> */}
      {/* {console.table("company1", company)} */}

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
              {Login.map((data) => {
                return (
                  <>
                    <tr key={data.id}>
                      <td>{data.username}</td>
                      <td>{data.password}</td>
                      <td>{data.companyID}</td>
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
