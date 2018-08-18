import { NEW_USER } from "../constants/action-types";
export const newUser = user => ({ type: NEW_USER, payload: user });