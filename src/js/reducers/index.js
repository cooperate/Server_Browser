import { NEW_USER, NEW_MESSAGE, NEW_ROOM, USER_LOGIN, USER_JOIN_ROOM, USER_LEAVE_ROOM, LOAD_USERS, LOAD_ROOMS, LOAD_USER_ROOMS } from "../constants/action-types";
import { socketClient } from "../socket";

const initialState = {
  users: [],
  messages: [],
  user: [],
  rooms: [],
  userRoom: []
}

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
    case USER_JOIN_ROOM:
      return { ...state, userRoom: [...state.userRoom, action.payload] };
    case USER_LEAVE_ROOM:
      return { ...state, userRoom: [...state.userRoom.filter(({ id }) => id !== action.index)] };
    case LOAD_USERS:
      return { ...state, users: action.payload };
    case LOAD_ROOMS:
      return { ...state, rooms: action.payload };
    case LOAD_USER_ROOMS:
      return { ...state, userRoom: action.payload };
    default:
      return state;
  }
}

function insertItem(array, action) {
    return [
        ...array.slice(0, action.index),
        action.item,
        ...array.slice(action.index)
    ];
}

function removeItem(array, action) {
    return [
        ...array.slice(0, action.index),
        ...array.slice(action.index + 1)
    ];
}

function updateNestedField(stateObject, payload, index) {
    var stateCopy = Object.assign(stateObject);
    stateCopy[index] = [
      ...stateCopy[index],
      payload
    ];
    return stateCopy;
}

export default rootReducer;