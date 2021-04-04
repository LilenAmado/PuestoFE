import React from 'react';
import img from './img/ellipse2.png';
import '../index.css';

function Jamie() {

    let bucle =  {       
      img: img,
      name: "Jamie Andersen",
      job: "Photographer"
    }

    return (
        <div className="grid">
            <div>
                <img className="imgUser" src={bucle.img} alt=""/>
            </div>
            <div className="bioUser">
                <p className="name1">{bucle.name}</p> 
                <p className="name2">{bucle.job}</p>
            </div>
        </div>
    )
}

export default Jamie;