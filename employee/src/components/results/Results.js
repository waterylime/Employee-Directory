import React, { useState, useEffect } from "react";
import "./results.css";
import API from "../../utils/API";

const Results = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.search().then(res => {
      setUsers(res.data.results);
    });
    return () => {
      console.log("cleaning up");
    };
  }, []);

  return (
    <div>
      <table className="table table-striped table-light">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Phone #</th>
            <th scope="col">Picture</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <>
              <tr>
                <td>{index + 1}</td>
                <td>{item.name.first + " " + item.name.last}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.phone}</td>
                <td>
                  <img src={item.picture.thumbnail}></img>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
