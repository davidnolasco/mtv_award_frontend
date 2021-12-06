import React,{ useState} from "react";

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
    }
    return(
        <div className="card" id={idNomination} >
        <header  className="card-header" >
            <img  className="card-image" src={urlImage} alt="Imagen de la carta"/>
            <div className="card-text" >
                <p className="card-text-parrafo" >{artistName}</p>
                <p className="card-text-parrafo" >{nomination}</p>
            </div>
        </header>
        <footer className="card-footer" >
            <button className="card-buttoncircle" onClick={ ()=>contadorrVotos(-1) } >-</button>
            <p className="votesOfTheNomination" >{contador}</p>
            <button className="card-buttoncircle" onClick={ ()=>contadorrVotos(1) } >+</button>
        </footer>       
    </div>
    )
    
}

export default Card