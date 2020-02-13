import React from "react"
import "./search.css";


const Form = ()=> {
    return (
    <>
      <h2>Search Employees</h2>  
    <form>
        <div className=" input-group">
            
            <input type="text" className="form-control" id="inputFiels" placeholder="John Doe"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
            
        </div>
        <small id="searchHelp" className="form-text text-muted">Search for employee/s by name</small>
    </form>



</>
    )
}

export default Form;