import { getSocket } from "./sockets";

const info = document.getElementById("jsInfo");
const counter = document.getElementById("jsTimer");
const answer = document.getElementById("jsKeyword");

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
