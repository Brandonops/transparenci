import { GET_ALL_USERS } from "../action-types/user-action-types";

const initialState = null

export const allUsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_USERS:
            return state = action.usersData;
        default:
            return state;
    }
}