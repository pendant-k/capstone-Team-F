import events from "./events";

let sockets = [];
// game start timer
// game start boolean
// true 일 때 유저 입장 막기
let inProgress = false;
let isPlaying = false;
// 제시어 -> 랜덤 설정 예정
let msg = "강아지";

// server.js에서 받아온 socket과 io(서버 자체)를 통해 socket 이벤트 처리
const socketController = (socket, io) => {
    // socket.broadcast.emit 쉽게 정리
    // broadcast -> 이벤트 발생시킨 클라이언트를 제외한 모든 연결된 클라이언트에 이벤트 발생
    const broadcast = (event, data) => socket.broadcast.emit(event, data);
    // io.emit (클라이언트 전체에게 이벤트 처리하기)
    // 모든 클라이언트에 이벤트 발생
    const broadcastAll = (event, data) => io.emit(event, data);
    const sendUserUpdate = () => {
        broadcastAll(events.userUpdate, { sockets });
    };

    const startGame = () => {
        console.log("game start!");
        let startTimer = 20;
        if (inProgress === false) {
            inProgress = true;
            // game start count down
            let startCountDown = setInterval(() => {
                broadcastAll(events.startCount, { timer: startTimer });
                console.log(startTimer);
                startTimer--;
                if (startTimer === 0) {
                    broadcastAll(events.gameStarted, { msg });
                    clearInterval(startCountDown);
                }
            }, 1000);
        }
    };

    const endGame = () => {
        console.log("game end");
        inProgress = false;
        console.log(inProgress);
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

// 접속한 유저 print
setInterval(() => console.log(sockets), 10000);

export default socketController;
