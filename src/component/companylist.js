import React, { useEffect, useState } from "react";
const Companylist = () => {
  const [company, setcompanyList] = useState([]);
  // conso
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
  return (
    <div>
      {/* <h1 className="my-5 text-center">Manage Company</h1> */}
      {console.table("company1", company)}

      {company.length >= 0 ? (
        <div className="card bg-secondary p-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Company ID</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {company.map((data, key) => {
                {
                  console.log("inmap", data);
                }
                return (
                  <>
                    <tr key={data.password}>
                      <td>{data.companyname}</td>
                      <td>{data.id}</td>
                      <td>{data.email}</td>
                      <td>{data.password}</td>
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
export default Companylist;
