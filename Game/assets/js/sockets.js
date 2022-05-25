import { handleNewMessage } from "./chat";
import { handleDisconnectUser, handleNewUser } from "./notifications";
import {
    handleGameStart,
    handleGameStarted,
    handleGameCount,
    handleGameEnd,
    handleGameResult,
    handleGameDisconnect,
} from "./game";
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
    aSocket.on(events.startCount, handleGameStart);
    aSocket.on(events.gameStarted, handleGameStarted);
    aSocket.on(events.gameCount, handleGameCount);
    aSocket.on(events.gameEnd, handleGameEnd);
    aSocket.on(events.gameResult, handleGameResult);
    aSocket.on(events.gameDisconnect, handleGameDisconnect);
};
