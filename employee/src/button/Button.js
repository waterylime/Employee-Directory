import React from "react";
import "./button.css";

const Button = props => {
    return (
      <div >
        <button className={props.type}>{props.name}</button>
        
      </div>
    );
  };
  
  export default Button;
  