import { SET_USER_DATA } from "../action-types/user-action-types";

const initialState = null

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return state = action.userData
        default:
            return state;
    }
}