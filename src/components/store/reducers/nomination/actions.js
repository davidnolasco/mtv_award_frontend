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