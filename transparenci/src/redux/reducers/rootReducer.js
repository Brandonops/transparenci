import { combineReducers } from "redux";
import { userReducer } from './userReducer.js'
import { allUsersReducer } from "./allUsersReducer.js";




const rootReducer = combineReducers({
    userReducer,
    allUsersReducer
})

export default rootReducer;