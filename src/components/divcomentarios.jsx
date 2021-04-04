import React from 'react';
import '../index.css';
import Jennifer from '../components/jennifer.jsx'
import Jeremy from '../components/jeremy.jsx'
import Jamie from '../components/jamie.jsx'
import Comentario2 from '../components/comentario2.jsx';
import arrowback from './img/arrowback.svg';

function Divcomentarios() {
  return (
    <div className="container1">
        <h2 className="comentarios">COMMENTS (3)</h2>
        <Jennifer />
        <div className="paddLeft">
          <div className="flex">
            <Jamie />
            <button className="enviar1">
              <img src={arrowback} alt=""/>
            </button>
          </div>   
          <Comentario2 />
        </div>
        <Jeremy />
    </div>

  );
}
 
export default Divcomentarios;