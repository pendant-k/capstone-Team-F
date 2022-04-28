(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n        <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "나", ":</span> ").concat(text, "\n    ");
  messages.appendChild(li);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
}; // Send chat messages


exports.handleNewMessage = handleNewMessage;

var handleSendMsg = function handleSendMsg(event) {
  // submit 새로고침 방지
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlTmV3TWVzc2FnZSIsIm1lc3NhZ2UiLCJoYW5kbGVTZW5kTXNnIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNsQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCw0Q0FDMEJILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEN0MsZ0JBRUlBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEdBRjFCLHNCQUdZRCxJQUhaO0FBTUFMLEVBQUFBLFFBQVEsQ0FBQ1UsV0FBVCxDQUFxQkgsRUFBckI7QUFDSCxDQVREOztBQVdPLElBQU1JLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZTixRQUFaLFFBQVlBLFFBQVo7QUFBQSxTQUM1QkYsU0FBUyxDQUFDUSxPQUFELEVBQVVOLFFBQVYsQ0FEbUI7QUFBQSxDQUF6QixDLENBR1A7Ozs7O0FBQ0EsSUFBTU8sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDN0I7QUFDQUEsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBTUMsS0FBSyxHQUFHYixPQUFPLENBQUNjLGFBQVIsQ0FBc0IsT0FBdEIsQ0FBZDtBQUNBLE1BQVFDLEtBQVIsR0FBa0JGLEtBQWxCLENBQVFFLEtBQVI7QUFDQSw0QkFBWUMsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNsQixPQUEvQixFQUF3QztBQUFFUyxJQUFBQSxPQUFPLEVBQUVNO0FBQVgsR0FBeEM7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxTQUFTLENBQUNjLEtBQUQsQ0FBVDtBQUNILENBUkQ7O0FBVUEsSUFBSWYsT0FBSixFQUFhO0FBQ1RBLEVBQUFBLE9BQU8sQ0FBQ21CLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DVCxhQUFuQztBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xuXG5jb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNZXNzYWdlc1wiKTtcbmNvbnN0IHNlbmRNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzU2VuZE1zZ1wiKTtcblxuY29uc3QgYXBwZW5kTXNnID0gKHRleHQsIG5pY2tuYW1lKSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3BhbiBjbGFzcz1cImF1dGhvciAke25pY2tuYW1lID8gXCJvdXRcIiA6IFwic2VsZlwifVwiPiR7XG4gICAgICAgIG5pY2tuYW1lID8gbmlja25hbWUgOiBcIuuCmFwiXG4gICAgfTo8L3NwYW4+ICR7dGV4dH1cbiAgICBgO1xuXG4gICAgbWVzc2FnZXMuYXBwZW5kQ2hpbGQobGkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld01lc3NhZ2UgPSAoeyBtZXNzYWdlLCBuaWNrbmFtZSB9KSA9PlxuICAgIGFwcGVuZE1zZyhtZXNzYWdlLCBuaWNrbmFtZSk7XG5cbi8vIFNlbmQgY2hhdCBtZXNzYWdlc1xuY29uc3QgaGFuZGxlU2VuZE1zZyA9IChldmVudCkgPT4ge1xuICAgIC8vIHN1Ym1pdCDsg4jroZzqs6Dsuagg67Cp7KeAXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dCA9IHNlbmRNc2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xuICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7IG1lc3NhZ2U6IHZhbHVlIH0pO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBhcHBlbmRNc2codmFsdWUpO1xufTtcblxuaWYgKHNlbmRNc2cpIHtcbiAgICBzZW5kTXNnLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU2VuZE1zZyk7XG59XG4iXX0=
},{"./sockets":7}],2:[function(require,module,exports){
"use strict";

require("./login");

require("./sockets");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMWRhMjZiOS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9zb2NrZXRzXCI7XG5pbXBvcnQgXCIuL2NoYXRcIjtcbmltcG9ydCBcIi4vcGFpbnRcIjtcbiJdfQ==
},{"./chat":1,"./login":4,"./paint":6,"./sockets":7}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGameStarted = exports.handleGameStart = void 0;
var info = document.getElementById("jsInfo");

var handleGameStart = function handleGameStart(_ref) {
  var timer = _ref.timer;
  info.innerText = "".concat(timer, "\uCD08 \uD6C4 \uAC8C\uC784\uC774 \uC2DC\uC791\uB429\uB2C8\uB2E4.");
};

exports.handleGameStart = handleGameStart;

var handleGameStarted = function handleGameStarted(_ref2) {
  var msg = _ref2.msg;
  var word = document.createElement("span");
  word.innerText = msg; // word styling

  word.style.color = "white";
  word.style.backgroundColor = "black";
  word.style.marginLeft = "30px";
  info.innerText = "\uAC8C\uC784\uC774 \uC2DC\uC791\uB418\uC5C8\uC2B5\uB2C8\uB2E4";
  info.appendChild(word);
};

exports.handleGameStarted = handleGameStarted;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuanMiXSwibmFtZXMiOlsiaW5mbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoYW5kbGVHYW1lU3RhcnQiLCJ0aW1lciIsImlubmVyVGV4dCIsImhhbmRsZUdhbWVTdGFydGVkIiwibXNnIiwid29yZCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luTGVmdCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFiOztBQUVPLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUMxQ0osRUFBQUEsSUFBSSxDQUFDSyxTQUFMLGFBQW9CRCxLQUFwQjtBQUNILENBRk07Ozs7QUFJQSxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLFFBQWE7QUFBQSxNQUFWQyxHQUFVLFNBQVZBLEdBQVU7QUFDMUMsTUFBTUMsSUFBSSxHQUFHUCxRQUFRLENBQUNRLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBRCxFQUFBQSxJQUFJLENBQUNILFNBQUwsR0FBaUJFLEdBQWpCLENBRjBDLENBSTFDOztBQUNBQyxFQUFBQSxJQUFJLENBQUNFLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixPQUFuQjtBQUNBSCxFQUFBQSxJQUFJLENBQUNFLEtBQUwsQ0FBV0UsZUFBWCxHQUE2QixPQUE3QjtBQUNBSixFQUFBQSxJQUFJLENBQUNFLEtBQUwsQ0FBV0csVUFBWCxHQUF3QixNQUF4QjtBQUNBYixFQUFBQSxJQUFJLENBQUNLLFNBQUw7QUFDQUwsRUFBQUEsSUFBSSxDQUFDYyxXQUFMLENBQWlCTixJQUFqQjtBQUNILENBVk0iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0luZm9cIik7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVHYW1lU3RhcnQgPSAoeyB0aW1lciB9KSA9PiB7XG4gICAgaW5mby5pbm5lclRleHQgPSBgJHt0aW1lcn3stIgg7ZuEIOqyjOyehOydtCDsi5zsnpHrkKnri4jri6QuYDtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVHYW1lU3RhcnRlZCA9ICh7IG1zZyB9KSA9PiB7XG4gICAgY29uc3Qgd29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHdvcmQuaW5uZXJUZXh0ID0gbXNnO1xuXG4gICAgLy8gd29yZCBzdHlsaW5nXG4gICAgd29yZC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICB3b3JkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICB3b3JkLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjMwcHhcIjtcbiAgICBpbmZvLmlubmVyVGV4dCA9IGDqsozsnoTsnbQg7Iuc7J6R65CY7JeI7Iq164uI64ukYDtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHdvcmQpO1xufTtcbiJdfQ==
},{}],4:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin"); // const logout = document.getElementById("jsLogout");

