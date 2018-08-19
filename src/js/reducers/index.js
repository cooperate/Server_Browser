import { NEW_USER, NEW_MESSAGE, USER_LOGIN } from "../constants/action-types";
import { socketClient } from "../socket";

const initialState = {
  users: [],
  messages: [],
  user: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return { ...state, users: [...state.users, action.payload] };
    case NEW_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case USER_LOGIN:
      return { ...state, user: [...state.user, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;