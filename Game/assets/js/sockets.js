import { handleNewMessage } from "./chat";
import { handleDisconnectUser, handleNewUser } from "./notifications";

let socket = null;

export const getSocket = () => socket;
// getSocket.emit() ....

export const updateSocket = (aSocket) => (socket = aSocket);

export const initSockets = (aSocket) => {
    const { events } = window;
    updateSocket(aSocket);
    aSocket.on(events.newUser, handleNewUser);
    aSocket.on(events.disconnected, handleDisconnectUser);
    aSocket.on(events.newMsg, handleNewMessage);
};
