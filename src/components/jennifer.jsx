import React from 'react';
import img from './img/ellipse1.png';
import Comentario1 from './comentario1';
import arrowback from './img/arrowback.svg';

function Jennifer() {

    let bucle =  {
        img: img,
        name: "Jennifer Wood",
        job: "Brand Designer"
    }
    return (
        <div>
            <div className="flex">
                <div className="grid">
                    <div>
                        <img className="imgUser" src={bucle.img} alt=""/>
                    </div>
                    <div className="bioUser">
                        <p className="name1">{bucle.name}</p> 
                        <p className="name2">{bucle.job}</p>
                    </div>
                </div>
                <button className="enviar1">
                    <img src={arrowback} alt=""/>
                </button>
            </div>
            
            <Comentario1/>
            
        </div>
    )
}

export default Jennifer;