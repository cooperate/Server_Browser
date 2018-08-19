import { socketClient } from './index'
import { newUser, newMessage } from "../actions/index";

export default function socketListeners(store) {
	socketClient.on('NewUser', payload => {
	  	store.dispatch(newUser(payload));
	});
	socketClient.on('NewMessage', payload => {
	  	store.dispatch(newMessage(payload));
	});
}