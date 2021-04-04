import React from 'react';
import img from './img/ellipse3.png';
import Comentario3 from './comentario3';
import arrowback from './img/arrowback.svg';

function Jeremy() {

    let bucle =  {
        img: img,
        name: "Jeremy Mitchell",
        job: "Copywriter"
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
            <Comentario3/>
        </div>
    )
}

export default Jeremy;