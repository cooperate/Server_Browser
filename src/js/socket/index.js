import socketIOClient from "socket.io-client";

const socketIOEndpoint = "http://0.0.0.0:4001";
export const socketClient = socketIOClient(socketIOEndpoint);
