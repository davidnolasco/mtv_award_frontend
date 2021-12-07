import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './NavBar.css';
import { useState } from "react";
const getSecurity = ({ security }) => security;


const NavBar = () => {
    const security = useSelector(getSecurity);
    
    const [active, setActive] = useState(false);

    const onClickNavBar =()=>{
        setActive(true)
    }

    const onClickCloseSesion =()=>{
        setActive(false);
        localStorage.clear();
        window.location.replace('/');
    }

    return (
        <>
            {
                security.user.email ?
                    <nav>
                    <div className="navbar" onClick={onClickNavBar}>
                        <img src="https://raw.githubusercontent.com/gustavo-exe/MTV_Award_Files/main/icons/StarIcon.png" alt="Avatar" />
                        <p >{security.user.email.split('@')[0]}</p>
                    </div>
                    <div  onClick={onClickCloseSesion} className={`${active ? "navbar-closesesion navbar-closesesion--active" : "navbar-closesesion"}`} >
                        Cerrar sesion
                    </div>
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