import events from "./events";

let sockets = [];
let timer = 20;
let inProgress = false;
// 제시어 -> 랜덤 설정 예정
let msg = "강아지";

// server.js에서 받아온 socket과 io(서버 자체)를 통해 socket 이벤트 처리
const socketController = (socket, io) => {
    // socket.broadcast.emit 쉽게 정리
    const broadcast = (event, data) => socket.broadcast.emit(event, data);
    // io.emit (클라이언트 전체에게 이벤트 처리하기)
    const broadcastAll = (event, data) => io.emit(event, data);
    const sendUserUpdate = () => {
        broadcastAll(events.userUpdate, { sockets });
    };

    const startGameTimer = () => {};

    const startGame = () => {
        if (inProgress === false) {
            inProgress = true;
            setTimeout(() => broadcastAll(events.gameStarted, { msg }), 2000);
        }
    };

    const endGame = () => {
        inProgress = false;
    };

    socket.on(events.setNickname, ({ nickname }) => {
        socket.nickname = nickname;
        // add user to server's user list
        sockets.push({ id: socket.id, point: 0, nickname: nickname });
        // count # of users
        broadcast(events.newUser, { nickname });
        sendUserUpdate();
        if (sockets.length === 2) {
            startGame();
        }
    });
    socket.on(events.disconnect, () => {
        sockets = sockets.filter(
            // remove user when he disconnected
            (aSocket) => aSocket.id !== socket.id
        );
        // discount # of users
        broadcast(events.disconnected, { nickname: socket.nickname });
        sendUserUpdate();
        if (sockets.length === 1) {
            endGame();
        }
    });

    socket.on(events.sendMsg, ({ message }) => {
        broadcast(events.newMsg, { message, nickname: socket.nickname });
    });

    socket.on(events.uploadImg, () => {});
};

setInterval(() => console.log(sockets), 10000);

export default socketController;

// 제시어 랜덤
// 데이터 넘기기
// 타이머 기능
