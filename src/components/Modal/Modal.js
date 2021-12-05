import { Link } from "react-router-dom";
import './Modal.css';



const Modal = ({active}) => {
    
    return (
        <div className={`${active ? "modal modal-active " : "modal"}`} >
        <Link to="/users/login">
            <section className="modal-image" >
                <p className="modal-titulo" >Multiverso Confirmado</p>
                <p>¡Creaste tu Cuenta Sherli.2!</p>
            </section>
        </Link>
        </div>
    )
}

export default Modal;