var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME); // socket emit setNickname event to server
// window 객체 공부하기 global variable in browsers

var logIn = function logIn(nickname) {
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
}; // local storage에 nickname 정보가 있는지 check 후 분기시킴


if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  console.log(value);
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN; // logout.className = LOGGED_IN;
  // socket에 넘겨주기

  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}

var handleLogout = function handleLogout(e) {
  localStorage.clear();
  location.reload();
}; // if (logout) {
//     const button = document.createElement("button");
//     button.innerText = "로그아웃";
//     button.addEventListener("click", handleLogout);
//     logout.appendChild(button);
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUxvZ291dCIsImNsZWFyIiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCLEMsQ0FDQTs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDQSxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkwsUUFBckIsQ0FBakIsQyxDQUVBO0FBQ0E7O0FBQ0EsSUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0gsUUFBRCxFQUFjO0FBQ3hCLE1BQU1JLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxXQUExQixFQUF1QztBQUFFVCxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBdkM7QUFDQSw0QkFBWUksTUFBWjtBQUNILENBSkQsQyxDQU1BOzs7QUFDQSxJQUFJSixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDbkJSLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJaLFVBQWpCO0FBQ0gsQ0FGRCxNQUVPO0FBQ0hOLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJYLFNBQWpCO0FBQ0FJLEVBQUFBLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0g7O0FBRUQsSUFBTVcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDNUJBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR25CLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBQ0EsTUFBUXFCLEtBQVIsR0FBa0JELEtBQWxCLENBQVFDLEtBQVI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQUQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxZQUFZLENBQUNpQixPQUFiLENBQXFCckIsUUFBckIsRUFBK0JrQixLQUEvQjtBQUNBdkIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlgsU0FBakIsQ0FQNEIsQ0FRNUI7QUFDQTs7QUFDQUksRUFBQUEsS0FBSyxDQUFDWSxLQUFELENBQUw7QUFDSCxDQVhEOztBQVlBLElBQUlwQixTQUFKLEVBQWU7QUFDWEEsRUFBQUEsU0FBUyxDQUFDd0IsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNSLGdCQUFyQztBQUNIOztBQUVELElBQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNSLENBQUQsRUFBTztBQUN4QlgsRUFBQUEsWUFBWSxDQUFDb0IsS0FBYjtBQUNBQyxFQUFBQSxRQUFRLENBQUNDLE1BQVQ7QUFDSCxDQUhELEMsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0cyB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xuLy8gY29uc3QgbG9nb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ291dFwiKTtcblxuY29uc3QgTklDS05BTUUgPSBcIm5pY2tuYW1lXCI7XG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xuXG4vLyBzb2NrZXQgZW1pdCBzZXROaWNrbmFtZSBldmVudCB0byBzZXJ2ZXJcbi8vIHdpbmRvdyDqsJ3ssrQg6rO167aA7ZWY6riwIGdsb2JhbCB2YXJpYWJsZSBpbiBicm93c2Vyc1xuY29uc3QgbG9nSW4gPSAobmlja25hbWUpID0+IHtcbiAgICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XG4gICAgc29ja2V0LmVtaXQod2luZG93LmV2ZW50cy5zZXROaWNrbmFtZSwgeyBuaWNrbmFtZSB9KTtcbiAgICBpbml0U29ja2V0cyhzb2NrZXQpO1xufTtcblxuLy8gbG9jYWwgc3RvcmFnZeyXkCBuaWNrbmFtZSDsoJXrs7TqsIAg7J6I64qU7KeAIGNoZWNrIO2bhCDrtoTquLDsi5ztgrRcbmlmIChuaWNrbmFtZSA9PT0gbnVsbCkge1xuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX09VVDtcbn0gZWxzZSB7XG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gICAgbG9nSW4obmlja25hbWUpO1xufVxuXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcbiAgICAvLyBsb2dvdXQuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xuICAgIC8vIHNvY2tldOyXkCDrhJjqsqjso7zquLBcbiAgICBsb2dJbih2YWx1ZSk7XG59O1xuaWYgKGxvZ2luRm9ybSkge1xuICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm1TdWJtaXQpO1xufVxuXG5jb25zdCBoYW5kbGVMb2dvdXQgPSAoZSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xufTtcbi8vIGlmIChsb2dvdXQpIHtcbi8vICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuLy8gICAgIGJ1dHRvbi5pbm5lclRleHQgPSBcIuuhnOq3uOyVhOybg1wiO1xuLy8gICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTG9nb3V0KTtcbi8vICAgICBsb2dvdXQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbi8vIH1cbiJdfQ==
},{"./sockets":7}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewUser = exports.handleDisconnectUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  fireNotification("".concat(nickname, "\uB2D8\uC774 \uC785\uC7A5\uD558\uC168\uC2B5\uB2C8\uB2E4"), "rgb(0,173,181)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnectUser = function handleDisconnectUser(_ref2) {
  var nickname = _ref2.nickname;
  fireNotification("".concat(nickname, "\uB2D8\uC774 \uD1F4\uC7A5\uD558\uC168\uC2B5\uB2C8\uB2E4."), "rgb(181,9,0)");
};

