import socketIOClient from "socket.io-client";

const socketIOEndpoint = "http://127.0.0.1:4001";
export const socketClient = socketIOClient(socketIOEndpoint);
