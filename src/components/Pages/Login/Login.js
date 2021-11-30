import TopHeader from "../../TopHeader/TopHeader.js";
import Footer from "../../Footer/Footer.js";
import "./Login.css"
import Form from "../../Form/Form.js";

const Login = () => (
      <section className="login"  >
            <TopHeader />
            <section className="login-form" >
                  <Form title="Iniciar sesión"
                        tipeBoton="submit"
                        textBoton="Iniciar"
                  >
                  </Form>
            </section>

            <Footer />
      </section>


)

export default Login;