import Footer from "../Footer/Footer"
import "./card.css";


const Card =({urlImage, artistName, nomination}) => (
    <div className="card" >
        <header  className="card-header" >
            <img  className="card-image" src={urlImage} alt="Imagen de la carta"/>
            <div className="card-text" >
                <p>{artistName}</p>
                <p>{nomination}</p>
            </div>
        </header>
        <footer className="card-footer" >
            <div className="card-buttoncircle" >-</div>
            <div>20</div>
            <div className="card-buttoncircle" >+</div>
        </footer>       
    </div>
    
)

export default Card