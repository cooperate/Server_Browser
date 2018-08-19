import { NEW_USER, NEW_MESSAGE, NEW_ROOM, USER_LOGIN } from "../constants/action-types";
import { socketClient } from "../socket";

const initialState = {
  users: [],
  messages: [],
  user: [],
  rooms: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return { ...state, users: [...state.users, action.payload] };
    case NEW_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case USER_LOGIN:
      return { ...state, user: [...state.user, action.payload] };
    case NEW_ROOM:
      return { ...state, rooms: [...state.rooms, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;