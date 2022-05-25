import events from "./events";
import axios from "axios";
import { keywordsEng, keywordsKor } from "./constants";

// global variables
let sockets = [];
let userDataList = [];
// game start timer
// game start boolean
// true 일 때 유저 입장 막기
let inProgress = false;
let isPlaying = false;
// 제시어 -> 랜덤 설정 예정
let keywordIdx = 0;
let msg = "";
let keywordToSend = "";
let readyCount = 0;

const AIURL = "";

function getRandomNumber() {
    let result = Math.floor(Math.random() * 99);
    return result;
}

// game reset function
const resetGame = () => {
    inProgress = false;
    readyCount = 0;
    userDataList = [];
    keywordIdx = 0;
    keywordToSend = "";
};

const getResult = async (userDataList) => {
    // AI server url 넣을 거임
    const url = AIURL;
    let json = JSON.stringify({ keyword: keywordToSend, users: userDataList });
    try {
        let gameResult = await axios.post(url, json, {
            headers: { "content-type": "application/json" },
        });
        let obj = JSON.parse(gameResult);
        return obj;
    } catch (e) {
        console.log("python server connect error", e);
    }
};

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
        let startTimer = 5;
        if (inProgress === false) {
            inProgress = true;
            // game start count down
            let startCountDown = setInterval(() => {
                broadcastAll(events.startCount, { timer: startTimer });
                console.log("game timer", startTimer);
                startTimer--;
                if (startTimer === -1) {
                    keywordIdx = getRandomNumber();
                    msg = keywordsKor[keywordIdx];
                    keywordToSend = keywordsEng[keywordIdx];
                    broadcastAll(events.gameStarted, { msg });
                    inGame();
                    clearInterval(startCountDown);
                }
                if (!inProgress) {
                    clearInterval(startCountDown);
                }
            }, 1000);
        }
    };

    const inGame = () => {
        let gameTimer = 10;
        let gameCountDown = setInterval(() => {
            broadcastAll(events.gameCount, { timer: gameTimer });
            gameTimer--;
            if (gameTimer === -1) {
                console.log("게임 종료!");
                broadcastAll(events.gameEnd);
                clearInterval(gameCountDown);
            }
        }, 1000);
    };
    const endGameDisconnect = () => {
        inProgress = false;
        broadcastAll(events.gameDisconnect);
    };

    // inProgress game 입장 금지 기능

    socket.on(events.setNickname, ({ nickname }) => {
        socket.nickname = nickname;
        // add user to server's user list
        sockets.push({ id: socket.id, nickname: nickname });
        // count # of users
        broadcast(events.newUser, { nickname });
        sendUserUpdate();
        // if (sockets.length === 2) {
        //     startGame();
        // }
    });

    socket.on(events.disconnect, () => {
        sockets = sockets.filter(
            // remove user when he disconnected
            (aSocket) => aSocket.id !== socket.id
        );
        // discount # of users
        broadcast(events.disconnected, { nickname: socket.nickname });
        sendUserUpdate();
        if (inProgress && sockets.length < 2) {
            endGameDisconnect();
        }
    });

    socket.on(events.sendMsg, ({ message }) => {
        broadcast(events.newMsg, { message, nickname: socket.nickname });
    });

    socket.on(events.uploadImg, async ({ user }) => {
        userDataList.push(user);
        if (userDataList.length === sockets.length) {
            console.log("send img to server correctly");
            let resObj = await getResult(userDataList);
            let arr = resObj;
            console.log(arr);
            broadcastAll(events.gameResult, { arr });
        }
    });
    socket.on(events.gameReady, () => {
        ++readyCount;
        console.log("ready count", readyCount);
        if (readyCount === sockets.length) {
            startGame();
        }
    });

    socket.on(events.gameReadyNot, () => {
        --readyCount;
    });
    // game reset하기
    socket.on(events.restart, () => {
        resetGame();
        // 브라우저 결과창 모두 닫기?
        broadcastAll(events.gameReset, {});
    });
};

// 접속한 유저 print
// setInterval(() => console.log(sockets), 10000);

export default socketController;

// game reset function
// game restart flow
// 결과창 출력 UI작업 + 기능 작업 -> 우승자 추출하기
// event 정리