exports.handleDisconnectUser = handleDisconnectUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3RDLE1BQU1DLFlBQVksR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FELEVBQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QkosSUFBekI7QUFDQUUsRUFBQUEsWUFBWSxDQUFDRyxLQUFiLENBQW1CQyxlQUFuQixHQUFxQ0wsS0FBckM7QUFDQUMsRUFBQUEsWUFBWSxDQUFDSyxTQUFiLEdBQXlCLGNBQXpCO0FBQ0FYLEVBQUFBLElBQUksQ0FBQ1ksV0FBTCxDQUFpQk4sWUFBakI7QUFDSCxDQU5EOztBQVFPLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDM0NYLEVBQUFBLGdCQUFnQixXQUFJVyxRQUFKLDhEQUEwQixnQkFBMUIsQ0FBaEI7QUFDSCxDQUZNOzs7O0FBSUEsSUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixRQUFrQjtBQUFBLE1BQWZELFFBQWUsU0FBZkEsUUFBZTtBQUNsRFgsRUFBQUEsZ0JBQWdCLFdBQUlXLFFBQUosK0RBQTJCLGNBQTNCLENBQWhCO0FBQ0gsQ0FGTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuY29uc3QgZmlyZU5vdGlmaWNhdGlvbiA9ICh0ZXh0LCBjb2xvcikgPT4ge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgbm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobm90aWZpY2F0aW9uKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHsgbmlja25hbWUgfSkgPT4ge1xuICAgIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV964uY7J20IOyeheyepe2VmOyFqOyKteuLiOuLpGAsIFwicmdiKDAsMTczLDE4MSlcIik7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlRGlzY29ubmVjdFVzZXIgPSAoeyBuaWNrbmFtZSB9KSA9PiB7XG4gICAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX3ri5jsnbQg7Ye07J6l7ZWY7IWo7Iq164uI64ukLmAsIFwicmdiKDE4MSw5LDApXCIpO1xufTtcbiJdfQ==
},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var remove = document.getElementById("jsRemove");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE - 100;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  ctx.lineTo(x, y);
  ctx.stroke();
};

