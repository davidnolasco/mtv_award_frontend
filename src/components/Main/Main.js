import { Link } from 'react-router-dom';
import { useState } from "react";
import { useSelector } from "react-redux";
import './Main.css';

const getSecurity = ({ security }) => security;

const Main = () => {
    const security = useSelector(getSecurity);
    const votes = "/users/vote";
    const iniciarSesion = "/users/login";
    
    return(
    <section className="main-container">
        <div className="main-content">
            <img className="main-imagen" src="https://raw.githubusercontent.com/gustavo-exe/MTV_Award_Files/main/images/DonaMtv.png" alt="Logo MTV"></img>
            <Link to={security.user.email ? votes : iniciarSesion}> <p className="main-boton" >Votar ahora</p></Link>
        </div>
    </section>
)}

export default Main;