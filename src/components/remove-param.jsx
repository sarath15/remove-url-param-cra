import React, { useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";

function RemoveParam(props) {
  // funciton is to remove all query params
  const removeQuery = () => {
    props.history.replace("/remove-param");
  };

  useEffect(() => {
    console.log("Render on mount");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" name="remove" onClick={removeQuery}>
          Remove GET param
        </button>
        <p>
          <Link to="/">Home</Link>
        </p>
      </header>
    </div>
  );
}

export default withRouter(RemoveParam);
