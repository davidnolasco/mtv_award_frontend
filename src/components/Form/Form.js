import Input from "../Input/Input.js"
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";
import "./Form.css";

const Form = ({ title, tipeBoton, textBoton }) => (
   <form className="form" >
      <p  className="form-tittle" >{title}</p>
      
      <div className="form-inputs">
         <Input tipe="text"
            label="Correo electronico"
         ></Input>

         <Input tipe="password"
            label="Contraseña"
         ></Input>
      </div>
      <Link to="/users/vote"> <Button 
         text={textBoton}
      /></Link>
     
   </form>
)

export default Form;