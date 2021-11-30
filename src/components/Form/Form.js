import Input from "../Input/Input.js"
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Form.css";

import { useSelector, useDispatch } from "react-redux";
import { publicAxios } from "../../components/store/utilis/axios";

//const getSecurity = ({ security }) => security;

const Form = ({ title, tipeBoton, textBoton }) => {
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

   //const security = useSelector(getSecurity);
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
      <form className="form" >
         <p className="form-tittle" >{title}</p>

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
               onChange={ onChangeHandler}
            ></Input>
         </div>
         <Link to="/users/vote"> 
            <Button
               text={textBoton}
               onClick={onBotonClickHandler}
            />
         </Link>
      
      </form>
   )
}

export default Form;