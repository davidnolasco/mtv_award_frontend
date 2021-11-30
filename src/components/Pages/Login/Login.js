import { useState } from "react";

import TopHeader from "../../TopHeader/TopHeader.js";
import Footer from "../../Footer/Footer.js";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

import "./Login.css"
import "../../../styles/Form.css"

import { useSelector, useDispatch } from "react-redux";
import { publicAxios } from "../../store/utilis/axios.js";

const getSecurity = ({ security }) => security;


const Login = () => {
    const [correo, setCorreo] = useState(null);
    const [password, setPassword] = useState(null);

    const onChangeHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.target.name === "txtCorreo") {
            setCorreo(e.target.value);
            console.log(correo);
        } else {
            setPassword(e.target.value);
            console.log(password)
        }
    }

    const security = useSelector(getSecurity);
    const dispatch = useDispatch();
    const onBotonClickHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("click");
        dispatch(
            {
                type: "SEC_LOGIN_FETCH",
                payload: null,
            }
        );

        publicAxios.post(
            '/api/users/login',
            {
                email: correo,
                pswd: password,
            }
        )
            .then(
                (data) => {
                    console.log(data)
                    dispatch(
                        {
                            type: "SEC_LOGIN_SUCCESS",
                            payload: data,
                        }
                    );
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                    dispatch(
                        {
                            type: "SEC_LOGIN_ERROR",
                            payload: err,
                        }
                    );
                }
            );
    }
    return (
        <section className="login" >
            <TopHeader />
            <section className="login-form" >
            <form className="form" >
                <p className="form-tittle" >Iniciar sesion</p>

                <div className="form-inputs">
                    <Input
                        tipe="text"
                        label="Correo electronico"
                        name="txtCorreo"
                        onChange={onChangeHandler}
                    ></Input>

                    <Input
                        tipe="password"
                        label="Contraseña"
                        name="txtPassword"
                        onChange={onChangeHandler}
                    ></Input>
                </div>


                <Button
                    text="Iniciar"
                    onClick={onBotonClickHandler}
                />
                {JSON.stringify(security)}

            </form>
            </section>
            <Footer />
        </section>
    )


}

export default Login;