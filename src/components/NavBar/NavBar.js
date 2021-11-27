import './NavBar.css';

const NavBar = ({typeNav="Bar", email}) => {
    if (typeNav === "Bar") {
        return
        (
            <nav  className="navbar" >
                <a className="navbar-boton" >Iniciar sesion</a>
                <a className="navbar-boton navbar-boton--primary" >Crear cuenta</a>
            </nav>
        )
    } else {
        return
        (
            <nav  className="navbar" >
                <p className="navbar-boton" >{email}</p>
                <img src="https://raw.githubusercontent.com/gustavo-exe/MTV_Award_Files/main/icons/StarIcon.png" alt="Avatar"/>
            </nav>
        )
    }
}

export default NavBar;