import { GET_ALL_USERS, SET_USER_DATA } from "../action-types/user-action-types";

export const setUserData = (userData) => {
    return {
      type: SET_USER_DATA,
      userData,
      };
  };


export const setAllUsers = (usersData) => {
    return {
        type: GET_ALL_USERS,
        usersData
    }
}
  