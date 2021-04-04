import React from 'react';
import '../index.css';
import Jamie from '../components/jamie.jsx';
import Coment from '../components/coment.jsx';

function Principal() {

  let corazon;
  
  return (
    <div className="">
        <div className="flex">
            <Jamie />
            <button className="enviar1 corazon" id="corazon" onClick={()=>click()}>
            </button>
        </div>
        <Coment />
    </div>
  )
  function click(){
    corazon = document.getElementById("corazon");

    if(corazon.className === "corazon1"){
      corazon.classList.remove('corazon1');
      corazon.className = "enviar1 corazon";
    }else{
      corazon.className = "corazon1";
    }
  }
}
 
export default Principal;