function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!painting) {
    beginPath(x, y); // getSocket().emit(window.events.beginPath, { x, y });
  } else {
    strokePath(x, y); // getSocket().emit(window.events.strokePath, { x, y });
  }
}

function handleRemove() {
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function handleCM(event) {
  event.preventDefault();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("contextmenu", handleCM);
}

if (remove) {
  remove.addEventListener("click", handleRemove);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y;
  return strokePath(x, y);
};

exports.handleStrokedPath = handleStrokedPath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwicmVtb3ZlIiwiSU5JVElBTF9DT0xPUiIsIkNBTlZBU19TSVpFIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwicGFpbnRpbmciLCJzdG9wUGFpbnRpbmciLCJzdGFydFBhaW50aW5nIiwiYmVnaW5QYXRoIiwieCIsInkiLCJtb3ZlVG8iLCJzdHJva2VQYXRoIiwibGluZVRvIiwic3Ryb2tlIiwib25Nb3VzZU1vdmUiLCJldmVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiaGFuZGxlUmVtb3ZlIiwiaGFuZGxlQ00iLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVCZWdhblBhdGgiLCJoYW5kbGVTdHJva2VkUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsSUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUVBLElBQU1JLGFBQWEsR0FBRyxTQUF0QjtBQUNBLElBQU1DLFdBQVcsR0FBRyxHQUFwQjtBQUVBUCxNQUFNLENBQUNRLEtBQVAsR0FBZUQsV0FBZjtBQUNBUCxNQUFNLENBQUNTLE1BQVAsR0FBZ0JGLFdBQVcsR0FBRyxHQUE5QjtBQUVBSixHQUFHLENBQUNPLFNBQUosR0FBZ0IsT0FBaEI7QUFDQVAsR0FBRyxDQUFDUSxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkosV0FBbkIsRUFBZ0NBLFdBQWhDO0FBQ0FKLEdBQUcsQ0FBQ1MsV0FBSixHQUFrQk4sYUFBbEI7QUFDQUgsR0FBRyxDQUFDVSxTQUFKLEdBQWdCLEdBQWhCO0FBRUEsSUFBSUMsUUFBUSxHQUFHLEtBQWY7O0FBRUEsU0FBU0MsWUFBVCxHQUF3QjtBQUNwQkQsRUFBQUEsUUFBUSxHQUFHLEtBQVg7QUFDSDs7QUFFRCxTQUFTRSxhQUFULEdBQXlCO0FBQ3JCRixFQUFBQSxRQUFRLEdBQUcsSUFBWDtBQUNIOztBQUVELElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3hCaEIsRUFBQUEsR0FBRyxDQUFDYyxTQUFKO0FBQ0FkLEVBQUFBLEdBQUcsQ0FBQ2lCLE1BQUosQ0FBV0YsQ0FBWCxFQUFjQyxDQUFkO0FBQ0gsQ0FIRDs7QUFLQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDSCxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN6QmhCLEVBQUFBLEdBQUcsQ0FBQ21CLE1BQUosQ0FBV0osQ0FBWCxFQUFjQyxDQUFkO0FBQ0FoQixFQUFBQSxHQUFHLENBQUNvQixNQUFKO0FBQ0gsQ0FIRDs7QUFLQSxTQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUN4QixNQUFNUCxDQUFDLEdBQUdPLEtBQUssQ0FBQ0MsT0FBaEI7QUFDQSxNQUFNUCxDQUFDLEdBQUdNLEtBQUssQ0FBQ0UsT0FBaEI7O0FBQ0EsTUFBSSxDQUFDYixRQUFMLEVBQWU7QUFDWEcsSUFBQUEsU0FBUyxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBVCxDQURXLENBRVg7QUFDSCxHQUhELE1BR087QUFDSEUsSUFBQUEsVUFBVSxDQUFDSCxDQUFELEVBQUlDLENBQUosQ0FBVixDQURHLENBRUg7QUFDSDtBQUNKOztBQUVELFNBQVNTLFlBQVQsR0FBd0I7QUFDcEJ6QixFQUFBQSxHQUFHLENBQUNRLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CSixXQUFuQixFQUFnQ0EsV0FBaEM7QUFDSDs7QUFFRCxTQUFTc0IsUUFBVCxDQUFrQkosS0FBbEIsRUFBeUI7QUFDckJBLEVBQUFBLEtBQUssQ0FBQ0ssY0FBTjtBQUNIOztBQUVELElBQUk5QixNQUFKLEVBQVk7QUFDUkEsRUFBQUEsTUFBTSxDQUFDK0IsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNQLFdBQXJDO0FBQ0F4QixFQUFBQSxNQUFNLENBQUMrQixnQkFBUCxDQUF3QixXQUF4QixFQUFxQ2YsYUFBckM7QUFDQWhCLEVBQUFBLE1BQU0sQ0FBQytCLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DaEIsWUFBbkM7QUFDQWYsRUFBQUEsTUFBTSxDQUFDK0IsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0NoQixZQUF0QztBQUNBZixFQUFBQSxNQUFNLENBQUMrQixnQkFBUCxDQUF3QixhQUF4QixFQUF1Q0YsUUFBdkM7QUFDSDs7QUFFRCxJQUFJeEIsTUFBSixFQUFZO0FBQ1JBLEVBQUFBLE1BQU0sQ0FBQzBCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDSCxZQUFqQztBQUNIOztBQUVNLElBQU1JLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUFHZCxDQUFILFFBQUdBLENBQUg7QUFBQSxNQUFNQyxDQUFOLFFBQU1BLENBQU47QUFBQSxTQUFjRixTQUFTLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUF2QjtBQUFBLENBQXhCOzs7O0FBQ0EsSUFBTWMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQUdmLENBQUgsU0FBR0EsQ0FBSDtBQUFBLE1BQU1DLENBQU4sU0FBTUEsQ0FBTjtBQUFBLFNBQWNFLFVBQVUsQ0FBQ0gsQ0FBRCxFQUFJQyxDQUFKLENBQXhCO0FBQUEsQ0FBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1JlbW92ZVwiKTtcblxuY29uc3QgSU5JVElBTF9DT0xPUiA9IFwiIzJjMmMyY1wiO1xuY29uc3QgQ0FOVkFTX1NJWkUgPSA3MDA7XG5cbmNhbnZhcy53aWR0aCA9IENBTlZBU19TSVpFO1xuY2FudmFzLmhlaWdodCA9IENBTlZBU19TSVpFIC0gMTAwO1xuXG5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XG5jdHguc3Ryb2tlU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xuY3R4LmxpbmVXaWR0aCA9IDIuNTtcblxubGV0IHBhaW50aW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHN0b3BQYWludGluZygpIHtcbiAgICBwYWludGluZyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzdGFydFBhaW50aW5nKCkge1xuICAgIHBhaW50aW5nID0gdHJ1ZTtcbn1cblxuY29uc3QgYmVnaW5QYXRoID0gKHgsIHkpID0+IHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh4LCB5KTtcbn07XG5cbmNvbnN0IHN0cm9rZVBhdGggPSAoeCwgeSkgPT4ge1xuICAgIGN0eC5saW5lVG8oeCwgeSk7XG4gICAgY3R4LnN0cm9rZSgpO1xufTtcblxuZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICBjb25zdCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICBjb25zdCB5ID0gZXZlbnQub2Zmc2V0WTtcbiAgICBpZiAoIXBhaW50aW5nKSB7XG4gICAgICAgIGJlZ2luUGF0aCh4LCB5KTtcbiAgICAgICAgLy8gZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmJlZ2luUGF0aCwgeyB4LCB5IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0cm9rZVBhdGgoeCwgeSk7XG4gICAgICAgIC8vIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zdHJva2VQYXRoLCB7IHgsIHkgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVSZW1vdmUoKSB7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNNKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuaWYgKGNhbnZhcykge1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydFBhaW50aW5nKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGhhbmRsZUNNKTtcbn1cblxuaWYgKHJlbW92ZSkge1xuICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUmVtb3ZlKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUJlZ2FuUGF0aCA9ICh7IHgsIHkgfSkgPT4gYmVnaW5QYXRoKHgsIHkpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZVN0cm9rZWRQYXRoID0gKHsgeCwgeSB9KSA9PiBzdHJva2VQYXRoKHgsIHkpO1xuIl19
},{"./sockets":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSocket = exports.initSockets = exports.getSocket = void 0;

var _chat = require("./chat");

var _notifications = require("./notifications");

var _game = require("./game");

var _uploadImg = require("./uploadImg");

var _users = require("./users");

var socket = null; // socket 가져오기

var getSocket = function getSocket() {
  return socket;
}; // getSocket.emit() ....


exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
}; // login.js에서 초기화 실행함 + 소켓 통신 시작


