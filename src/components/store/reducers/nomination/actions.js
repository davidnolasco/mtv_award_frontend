import { privateAxios } from "../../utilis/axios.js";

export const fetchNominationData = (dispatch) => {
    dispatch(
        {
            type: "NOMINATION_START_FETCH",
            payload: null
        }
    )

    privateAxios.get('/api/votes/all')
        .then(({ data }) => {
            //console.log(data);
            dispatch(
                {
                    type: "NOMINATION_FETCH_SUCCESS",
                    payload: data
                }
            )
        })
        .catch((err) => {
            console.log(err);
            dispatch(
                {
                    type: "NOMINATION_FETCH_ERROR",
                    payload: ["Error al traer las nominaciones"]
                }
            )
        });

}

export const sendVotes = (dispatch, arrayVotes) =>{
    dispatch(
        {
            type: "NOMINATION_SENDVOTES_FETCH",
            payload: null
        }
    );
    console.log(arrayVotes)
    for (let i = 0; i < arrayVotes.length; i++) {
        privateAxios.post('/api/votes/sendvotes',{'totalVotes' :arrayVotes[i].totalVotes ,'idNomination':arrayVotes[i].idNomination})
        .then(({ data }) => {
            //console.log(data);
            dispatch(
                {
                    type: "NOMINATION_SENDVOTES_SUCCESS",
                    payload: data
                }
            )
        })
        .catch((err) => {
            console.log(err);
            dispatch(
                {
                    type: "NOMINATION_SENDVOTES_ERROR",
                    payload: ["Error al enviar los votos."]
                }
            )
        });
    } 
}