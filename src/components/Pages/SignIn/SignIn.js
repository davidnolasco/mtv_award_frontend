import TopHeader from "../../TopHeader/TopHeader.js";
import Footer from "../../Footer/Footer.js";
import "./signin.css"
import Form from "../../Form/Form.js";

const SignIn = () => (
      <section className="signin"  >
            <TopHeader />
            <section className="signin-form" >
                  <Form title="Crear Cuenta"
                        tipeBoton="submit"
                        textBoton="Crear"
                  >
                  </Form>
            </section>

            <Footer />
      </section>


)

export default SignIn;