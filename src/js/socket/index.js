import socketIOClient from "socket.io-client";

const socketIOEndpoint = "http://159.89.158.252:4001";
export const socketClient = socketIOClient(socketIOEndpoint);
