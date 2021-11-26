import Footer from "../Footer/Footer"

const Card =({urlImage, artistName, nomination}) => (
    <div>
        <header>
            <img src={urlImage} alt="Imagen de la carta"/>
            <p>{artistName}</p>
            <p>{nomination}</p>
        </header>
        <footer>
            <div>-</div>
            <div>20</div>
            <div>+</div>
        </footer>       
    </div>
    
)

export default Card