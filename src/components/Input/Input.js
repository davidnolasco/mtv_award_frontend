import "./Input.css";

const Input = ({ tipe, label, valor,name, onChange }) => (
    <seccion className="input" >
        <p  className="input-label" >{label}</p>
        <input className="input-tipe" name={name} onChange={onChange} type={tipe} value={valor}></input>
    </seccion>

)

export default Input;