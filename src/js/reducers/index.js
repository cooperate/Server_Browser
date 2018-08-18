import { NEW_USER } from "../constants/action-types";
const initialState = {
  users: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};
export default rootReducer;