import { GET_USERS_SUCCESS } from "./User.type";


const initialState = {
  usersData: []
}


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        usersData: action.payload
      }
    default:
      return state
  }
}

export default usersReducer;