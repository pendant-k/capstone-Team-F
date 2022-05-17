import { getSocket } from "./sockets";

const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");

const appendMsg = (text, nickname) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="author ${nickname ? "out" : "self"}">${
        nickname ? nickname : "나"
    }:</span> ${text}
    `;

    messages.appendChild(li);

    if (messages.isScrollBottom) {
        messages.scrollTop = messages.scrollHeight;
      }
};

// 자동 스크롤 기능 추가

messages.isScrollBottom = true;

messages.addEventListener("scroll", (event) => {
  if (event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight) {
    messages.isScrollBottom = true;
  } else {
    messages.isScrollBottom = false;
  }
});

export const handleNewMessage = ({ message, nickname }) =>
    appendMsg(message, nickname);

// Send chat messages
const handleSendMsg = (event) => {
    // submit 새로고침 방지
    event.preventDefault();
    const input = sendMsg.querySelector("input");
    const { value } = input;
    getSocket().emit(window.events.sendMsg, { message: value });
    input.value = "";
    appendMsg(value);
};

if (sendMsg) {
    sendMsg.addEventListener("submit", handleSendMsg);
}
