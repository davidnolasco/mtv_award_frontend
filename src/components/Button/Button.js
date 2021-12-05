import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({text, onClick, ruta}) => (
   
    <button className={"button"}  onClick={onClick}  >
        <Link className="button-link" to={ruta} >{text}</Link>
    </button>
    
)

export default Button;