exports.updateSocket = updateSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket);
  aSocket.on(events.newUser, _notifications.handleNewUser);
  aSocket.on(events.disconnected, _notifications.handleDisconnectUser);
  aSocket.on(events.newMsg, _chat.handleNewMessage);
  aSocket.on(events.uploadImg, _uploadImg.handleUploadImg);
  aSocket.on(events.userUpdate, _users.handleUserUpdate);
  aSocket.on(events.gameStart, _game.handleGameStart);
  aSocket.on(events.gameStarted, _game.handleGameStarted);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RVc2VyIiwibmV3TXNnIiwiaGFuZGxlTmV3TWVzc2FnZSIsInVwbG9hZEltZyIsImhhbmRsZVVwbG9hZEltZyIsInVzZXJVcGRhdGUiLCJoYW5kbGVVc2VyVXBkYXRlIiwiZ2FtZVN0YXJ0IiwiaGFuZGxlR2FtZVN0YXJ0IiwiZ2FtZVN0YXJ0ZWQiLCJoYW5kbGVHYW1lU3RhcnRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQUlBLE1BQU0sR0FBRyxJQUFiLEMsQ0FFQTs7QUFDTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQixDLENBQ1A7Ozs7O0FBRU8sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsT0FBRDtBQUFBLFNBQWNILE1BQU0sR0FBR0csT0FBdkI7QUFBQSxDQUFyQixDLENBRVA7Ozs7O0FBQ08sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsT0FBRCxFQUFhO0FBQ3BDLGdCQUFtQkUsTUFBbkI7QUFBQSxNQUFRQyxNQUFSLFdBQVFBLE1BQVI7QUFDQUosRUFBQUEsWUFBWSxDQUFDQyxPQUFELENBQVo7QUFDQUEsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ0UsT0FBbEIsRUFBMkJDLDRCQUEzQjtBQUNBTixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDSSxZQUFsQixFQUFnQ0MsbUNBQWhDO0FBQ0FSLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNNLE1BQWxCLEVBQTBCQyxzQkFBMUI7QUFDQVYsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ1EsU0FBbEIsRUFBNkJDLDBCQUE3QjtBQUNBWixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDVSxVQUFsQixFQUE4QkMsdUJBQTlCO0FBQ0FkLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNZLFNBQWxCLEVBQTZCQyxxQkFBN0I7QUFDQWhCLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNjLFdBQWxCLEVBQStCQyx1QkFBL0I7QUFDSCxDQVZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTmV3TWVzc2FnZSB9IGZyb20gXCIuL2NoYXRcIjtcbmltcG9ydCB7IGhhbmRsZURpc2Nvbm5lY3RVc2VyLCBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgaGFuZGxlR2FtZVN0YXJ0LCBoYW5kbGVHYW1lU3RhcnRlZCB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCB7IGhhbmRsZVVwbG9hZEltZyB9IGZyb20gXCIuL3VwbG9hZEltZ1wiO1xuaW1wb3J0IHsgaGFuZGxlVXNlclVwZGF0ZSB9IGZyb20gXCIuL3VzZXJzXCI7XG5cbmxldCBzb2NrZXQgPSBudWxsO1xuXG4vLyBzb2NrZXQg6rCA7KC47Jik6riwXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xuLy8gZ2V0U29ja2V0LmVtaXQoKSAuLi4uXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTb2NrZXQgPSAoYVNvY2tldCkgPT4gKHNvY2tldCA9IGFTb2NrZXQpO1xuXG4vLyBsb2dpbi5qc+yXkOyEnCDstIjquLDtmZQg7Iuk7ZaJ7ZWoICsg7IaM7LyTIO2GteyLoCDsi5zsnpFcbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IChhU29ja2V0KSA9PiB7XG4gICAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgICB1cGRhdGVTb2NrZXQoYVNvY2tldCk7XG4gICAgYVNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XG4gICAgYVNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdGVkLCBoYW5kbGVEaXNjb25uZWN0VXNlcik7XG4gICAgYVNvY2tldC5vbihldmVudHMubmV3TXNnLCBoYW5kbGVOZXdNZXNzYWdlKTtcbiAgICBhU29ja2V0Lm9uKGV2ZW50cy51cGxvYWRJbWcsIGhhbmRsZVVwbG9hZEltZyk7XG4gICAgYVNvY2tldC5vbihldmVudHMudXNlclVwZGF0ZSwgaGFuZGxlVXNlclVwZGF0ZSk7XG4gICAgYVNvY2tldC5vbihldmVudHMuZ2FtZVN0YXJ0LCBoYW5kbGVHYW1lU3RhcnQpO1xuICAgIGFTb2NrZXQub24oZXZlbnRzLmdhbWVTdGFydGVkLCBoYW5kbGVHYW1lU3RhcnRlZCk7XG59O1xuIl19
},{"./chat":1,"./game":3,"./notifications":5,"./uploadImg":8,"./users":9}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleUploadImg = void 0;

