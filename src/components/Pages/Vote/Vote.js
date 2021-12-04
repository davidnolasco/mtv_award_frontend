import { useEffect } from "react";
import TopHeader from "../../TopHeader/TopHeader.js";
import Footer from "../../Footer/Footer.js";
import Card from "../../Card/Card.js";
import Button from "../../Button/Button.js";
import "./vote.css";

import WarningVote from "../../WarningVote/WarningVote";
import { useSelector, useDispatch } from "react-redux";
import { fetchNominationData } from "../../store/reducers/nomination/actions";
import { sendVotes } from "../../store/reducers/nomination/actions";

const getSecurity = ({ security }) => security;

const Vote = () => {

    const nomination = useSelector(({ nomination }) => nomination);
    const { user } = useSelector(getSecurity);
    console.log(user);



    const dispatch = useDispatch();
    const getAll = () => {
        fetchNominationData(dispatch);
        console.log(nomination.items)
    }

    let arreglo = [6];
    const getValues = (e) => {
        let card = document.getElementsByClassName('card')
        let values = document.getElementsByClassName('votesOfTheNomination')

        for (let i = 0; i < card.length; i++) {
            let objeto = { idNomination: card[i].id, totalVotes: parseInt(values[i].innerHTML) }
            arreglo[i] = objeto
        }
        sendVotes(dispatch, arreglo)
        //console.log(arreglo);
    }

    useEffect(() => {
        getAll();
    }, nomination.items[0])

    return (
        <section className="vote" >
            <TopHeader />
            {
                user.horaDeDisponibilidad > new Date().getTime()
                    ?
                    <>
                        <section className="vote-container" >
                            <div>
                                <p className="vote-tittle" >Artistas del año</p>
                            </div>
                            <div className="vote-listcards"  >
                                {
                                    nomination.items.map((r) => {
                                        if (r.categories === "ArtistOfTheYear") {
                                            return (<Card
                                                key={r._id}
                                                idNomination={r._id}
                                                urlImage={r.image}
                                                artistName={r.artistName}
                                                nomination={r.nomination}
                                            />)
                                        }
                                    }
                                    )
                                }
                            </div>
                        </section>

                        <section className="vote-container" >
                            <div>
                                <p className="vote-tittle" >Video del año</p>
                            </div>
                            <div className="vote-listcards"  >
                                {
                                    nomination.items.map((r) => {
                                        if (r.categories === "VideoOfTheYear") {
                                            return (<Card
                                                key={r._id}
                                                idNomination={r._id}
                                                urlImage={r.image}
                                                artistName={r.artistName}
                                                nomination={r.nomination}
                                            />)
                                        }
                                    }
                                    )
                                }
                            </div>
                        </section>

                        <section className="vote-sendsection"  >
                            <p>Si ya distribuistes tus votos.</p>
                            <p>¿Estas listo para enviarlos?</p>
                            <br />
                            <Button onClick={getValues}
                                text="Enviar votos"
                            />
                        </section>
                    </>
                    :
                    <WarningVote />


            }


            <Footer />
        </section>
    )
}

export default Vote