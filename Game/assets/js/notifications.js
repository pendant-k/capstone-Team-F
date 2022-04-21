const body = document.querySelector("body");

const fireNotification = (text, color) => {
    const notification = document.createElement("div");
    notification.innerText = text;
    notification.style.backgroundColor = color;
    notification.className = "notification";
    body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) => {
    fireNotification(`${nickname}님이 입장하셨습니다`, "rgb(0,173,181)");
};

export const handleDisconnectUser = ({ nickname }) => {
    fireNotification(`${nickname}님이 퇴장하셨습니다.`, "rgb(181,9,0)");
};
