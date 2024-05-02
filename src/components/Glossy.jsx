import React from 'react';
import "./CSS/Category.css";
import NavBar from "./NavBar";

function Glossy() {
  const colors = [
    { name: 'Wood Borwn', hex: '#70380e' },
    { name: 'Dark Brown', hex: '#3E2723' },
    { name: 'Siltern Brown', hex: '#4E342E' },
    { name: 'Red Oxide', hex:'#55231e'},
    { name:'Munshell Grey', hex: '#7f807a'},
    {name:'Havels Grey',hex:'#909188'},
    {name:'Graphite Grey',hex:'#424242'},
    {name:'Siemens Grey',hex:'#8b856c'},
    {name:'Amtrex Beige',hex:'#8b8978'},
    {name:'Mid Buff',hex:'#9e690c'},
    {name:'Cream' , hex:'#e0dfad'},
    {name:'Golden Yellow' , hex:'#e78800'},
    {name:'Lemon Yellow' , hex:'#cea000'},
    {name:'Ivory' , hex:'#e3dcb8'},
    {name:'Usha Beige' , hex:'#bdab8e'},
    {name:'Deep Blue' , hex:'#41748c'},
    {name:'Azure Blue' , hex:'#143955'},
    {name:'VIP Blue' , hex:'#243c6f'},
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

export default Glossy;
