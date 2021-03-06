import { useState } from "react";

import TopHeader from "../../TopHeader/TopHeader.js";
import Footer from "../../Footer/Footer.js";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import "../../../styles/Form.css"
import "./signin.css"

import { useDispatch } from "react-redux";
import { publicAxios } from "../../store/utilis/axios.js";

//const getSecurity = ({ security }) => security;

const SignIn = () => {
    const [correo, setCorreo] = useState(null);
    const [password, setPassword] = useState(null);
    const [modalState, setModalState] = useState(false);

    const modalSetStatus= ()=>{
        setModalState(true)
    }

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

    //const security = useSelector(getSecurity);
    const dispatch = useDispatch();
    const onBotonClickHandler = (e) => {
        modalSetStatus();
        e.preventDefault();
        e.stopPropagation();
        console.log("click");
        dispatch(
            {
                type: "SEC_SIGNIN_FETCH",
                payload: null,
            }
        );

        publicAxios.post(
            '/api/users/signin',
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
                            type: "SEC_SIGNIN_SUCCESS",
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
                            type: "SEC_SIGNIN_ERROR",
                            payload: err,
                        }
                    );
                }
            );
    }
    return (
        <>
            <section className="login" >
            <Modal active={modalState}/>
                <TopHeader />
                <section className="login-form" >
                    <form className="form" >
                        <p className="form-tittle" >Crear usuario</p>

                        <div className="form-inputs">
                            <Input
                                tipe="text"
                                label="Correo electronico"
                                name="txtCorreo"
                                onChange={onChangeHandler}
                            ></Input>

                            <Input
                                tipe="password"
                                label="Contrase??a"
                                name="txtPassword"
                                onChange={onChangeHandler}
                            ></Input>
                        </div>


                        <Button
                            text="Crear"
                            onClick={onBotonClickHandler}
                            ruta={""}
                        />

                    </form>
                </section>
                <Footer />
            </section>
        </>
    )

}

export default SignIn;