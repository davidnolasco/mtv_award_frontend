import React,{ useState} from "react";

import "./card.css";


const Card =({urlImage, artistName, nomination, idNomination, votesOfTheNomination}) => {
    
    const [contador, setcontador] =useState(1);
    const [votos, setVotos]=useState([]);

    function contadorrVotos(id,valor) {
        
        if(contador>20){
            setcontador(20)
        }else{
            setcontador(contador+valor);
        }
        
        if(contador<0){
            setcontador(0)
        }
        
        const nomination = [{
            id: id,
            cantidad: contador
        }];
        
        setVotos(oldArray =>[...oldArray, nomination])
        console.log(votos);
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
            <button className="card-buttoncircle" onClick={ ()=>contadorrVotos(idNomination,-1) } >-</button>
            <p id="votesOfTheNomination" onChange={votesOfTheNomination} >{contador}</p>
            <button className="card-buttoncircle" onClick={ ()=>contadorrVotos(idNomination,1) } >+</button>
        </footer>       
    </div>
    )
    
}

export default Card