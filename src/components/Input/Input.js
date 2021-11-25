import "./Input.css";

const Input = ({tipe,label,valor}) => (
   <seccion>
       <p>{label}</p>
       <input type={tipe} value={valor}></input>
   </seccion>    
    
)

export default Input;