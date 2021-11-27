import { Link } from 'react-router-dom';
import './Title.css';

const Title = () => (
    <section className="title" >
        <Link to="/">
        <img className="tittle-imagen" src="https://raw.githubusercontent.com/gustavo-exe/MTV_Award_Files/main/icons/Icon_TipoWhite.png" alt="logo">
            
            </img> 
            <p className="tittle-parrafo" >
                MTV Music Awards 2021
            </p>
        </Link>
 
    </section>
)

export default Title;