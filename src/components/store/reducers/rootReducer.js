import { combineReducers } from "redux";
import securityReducer from './security/security';
import nominationReducer from "./nomination/nomination.js";


const rootReducer = combineReducers(
    {
        security: securityReducer,
        nomination: nominationReducer,
    }
)

export default rootReducer;