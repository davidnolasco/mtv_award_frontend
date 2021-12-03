const initialState = {
    artistName:"",
    image:"",
    nomination:"",
    totalVotes:0,
    categories:"",
    items:[]

}

const nominationReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "NOMINATION_START_FETCH":
            return {
                ...state
            };
        case "NOMINATION_FETCH_SUCCESS":
            return{
                //...state,
                items: [...payload]
            }
        default:
            return state;
    }
}

export default nominationReducer;
