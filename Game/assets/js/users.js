const users = document.getElementById("jsUsers");
// 스타일링은 아래에서 자바스크립트로 진행해주세요.

export const handleUserUpdate = ({ sockets }) => {
    console.log(sockets);
    users.innerHTML = "";
    const count = document.createElement("span");
    count.innerText = `현재 ${sockets.length}명 접속중\n`;
    count.style.color = "white";
    count.style.fontSize = "26px";
    users.appendChild(count);

    sockets.map((socket) => {
        const user = document.createElement("span");
        user.style.color = "white";
        user.innerText = `${socket.nickname} 님,    `;
        users.appendChild(user);
    });
};
