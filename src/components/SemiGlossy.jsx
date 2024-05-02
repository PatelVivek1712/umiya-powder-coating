import React from 'react';
import "./CSS/Category.css";
import NavBar from "./NavBar";

function SemiGlossy() {
  const colors = [
    {name: 'Smoke Grey', hex: '#3b5256'},
    {name: 'Siemens Grey', hex: '#938f7a'},
    {name: 'New Ivory', hex: '#dad2bc'},
    {name: 'Water Blue', hex: '#356864'},
    {name: 'Sea Blue', hex: '#355a83'},
    {name: 'Kangaroo Blue', hex: '#114e71'},
    {name: 'Off White', hex: 'e1e0cb'},
    {name: 'Satin Milky White', hex: '#ede9d7'},
    {name: 'Broken White', hex: '#d9d4be'},
    {name: 'A.B.B Light Orange', hex: '#c26d33'},
    {name: 'Machine Green', hex: '#3a4f2d'},
    {name: 'Satin Black', hex: '#272823'},
    {name: 'Clear Glossy', hex: '#cfcdc0'},
    {name: 'Clear Matt', hex: '#c9c7ba'},
  ];

  return (
    <div>
      <NavBar />
      <div className="category-container">
        {colors.map((color, index) => (
          <div key={index} className="color-item">
            <div className="color-box" style={{ backgroundColor: color.hex }} />
            <p className="color-name">{color.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SemiGlossy;
