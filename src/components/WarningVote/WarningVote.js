import "./WarningVote.css";

const WarningVote = ({ hora }) => {
    const horaComppleta = (hora) => {
        let hour = new Date(hora).getHours().toString();
        let minutos = new Date(hora).getMinutes().toString();
        /*   let segundos = new Date(hora).getHours().toString(); */
        //let tiempoCompleto = tiempo


        return `${hour} horas : ${minutos}`//: ${minutos} : ${segundos}`;
    }
    return (
        <section className="WarningVote">
            <div className="WarningVote-notification">
                Podras votar otra vez dentro de
            </div>
            <div className="WarningVote-hour">
                {
                    horaComppleta(hora)
                }
            </div>
            <p>
                Vuelve mañana para votar denuevo y ve quien ganara el 18 de Diciembre del 2021
            </p>
            <a className="WarningVote-CloseSesion">
                Cerrar Sesión
            </a>
        </section>
    )
}
export default WarningVote;