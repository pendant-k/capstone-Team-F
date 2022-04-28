import { handleNewMessage } from "./chat";
import { handleDisconnectUser, handleNewUser } from "./notifications";
import { handleGameStart, handleGameStarted } from "./game";
import { handleUploadImg } from "./uploadImg";
import { handleUserUpdate } from "./users";

let socket = null;

// socket 가져오기
export const getSocket = () => socket;
// getSocket.emit() ....

export const updateSocket = (aSocket) => (socket = aSocket);

// login.js에서 초기화 실행함 + 소켓 통신 시작
export const initSockets = (aSocket) => {
    const { events } = window;
    updateSocket(aSocket);
    aSocket.on(events.newUser, handleNewUser);
    aSocket.on(events.disconnected, handleDisconnectUser);
    aSocket.on(events.newMsg, handleNewMessage);
    aSocket.on(events.uploadImg, handleUploadImg);
    aSocket.on(events.userUpdate, handleUserUpdate);
    aSocket.on(events.gameStart, handleGameStart);
    aSocket.on(events.gameStarted, handleGameStarted);
};
