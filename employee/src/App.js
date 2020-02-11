import React from 'react';
import './App.css';
import Button from "./button/Button";

function App() {
  return (
    <>
      <div className="App">
        <div className="jumbotron">
          <h1 className="title">Employee-Tracker</h1>
        </div>
        <div class="container">
    <h1 class="display-4">Search Employee</h1>
    </div>
        <input type="text" class="form-control" placeholder="Employee Name" aria-label="" aria-describedby="btnGroupAddon" ></input>
        <Button 
        type="btn btn-success"
        name="Search"
        />
        {"\n"}
       






      </div>
  </>
  );
  
}

export default App;
