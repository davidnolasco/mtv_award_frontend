import "./Input.css";

const Input = ({ tipe, label, valor }) => (
    <seccion className="input" >
        <p  className="input-label" >{label}</p>
        <input className="input-tipe" type={tipe} value={valor}></input>
    </seccion>

)

export default Input;