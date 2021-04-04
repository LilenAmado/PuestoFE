import React from 'react';
import '../index.css';
import Divcomentarios from './divcomentarios';
import Principal from './principal';
import imgJamie from './img/ellipse2.png';
import arrow from './img/arrow.svg';

function Container() {
  return (    
    <div className="">
        <div className="container1">
          <Principal/>
        </div>
        <div className="comentariosColor">
          <Divcomentarios/>
        </div>
        <div className="container1 flex">
          <img src= {imgJamie} className="imgUser" alt=""/>
          {/* <p className="parrafo">What do you think about it?</p> */}
          <input type="text" className="parrafo input" name="" id="" placeholder="What do you think about it?"/>
          <button type="submit" className="enviar">
            <img src={arrow} alt=""/>
          </button>
        </div>
    </div>
  );
}
 
export default Container;