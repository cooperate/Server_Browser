import { NEW_USER, NEW_MESSAGE, NEW_ROOM, USER_LOGIN } from "../constants/action-types";
export const newUser = user => ({ type: NEW_USER, payload: user });
export const userSelf = user => ({ type: USER_LOGIN, payload: user });
export const newMessage = message => ({ type: NEW_MESSAGE, payload: message });
export const newRoom = room => ({ type: NEW_ROOM, payload: room });
