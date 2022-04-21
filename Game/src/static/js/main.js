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
},{"./sockets":6}],2:[function(require,module,exports){
"use strict";

require("./login");

require("./sockets");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTY4NDE4YzguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIjtcbmltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9jaGF0XCI7XG5pbXBvcnQgXCIuL3BhaW50XCI7XG4iXX0=
},{"./chat":1,"./login":3,"./paint":5,"./sockets":6}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var logout = document.getElementById("jsLogout");
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
  body.className = LOGGED_IN;
  logout.className = LOGGED_IN; // socket에 넘겨주기

  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}

var handleLogout = function handleLogout(e) {
  localStorage.clear();
  location.reload();
};

if (logout) {
  var button = document.createElement("button");
  button.innerText = "로그아웃";
  button.addEventListener("click", handleLogout);
  logout.appendChild(button);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsImxvZ291dCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUxvZ291dCIsImNsZWFyIiwibG9jYXRpb24iLCJyZWxvYWQiLCJidXR0b24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUVBLElBQU1FLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUNBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQixDLENBRUE7QUFDQTs7QUFDQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSCxRQUFELEVBQWM7QUFDeEIsTUFBTUksTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFdBQTFCLEVBQXVDO0FBQUVULElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUF2QztBQUNBLDRCQUFZSSxNQUFaO0FBQ0gsQ0FKRCxDLENBTUE7OztBQUNBLElBQUlKLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNuQlQsRUFBQUEsSUFBSSxDQUFDbUIsU0FBTCxHQUFpQlosVUFBakI7QUFDSCxDQUZELE1BRU87QUFDSFAsRUFBQUEsSUFBSSxDQUFDbUIsU0FBTCxHQUFpQlgsU0FBakI7QUFDQUksRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDSDs7QUFFRCxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM1QkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHcEIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFDQSxNQUFRc0IsS0FBUixHQUFrQkQsS0FBbEIsQ0FBUUMsS0FBUjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBRCxFQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0FBQ0FkLEVBQUFBLFlBQVksQ0FBQ2lCLE9BQWIsQ0FBcUJyQixRQUFyQixFQUErQmtCLEtBQS9CO0FBQ0F4QixFQUFBQSxJQUFJLENBQUNtQixTQUFMLEdBQWlCWCxTQUFqQjtBQUNBSCxFQUFBQSxNQUFNLENBQUNjLFNBQVAsR0FBbUJYLFNBQW5CLENBUjRCLENBUzVCOztBQUNBSSxFQUFBQSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNILENBWEQ7O0FBWUEsSUFBSXJCLFNBQUosRUFBZTtBQUNYQSxFQUFBQSxTQUFTLENBQUN5QixnQkFBVixDQUEyQixRQUEzQixFQUFxQ1IsZ0JBQXJDO0FBQ0g7O0FBRUQsSUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1IsQ0FBRCxFQUFPO0FBQ3hCWCxFQUFBQSxZQUFZLENBQUNvQixLQUFiO0FBQ0FDLEVBQUFBLFFBQVEsQ0FBQ0MsTUFBVDtBQUNILENBSEQ7O0FBSUEsSUFBSTNCLE1BQUosRUFBWTtBQUNSLE1BQU00QixNQUFNLEdBQUdoQyxRQUFRLENBQUNpQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxTQUFQLEdBQW1CLE1BQW5CO0FBQ0FGLEVBQUFBLE1BQU0sQ0FBQ0wsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNDLFlBQWpDO0FBQ0F4QixFQUFBQSxNQUFNLENBQUMrQixXQUFQLENBQW1CSCxNQUFuQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdFNvY2tldHMgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dpblwiKTtcbmNvbnN0IGxvZ291dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dvdXRcIik7XG5cbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XG5jb25zdCBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE5JQ0tOQU1FKTtcblxuLy8gc29ja2V0IGVtaXQgc2V0Tmlja25hbWUgZXZlbnQgdG8gc2VydmVyXG4vLyB3aW5kb3cg6rCd7LK0IOqzteu2gO2VmOq4sCBnbG9iYWwgdmFyaWFibGUgaW4gYnJvd3NlcnNcbmNvbnN0IGxvZ0luID0gKG5pY2tuYW1lKSA9PiB7XG4gICAgY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xuICAgIHNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUsIHsgbmlja25hbWUgfSk7XG4gICAgaW5pdFNvY2tldHMoc29ja2V0KTtcbn07XG5cbi8vIGxvY2FsIHN0b3JhZ2Xsl5Agbmlja25hbWUg7KCV67O06rCAIOyeiOuKlOyngCBjaGVjayDtm4Qg67aE6riw7Iuc7YK0XG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XG59IGVsc2Uge1xuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xuICAgIGxvZ0luKG5pY2tuYW1lKTtcbn1cblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCB2YWx1ZSk7XG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gICAgbG9nb3V0LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcbiAgICAvLyBzb2NrZXTsl5Ag64SY6rKo7KO86riwXG4gICAgbG9nSW4odmFsdWUpO1xufTtcbmlmIChsb2dpbkZvcm0pIHtcbiAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KTtcbn1cblxuY29uc3QgaGFuZGxlTG9nb3V0ID0gKGUpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbn07XG5pZiAobG9nb3V0KSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gXCLroZzqt7jslYTsm4NcIjtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUxvZ291dCk7XG4gICAgbG9nb3V0LmFwcGVuZENoaWxkKGJ1dHRvbik7XG59XG4iXX0=
},{"./sockets":6}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
canvas.height = CANVAS_SIZE;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwicmVtb3ZlIiwiSU5JVElBTF9DT0xPUiIsIkNBTlZBU19TSVpFIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwicGFpbnRpbmciLCJzdG9wUGFpbnRpbmciLCJzdGFydFBhaW50aW5nIiwiYmVnaW5QYXRoIiwieCIsInkiLCJtb3ZlVG8iLCJzdHJva2VQYXRoIiwibGluZVRvIiwic3Ryb2tlIiwib25Nb3VzZU1vdmUiLCJldmVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiaGFuZGxlUmVtb3ZlIiwiaGFuZGxlQ00iLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVCZWdhblBhdGgiLCJoYW5kbGVTdHJva2VkUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsSUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUVBLElBQU1JLGFBQWEsR0FBRyxTQUF0QjtBQUNBLElBQU1DLFdBQVcsR0FBRyxHQUFwQjtBQUVBUCxNQUFNLENBQUNRLEtBQVAsR0FBZUQsV0FBZjtBQUNBUCxNQUFNLENBQUNTLE1BQVAsR0FBZ0JGLFdBQWhCO0FBRUFKLEdBQUcsQ0FBQ08sU0FBSixHQUFnQixPQUFoQjtBQUNBUCxHQUFHLENBQUNRLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CSixXQUFuQixFQUFnQ0EsV0FBaEM7QUFDQUosR0FBRyxDQUFDUyxXQUFKLEdBQWtCTixhQUFsQjtBQUNBSCxHQUFHLENBQUNVLFNBQUosR0FBZ0IsR0FBaEI7QUFFQSxJQUFJQyxRQUFRLEdBQUcsS0FBZjs7QUFFQSxTQUFTQyxZQUFULEdBQXdCO0FBQ3BCRCxFQUFBQSxRQUFRLEdBQUcsS0FBWDtBQUNIOztBQUVELFNBQVNFLGFBQVQsR0FBeUI7QUFDckJGLEVBQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0g7O0FBRUQsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDeEJoQixFQUFBQSxHQUFHLENBQUNjLFNBQUo7QUFDQWQsRUFBQUEsR0FBRyxDQUFDaUIsTUFBSixDQUFXRixDQUFYLEVBQWNDLENBQWQ7QUFDSCxDQUhEOztBQUtBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNILENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3pCaEIsRUFBQUEsR0FBRyxDQUFDbUIsTUFBSixDQUFXSixDQUFYLEVBQWNDLENBQWQ7QUFDQWhCLEVBQUFBLEdBQUcsQ0FBQ29CLE1BQUo7QUFDSCxDQUhEOztBQUtBLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQ3hCLE1BQU1QLENBQUMsR0FBR08sS0FBSyxDQUFDQyxPQUFoQjtBQUNBLE1BQU1QLENBQUMsR0FBR00sS0FBSyxDQUFDRSxPQUFoQjs7QUFDQSxNQUFJLENBQUNiLFFBQUwsRUFBZTtBQUNYRyxJQUFBQSxTQUFTLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUFULENBRFcsQ0FFWDtBQUNILEdBSEQsTUFHTztBQUNIRSxJQUFBQSxVQUFVLENBQUNILENBQUQsRUFBSUMsQ0FBSixDQUFWLENBREcsQ0FFSDtBQUNIO0FBQ0o7O0FBRUQsU0FBU1MsWUFBVCxHQUF3QjtBQUNwQnpCLEVBQUFBLEdBQUcsQ0FBQ1EsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJKLFdBQW5CLEVBQWdDQSxXQUFoQztBQUNIOztBQUVELFNBQVNzQixRQUFULENBQWtCSixLQUFsQixFQUF5QjtBQUNyQkEsRUFBQUEsS0FBSyxDQUFDSyxjQUFOO0FBQ0g7O0FBRUQsSUFBSTlCLE1BQUosRUFBWTtBQUNSQSxFQUFBQSxNQUFNLENBQUMrQixnQkFBUCxDQUF3QixXQUF4QixFQUFxQ1AsV0FBckM7QUFDQXhCLEVBQUFBLE1BQU0sQ0FBQytCLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDZixhQUFyQztBQUNBaEIsRUFBQUEsTUFBTSxDQUFDK0IsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNoQixZQUFuQztBQUNBZixFQUFBQSxNQUFNLENBQUMrQixnQkFBUCxDQUF3QixZQUF4QixFQUFzQ2hCLFlBQXRDO0FBQ0FmLEVBQUFBLE1BQU0sQ0FBQytCLGdCQUFQLENBQXdCLGFBQXhCLEVBQXVDRixRQUF2QztBQUNIOztBQUVELElBQUl4QixNQUFKLEVBQVk7QUFDUkEsRUFBQUEsTUFBTSxDQUFDMEIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNILFlBQWpDO0FBQ0g7O0FBRU0sSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUdkLENBQUgsUUFBR0EsQ0FBSDtBQUFBLE1BQU1DLENBQU4sUUFBTUEsQ0FBTjtBQUFBLFNBQWNGLFNBQVMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQXZCO0FBQUEsQ0FBeEI7Ozs7QUFDQSxJQUFNYyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsTUFBR2YsQ0FBSCxTQUFHQSxDQUFIO0FBQUEsTUFBTUMsQ0FBTixTQUFNQSxDQUFOO0FBQUEsU0FBY0UsVUFBVSxDQUFDSCxDQUFELEVBQUlDLENBQUosQ0FBeEI7QUFBQSxDQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jb25zdCByZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUmVtb3ZlXCIpO1xuXG5jb25zdCBJTklUSUFMX0NPTE9SID0gXCIjMmMyYzJjXCI7XG5jb25zdCBDQU5WQVNfU0laRSA9IDcwMDtcblxuY2FudmFzLndpZHRoID0gQ0FOVkFTX1NJWkU7XG5jYW52YXMuaGVpZ2h0ID0gQ0FOVkFTX1NJWkU7XG5cbmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG5jdHguZmlsbFJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcbmN0eC5zdHJva2VTdHlsZSA9IElOSVRJQUxfQ09MT1I7XG5jdHgubGluZVdpZHRoID0gMi41O1xuXG5sZXQgcGFpbnRpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gc3RvcFBhaW50aW5nKCkge1xuICAgIHBhaW50aW5nID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0UGFpbnRpbmcoKSB7XG4gICAgcGFpbnRpbmcgPSB0cnVlO1xufVxuXG5jb25zdCBiZWdpblBhdGggPSAoeCwgeSkgPT4ge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xufTtcblxuY29uc3Qgc3Ryb2tlUGF0aCA9ICh4LCB5KSA9PiB7XG4gICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICBjdHguc3Ryb2tlKCk7XG59O1xuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGNvbnN0IHggPSBldmVudC5vZmZzZXRYO1xuICAgIGNvbnN0IHkgPSBldmVudC5vZmZzZXRZO1xuICAgIGlmICghcGFpbnRpbmcpIHtcbiAgICAgICAgYmVnaW5QYXRoKHgsIHkpO1xuICAgICAgICAvLyBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuYmVnaW5QYXRoLCB7IHgsIHkgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3Ryb2tlUGF0aCh4LCB5KTtcbiAgICAgICAgLy8gZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnN0cm9rZVBhdGgsIHsgeCwgeSB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlbW92ZSgpIHtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ00oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5pZiAoY2FudmFzKSB7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0UGFpbnRpbmcpO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wUGFpbnRpbmcpO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgaGFuZGxlQ00pO1xufVxuXG5pZiAocmVtb3ZlKSB7XG4gICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVSZW1vdmUpO1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlQmVnYW5QYXRoID0gKHsgeCwgeSB9KSA9PiBiZWdpblBhdGgoeCwgeSk7XG5leHBvcnQgY29uc3QgaGFuZGxlU3Ryb2tlZFBhdGggPSAoeyB4LCB5IH0pID0+IHN0cm9rZVBhdGgoeCwgeSk7XG4iXX0=
},{"./sockets":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSocket = exports.initSockets = exports.getSocket = void 0;

var _chat = require("./chat");

var _notifications = require("./notifications");

var socket = null;

var getSocket = function getSocket() {
  return socket;
}; // getSocket.emit() ....


exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
};

