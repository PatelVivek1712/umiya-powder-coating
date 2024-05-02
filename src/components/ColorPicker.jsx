import React from "react";
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";
import "./CSS/ColorPicker.css";
import glossy from "./images/glossyfinish.jpg";
import semiglossy from"./images/semiglossy.jpg";
import matt from"./images/matt.jpg";
import polyester from"./images/Polyester.jpeg";


function ColorPicker() {
  return (
    <div className="color-picker">
      <NavBar />
      <h1 className="main-heading">Select Color Category</h1>
      <div className="category-container">
        <div className="color-card">
        <Link to="/Glossy" className="category-link">
          <div className="category-card">
            <h2>Glossy Finish</h2>
            <img src={glossy} alt="Glossy Finish" />
          </div>
        </Link>
        </div>
        <div className="color-card">
        <Link to="/SemiGlossy" className="category-link">
          <div className="category-card">
            <h2>Semi Glossy Finish</h2>
            <img src={semiglossy} alt="Semi Glossy" />
          </div>
        </Link>
        </div>
        <div className="color-card">
        <Link to="/Matt" className="category-link">
          <div className="category-card">
            <h2>Matt Finish</h2>
            <img className="matt" src={matt} alt="Matt Finish" />
          </div>
        </Link>
      </div>
      <div className="color-card">
      <Link to="/PurePolyester" className="category-link">
          <div className="category-card">
            <h2>Pure Polyester Finish</h2>
            <img src={polyester} alt="Polyester Finish" />
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default ColorPicker;
