import React from 'react';
import './App.css';
import Button from "./components/button/Button";
import Search from "./components/search/Search";
import Result from "./components/results/Results"

function App() {
  return (
    <>
      <div className="App">
        <div className="jumbotron">
          <h1 className="title">Employee-Tracker</h1>
        </div>
        <div className="searchDiv">
          <Search />
        </div>
        <div className="resultsDisplay">
          <Result />
        </div>





      </div>
  </>
  );
  
}

export default App;
