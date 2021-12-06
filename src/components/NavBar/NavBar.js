import { Link } from "react-router-dom";
import './NavBar.css';
import { useSelector } from "react-redux";
const getSecurity = ({ security }) => security;


const NavBar = () => {
    const security = useSelector(getSecurity);
    console.log(security)

    return (
        <>
            {
                security.user.email ?

                    <nav className="navbar" >
                        <img src="https://raw.githubusercontent.com/gustavo-exe/MTV_Award_Files/main/icons/StarIcon.png" alt="Avatar" />
                        <p >{security.user.email.split('@')[0]}</p>
                    </nav>

                    :
                    <nav className="navbar" >
                        <Link to="/users/login">  <p className="navbar-boton" >Iniciar sesión</p></Link>
                        <Link to="/users/signin"> <p className="navbar-boton navbar-boton--primary" >Crear Cuenta</p></Link>

                    </nav>
            }
        </>
    )
}

export default NavBar;