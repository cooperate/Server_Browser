import { socketClient } from './index'
import { newUser, newMessage, newRoom, userJoinRoom, userLeaveRoom, loadUsers, loadRooms, loadUserRooms } from "../actions/index";

export default function socketListeners(store) {
	socketClient.on('NewUser', payload => {
	  	store.dispatch(newUser(payload));
	});
	socketClient.on('NewMessage', payload => {
	  	store.dispatch(newMessage(payload));
	});
	socketClient.on('NewRoom', payload => {
	  	store.dispatch(newRoom(payload));
	});
	socketClient.on('NewUserRoom', payload => {
	  	store.dispatch(userJoinRoom(payload));
	});
	socketClient.on('UserLeaveRoom', payload => {
		store.dispatch(userLeaveRoom(payload));
	});
	socketClient.on('LoadUsers', payload => {
		store.dispatch(loadUsers(payload.users));
		store.dispatch(loadUserRooms(payload.userRooms));
	});
	socketClient.on('LoadRooms', payload => {
		store.dispatch(loadRooms(payload));
	});
}