// socket event 정리
// startCount => 인원 2명 이상일 때 카운트 시작
const events = {
    setNickname: "setNickname",
    newUser: "newUser",
    disconnect: "disconnect",
    disconnected: "disconnected",
    sendMsg: "sendMsg",
    newMsg: "newMsg",
    userUpdate: "userUpdate",
    uploadImg: "uploadImg",
    gameReady: "gameReady",
    gameStart: "gameStart",
    startCount: "startCount",
    gameStarted: "gameStarted",
    gameCount: "gameCount",
    gameEnd: "gameEnd",
    gameResult: "gameResult",
    gameRestart: "gameRestart",
    gameReadyNot: "gameReadyNot",
};

export default events;
