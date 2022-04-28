const info = document.getElementById("jsInfo");

export const handleGameStart = ({ timer }) => {
    info.innerText = `${timer}초 후 게임이 시작됩니다.`;
};

export const handleGameStarted = ({ msg }) => {
    const word = document.createElement("span");
    word.innerText = msg;

    // word styling
    word.style.color = "white";
    word.style.backgroundColor = "black";
    word.style.marginLeft = "30px";
    info.innerText = `게임이 시작되었습니다`;
    info.appendChild(word);
};
