import './NavBar.css';

const NavBar = ({ typeNav = "Bar", email }) => {
    return (
        <>
            {
                typeNav === "Bar" ?

                    <nav className="navbar" >
                        <a className="navbar-boton" >Iniciar sesion</a>
                        <a className="navbar-boton navbar-boton--primary" >Crear cuenta</a>
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