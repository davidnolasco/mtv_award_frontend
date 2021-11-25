import "./Form.css";
import Input from "../Input/Input.js"

const Form = ({title,tipeBoton,textBoton}) => (
   <form>
       <p>{title}</p>   
       <Input tipe="text"
        label="Correo electronico"
         ></Input>
 
        <Input tipe="password"
        label="Contraseña"
         ></Input>  

         <Input tipe="submit" 
         valor="Iniciar"      
         ></Input>   
   </form>
)

export default Form;