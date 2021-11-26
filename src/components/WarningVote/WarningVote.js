import "./WarningVote.css";

const WarningVote = ()=>(
    <section className="WarningVote">
        <div className="WarningVote-notification">
            Podras votar otra vez dentro de
        </div>
        <div className="WarningVote-hour">
            24:00:00
        </div>
        <p>
            Vuelve mañana para votar denuevo y ve quien ganara el 18 de Diciembre del 2021
        </p>
        <a className="WarningVote-CloseSesion">
            Cerrar Sesión
        </a>
    </section>
)

export default WarningVote;