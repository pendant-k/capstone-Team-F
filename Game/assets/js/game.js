import { getSocket } from "./sockets";

const info = document.getElementById("jsInfo");
const counter = document.getElementById("jsTimer");
const answer = document.getElementById("jsKeyword");
const gameResult = document.getElementById("jsResult");
const restartBtn = document.getElementById("jsRestart");
const ready = document.getElementById("jsReady");

let isReady = false;

export const handleGameStart = ({ timer }) => {
    info.innerText = `${timer}초 후 게임이 시작됩니다.`;
};

export const handleGameStarted = ({ msg }) => {
    const word = document.createElement("span");
    word.innerText = msg;

    info.innerText = `게임이 시작되었습니다.\n제시어를 캔버스에 그려주세요!`;
    answer.appendChild(word);
};

export const handleGameCount = ({ timer }) => {
    counter.innerText = `${timer}`;
};

export const handleGameEnd = () => {
    // 게임 종료 시점의 canvas dataurl 가져오기
    const image = document.getElementById("jsCanvas");
    // nickname 브라우저에서 유저 정보 가져오기
    let nickname = localStorage.getItem("nickname");
    // dataURL
    let dataURL = image.toDataURL();
    let user = { nickname: nickname, image: dataURL };

    console.log(dataURL);
    getSocket().emit(window.events.uploadImg, { user: user });
};

export const handleGameResult = ({ result }) => {
    gameResult.className = "gameEnd";
    const winner = document.createElement("span");
    winner.innerText = result;
    gameResult.appendChild(winner);
};

if (restartBtn) {
    restartBtn.addEventListener("click", () => {
        console.log("btn clicked");
    });
}

if (ready) {
    ready.addEventListener("click", () => {
        if (!isReady) {
            getSocket().emit(window.events.gameReady, {});
            ready.innerText = "준비 취소";
            console.log("im ready");
            isReady = true;
        } else if (isReady) {
            getSocket().emit(window.events.gameReadyNot, {});
            ready.innerText = "게임 준비";
            console.log("im not ready");
            isReady = false;
        }
    });
}
