import React from 'react';
import "./CSS/Category.css";
import NavBar from "./NavBar";

function Matt() {
  const colors = [
    {name:'Chocolate', hex: '#3E2723'},
    {name: 'D.A. Grey', hex: '#3b4041'},
    {name: 'Munshell Grey', hex: '#303131'},
    {name: 'Graphite Grey', hex: '#2e302f'},
    {name: 'Havels Grey', hex: '#7a7d74'},
    {name: 'Ivory', hex: '#e0d7b4'},
    {name: 'Beige', hex: '#867d67'},
    {name: 'Oxford Blue', hex: '#252c44'},
    {name: 'VIP Blue', hex: '#183a5d'},
    {name: 'Off White', hex: '#dddacf'},
    {name: 'P.O. Red', hex: '#4a080e'},
    {name: 'Black', hex: '#020202'},
    {name: 'Spl. Black', hex: '#000000'},
    {name: 'Black', hex: '#050505'},
    {name: 'Brown', hex: '#3E2723'},
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

export default Matt;
