import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({text, onClick}) => (
   
    <button className={"button"}  onClick={onClick}  >
        <Link className="button-link" to="/users/vote" >{text}</Link>
    </button>
    
)

export default Button;