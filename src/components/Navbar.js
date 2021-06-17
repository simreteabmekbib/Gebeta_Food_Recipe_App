import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav style={{padding: "2%"}} className="navbar navbar-expand-lg navbar-light bg-light nav-custom">
        <div className="container-fluid">
        <Link
        to="/UserProfile" 
        style={{ margin: "0 auto", fontSize: "15px", color: "red" }}
        className="ml-3 rec-link pl-2 ">Your Recipes</Link>
          <Link
            to="/"
            style={{ margin:"0 auto",fontSize: "25px", color: "red" }}
            className="brand navbar-brand pl-5 font-weight-bold"
          >
            Gebeta
          </Link>
          <Link to="/signup" className="sign-nav ml-1 mr-2">SignUp |</Link>
          <Link to="/signin" className="sign-nav ml-1">Login</Link>
        </div>
      </nav> 
    </>
  );
}

export default Navbar;
