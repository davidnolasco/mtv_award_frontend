import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => (
    <section className="main-container">
        <div className="main-content">
            <img className="main-imagen" src="https://raw.githubusercontent.com/gustavo-exe/MTV_Award_Files/main/images/DonaMtv.png" alt="Logo MTV"></img>
            <Link to="/users/vote"> <a className="main-boton" >Votar ahora</a></Link>
           
        </div>
    </section>
)

export default Main;