exports.updateSocket = updateSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket);
  aSocket.on(events.newUser, _notifications.handleNewUser);
  aSocket.on(events.disconnected, _notifications.handleDisconnectUser);
  aSocket.on(events.newMsg, _chat.handleNewMessage);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RVc2VyIiwibmV3TXNnIiwiaGFuZGxlTmV3TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCLEMsQ0FDUDs7Ozs7QUFFTyxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxPQUFEO0FBQUEsU0FBY0gsTUFBTSxHQUFHRyxPQUF2QjtBQUFBLENBQXJCOzs7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsT0FBRCxFQUFhO0FBQ3BDLGdCQUFtQkUsTUFBbkI7QUFBQSxNQUFRQyxNQUFSLFdBQVFBLE1BQVI7QUFDQUosRUFBQUEsWUFBWSxDQUFDQyxPQUFELENBQVo7QUFDQUEsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ0UsT0FBbEIsRUFBMkJDLDRCQUEzQjtBQUNBTixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDSSxZQUFsQixFQUFnQ0MsbUNBQWhDO0FBQ0FSLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNNLE1BQWxCLEVBQTBCQyxzQkFBMUI7QUFDSCxDQU5NIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTmV3TWVzc2FnZSB9IGZyb20gXCIuL2NoYXRcIjtcbmltcG9ydCB7IGhhbmRsZURpc2Nvbm5lY3RVc2VyLCBoYW5kbGVOZXdVc2VyIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuXG5sZXQgc29ja2V0ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcbi8vIGdldFNvY2tldC5lbWl0KCkgLi4uLlxuXG5leHBvcnQgY29uc3QgdXBkYXRlU29ja2V0ID0gKGFTb2NrZXQpID0+IChzb2NrZXQgPSBhU29ja2V0KTtcblxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXRzID0gKGFTb2NrZXQpID0+IHtcbiAgICBjb25zdCB7IGV2ZW50cyB9ID0gd2luZG93O1xuICAgIHVwZGF0ZVNvY2tldChhU29ja2V0KTtcbiAgICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcbiAgICBhU29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3RVc2VyKTtcbiAgICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01lc3NhZ2UpO1xufTtcbiJdfQ==
},{"./chat":1,"./notifications":4}]},{},[2])