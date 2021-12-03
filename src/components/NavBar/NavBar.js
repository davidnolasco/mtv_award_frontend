import { Link } from "react-router-dom";
import './NavBar.css';



const NavBar = ({ typeNav = "Bar", email }) => {
    return (
        <>
            {
                typeNav === "Bar" ?
                    <nav className="navbar" >
                        <Link to="/users/login">  <p className="navbar-boton" >Iniciar sesión</p></Link>                      
                        <Link to="/users/signin"> <p className="navbar-boton navbar-boton--primary" >Crear Cuenta</p></Link>
                       
                    </nav>


                    :
                    <nav className="navbar" >
                        <p >{email}</p>
                        <img src="https://raw.githubusercontent.com/gustavo-exe/MTV_Award_Files/main/icons/StarIcon.png" alt="Avatar" />
                    </nav>
            }
        </>
    )
}

export default NavBar;