var handleUploadImg = function handleUploadImg() {};

exports.handleUploadImg = handleUploadImg;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZEltZy5qcyJdLCJuYW1lcyI6WyJoYW5kbGVVcGxvYWRJbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU0sQ0FBRSxDQUFoQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBoYW5kbGVVcGxvYWRJbWcgPSAoKSA9PiB7fTtcbiJdfQ==
},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleUserUpdate = void 0;
var users = document.getElementById("jsUsers"); // 스타일링은 아래에서 자바스크립트로 진행해주세요.

var handleUserUpdate = function handleUserUpdate(_ref) {
  var sockets = _ref.sockets;
  console.log(sockets);
  users.innerHTML = "";
  var count = document.createElement("span");
  count.innerText = "\uD604\uC7AC ".concat(sockets.length, "\uBA85 \uC811\uC18D\uC911\n");
  count.style.color = "white";
  count.style.fontSize = "26px";
  users.appendChild(count);
  sockets.map(function (socket) {
    var user = document.createElement("span");
    user.style.color = "white";
    user.innerText = "".concat(socket.nickname, " \uB2D8,    ");
    users.appendChild(user);
  });
};

exports.handleUserUpdate = handleUserUpdate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbInVzZXJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZVVzZXJVcGRhdGUiLCJzb2NrZXRzIiwiY29uc29sZSIsImxvZyIsImlubmVySFRNTCIsImNvdW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImxlbmd0aCIsInN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSIsImFwcGVuZENoaWxkIiwibWFwIiwic29ja2V0IiwidXNlciIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFkLEMsQ0FDQTs7QUFFTyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzdDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBSixFQUFBQSxLQUFLLENBQUNPLFNBQU4sR0FBa0IsRUFBbEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixNQUF2QixDQUFkO0FBQ0FELEVBQUFBLEtBQUssQ0FBQ0UsU0FBTiwwQkFBd0JOLE9BQU8sQ0FBQ08sTUFBaEM7QUFDQUgsRUFBQUEsS0FBSyxDQUFDSSxLQUFOLENBQVlDLEtBQVosR0FBb0IsT0FBcEI7QUFDQUwsRUFBQUEsS0FBSyxDQUFDSSxLQUFOLENBQVlFLFFBQVosR0FBdUIsTUFBdkI7QUFDQWQsRUFBQUEsS0FBSyxDQUFDZSxXQUFOLENBQWtCUCxLQUFsQjtBQUVBSixFQUFBQSxPQUFPLENBQUNZLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVk7QUFDcEIsUUFBTUMsSUFBSSxHQUFHakIsUUFBUSxDQUFDUSxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQVMsSUFBQUEsSUFBSSxDQUFDTixLQUFMLENBQVdDLEtBQVgsR0FBbUIsT0FBbkI7QUFDQUssSUFBQUEsSUFBSSxDQUFDUixTQUFMLGFBQW9CTyxNQUFNLENBQUNFLFFBQTNCO0FBQ0FuQixJQUFBQSxLQUFLLENBQUNlLFdBQU4sQ0FBa0JHLElBQWxCO0FBQ0gsR0FMRDtBQU1ILENBZk0iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1c2VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNVc2Vyc1wiKTtcbi8vIOyKpO2DgOydvOungeydgCDslYTrnpjsl5DshJwg7J6Q67CU7Iqk7YGs66a97Yq466GcIOynhO2Wie2VtOyjvOyEuOyalC5cblxuZXhwb3J0IGNvbnN0IGhhbmRsZVVzZXJVcGRhdGUgPSAoeyBzb2NrZXRzIH0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhzb2NrZXRzKTtcbiAgICB1c2Vycy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY291bnQuaW5uZXJUZXh0ID0gYO2YhOyerCAke3NvY2tldHMubGVuZ3RofeuqhSDsoJHsho3spJFcXG5gO1xuICAgIGNvdW50LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGNvdW50LnN0eWxlLmZvbnRTaXplID0gXCIyNnB4XCI7XG4gICAgdXNlcnMuYXBwZW5kQ2hpbGQoY291bnQpO1xuXG4gICAgc29ja2V0cy5tYXAoKHNvY2tldCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHVzZXIuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIHVzZXIuaW5uZXJUZXh0ID0gYCR7c29ja2V0Lm5pY2tuYW1lfSDri5gsICAgIGA7XG4gICAgICAgIHVzZXJzLmFwcGVuZENoaWxkKHVzZXIpO1xuICAgIH0pO1xufTtcbiJdfQ==
},{}]},{},[2])