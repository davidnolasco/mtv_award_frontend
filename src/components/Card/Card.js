import React,{useEffect, useState} from "react";
import Footer from "../Footer/Footer"
import "./card.css";


const Card =({urlImage, artistName, nomination, idNomination}) => {
    
    const [contador, setcontador] =useState(1);

    function contadorrVotos(valor) {
        
        if(contador>20){
            setcontador(20)
        }else{
            setcontador(contador+valor);
        }

        if(contador<0){
            setcontador(0)
        }
        
        console.log(contador);
    }
    return(
        <div className="card" id={idNomination} >
        <header  className="card-header" >
            <img  className="card-image" src={urlImage} alt="Imagen de la carta"/>
            <div className="card-text" >
                <p>{artistName}</p>
                <p>{nomination}</p>
            </div>
        </header>
        <footer className="card-footer" >
            <button className="card-buttoncircle" onClick={ ()=>contadorrVotos(-1) } >-</button>
            <p>{contador}</p>
            <button className="card-buttoncircle" onClick={ ()=>contadorrVotos(1) } >+</button>
        </footer>       
    </div>
    )
    
}

export default Card