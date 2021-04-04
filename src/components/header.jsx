import React from 'react';
import img from './img/header.png';
import '../index.css';
 
function Header() {
  return (
    <div className="">
      <img src={img} alt="header" className="img-header"/>
    </div>
  );
}
 
export default Header;