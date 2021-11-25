import Input from "../Input/Input.js"
import Button from "../Button/Button.js";
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

      <Button
         text="Iniciar"
      />
   </form>
)

export default Form;