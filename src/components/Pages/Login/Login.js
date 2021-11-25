import TopHeader from "../../TopHeader/TopHeader.js";
import Footer from "../../Footer/Footer.js";
import "./Login.css"
import Form from "../../Form/Form.js";
import Input from "../../Input/Input.js";

const Login = () => (
 <section>
        <TopHeader/>    
        <Form title="Iniciar sesión"
              tipeBoton="submit"
              textBoton="Iniciar"
        > 
         <Input tipe="text"
        label="correo electronico"
         ></Input>
 
        <Input tipe="password"
        label="Contraseña"
         ></Input>          
        </Form>
        <Footer/>
 </section>      
    
    
)

export default Login;