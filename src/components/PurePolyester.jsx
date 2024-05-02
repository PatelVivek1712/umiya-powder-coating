import React from 'react';
import "./CSS/Category.css";
import NavBar from "./NavBar";

function PurePolyester() {
  const colors = [
    {name: 'IS', hex: '#637469'},
    {name: 'Havels Grey', hex: '#86877e'},
    {name: 'Siemens Grey', hex: '#928870'},
    {name: 'Cream', hex: '#deca93'},
    {name: 'Golden Yellow', hex: '#c68000'},
    {name: 'Ivory', hex: '#cbc4a7'},
    {name: 'P.P.Pepsi Blue', hex: '#182e3b'},
    {name: 'Milky White', hex: '#d7d3c0'},
    {name: 'Light Grey', hex: '#717c79'},
    {name: 'Dark Grey', hex: '#5f6b68'},
    {name: 'Satin Black', hex: '#2b2b29'},
    {name: 'Golden Brown', hex: '#482613'},
    {name: 'Black Glossy', hex: '#171715'},
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

export default PurePolyester;
