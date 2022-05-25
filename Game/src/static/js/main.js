(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                throw new Error("Cannot find module '" + o + "'");
            }
            var f = (n[o] = { exports: {} });
            t[o][0].call(
                f.exports,
                function (e) {
                    var n = t[o][1][e];
                    return s(n ? n : e);
                },
                f,
                f.exports,
                e,
                t,
                n,
                r
            );
        }
        return n[o].exports;
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s;
})(
    {
        1: [
            function (require, module, exports) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true,
                });
                exports.handleNewMessage = void 0;

                var _sockets = require("./sockets");

                var messages = document.getElementById("jsMessages");
                var sendMsg = document.getElementById("jsSendMsg");

                var appendMsg = function appendMsg(text, nickname) {
                    var li = document.createElement("li");
                    li.innerHTML = '\n        <span class="author '
                        .concat(nickname ? "out" : "self", '">')
                        .concat(nickname ? nickname : "나", ":</span> ")
                        .concat(text, "\n    ");
                    messages.appendChild(li);

                    if (messages.isScrollBottom) {
                        messages.scrollTop = messages.scrollHeight;
                    }
                }; // 자동 스크롤 기능 추가

                messages.isScrollBottom = true;
                messages.addEventListener("scroll", function (event) {
                    if (
                        event.target.scrollHeight - event.target.scrollTop ===
                        event.target.clientHeight
                    ) {
                        messages.isScrollBottom = true;
                    } else {
                        messages.isScrollBottom = false;
                    }
                });

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
                        message: value,
                    });
                    input.value = "";
                    appendMsg(value);
                };

                if (sendMsg) {
                    sendMsg.addEventListener("submit", handleSendMsg);
                }
                //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaXNTY3JvbGxCb3R0b20iLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbGllbnRIZWlnaHQiLCJoYW5kbGVOZXdNZXNzYWdlIiwibWVzc2FnZSIsImhhbmRsZVNlbmRNc2ciLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBaEI7O0FBRUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFPQyxRQUFQLEVBQW9CO0FBQ2xDLE1BQU1DLEVBQUUsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQUQsRUFBQUEsRUFBRSxDQUFDRSxTQUFILDRDQUMwQkgsUUFBUSxHQUFHLEtBQUgsR0FBVyxNQUQ3QyxnQkFFSUEsUUFBUSxHQUFHQSxRQUFILEdBQWMsR0FGMUIsc0JBR1lELElBSFo7QUFNQUwsRUFBQUEsUUFBUSxDQUFDVSxXQUFULENBQXFCSCxFQUFyQjs7QUFFQSxNQUFJUCxRQUFRLENBQUNXLGNBQWIsRUFBNkI7QUFDekJYLElBQUFBLFFBQVEsQ0FBQ1ksU0FBVCxHQUFxQlosUUFBUSxDQUFDYSxZQUE5QjtBQUNEO0FBQ04sQ0FiRCxDLENBZUE7OztBQUVBYixRQUFRLENBQUNXLGNBQVQsR0FBMEIsSUFBMUI7QUFFQVgsUUFBUSxDQUFDYyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxVQUFDQyxLQUFELEVBQVc7QUFDN0MsTUFBSUEsS0FBSyxDQUFDQyxNQUFOLENBQWFILFlBQWIsR0FBNEJFLEtBQUssQ0FBQ0MsTUFBTixDQUFhSixTQUF6QyxLQUF1REcsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFlBQXhFLEVBQXNGO0FBQ3BGakIsSUFBQUEsUUFBUSxDQUFDVyxjQUFULEdBQTBCLElBQTFCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xYLElBQUFBLFFBQVEsQ0FBQ1csY0FBVCxHQUEwQixLQUExQjtBQUNEO0FBQ0YsQ0FORDs7QUFRTyxJQUFNTyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWWIsUUFBWixRQUFZQSxRQUFaO0FBQUEsU0FDNUJGLFNBQVMsQ0FBQ2UsT0FBRCxFQUFVYixRQUFWLENBRG1CO0FBQUEsQ0FBekIsQyxDQUdQOzs7OztBQUNBLElBQU1jLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0wsS0FBRCxFQUFXO0FBQzdCO0FBQ0FBLEVBQUFBLEtBQUssQ0FBQ00sY0FBTjtBQUNBLE1BQU1DLEtBQUssR0FBR25CLE9BQU8sQ0FBQ29CLGFBQVIsQ0FBc0IsT0FBdEIsQ0FBZDtBQUNBLE1BQVFDLEtBQVIsR0FBa0JGLEtBQWxCLENBQVFFLEtBQVI7QUFDQSw0QkFBWUMsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWN4QixPQUEvQixFQUF3QztBQUFFZ0IsSUFBQUEsT0FBTyxFQUFFSztBQUFYLEdBQXhDO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQXBCLEVBQUFBLFNBQVMsQ0FBQ29CLEtBQUQsQ0FBVDtBQUNILENBUkQ7O0FBVUEsSUFBSXJCLE9BQUosRUFBYTtBQUNUQSxFQUFBQSxPQUFPLENBQUNXLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DTSxhQUFuQztBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xyXG5cclxuY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTWVzc2FnZXNcIik7XHJcbmNvbnN0IHNlbmRNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzU2VuZE1zZ1wiKTtcclxuXHJcbmNvbnN0IGFwcGVuZE1zZyA9ICh0ZXh0LCBuaWNrbmFtZSkgPT4ge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhdXRob3IgJHtuaWNrbmFtZSA/IFwib3V0XCIgOiBcInNlbGZcIn1cIj4ke1xyXG4gICAgICAgIG5pY2tuYW1lID8gbmlja25hbWUgOiBcIuuCmFwiXHJcbiAgICB9Ojwvc3Bhbj4gJHt0ZXh0fVxyXG4gICAgYDtcclxuXHJcbiAgICBtZXNzYWdlcy5hcHBlbmRDaGlsZChsaSk7XHJcblxyXG4gICAgaWYgKG1lc3NhZ2VzLmlzU2Nyb2xsQm90dG9tKSB7XHJcbiAgICAgICAgbWVzc2FnZXMuc2Nyb2xsVG9wID0gbWVzc2FnZXMuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICB9XHJcbn07XHJcblxyXG4vLyDsnpDrj5kg7Iqk7YGs66GkIOq4sOuKpSDstpTqsIBcclxuXHJcbm1lc3NhZ2VzLmlzU2Nyb2xsQm90dG9tID0gdHJ1ZTtcclxuXHJcbm1lc3NhZ2VzLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKGV2ZW50KSA9PiB7XHJcbiAgaWYgKGV2ZW50LnRhcmdldC5zY3JvbGxIZWlnaHQgLSBldmVudC50YXJnZXQuc2Nyb2xsVG9wID09PSBldmVudC50YXJnZXQuY2xpZW50SGVpZ2h0KSB7XHJcbiAgICBtZXNzYWdlcy5pc1Njcm9sbEJvdHRvbSA9IHRydWU7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1lc3NhZ2VzLmlzU2Nyb2xsQm90dG9tID0gZmFsc2U7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdNZXNzYWdlID0gKHsgbWVzc2FnZSwgbmlja25hbWUgfSkgPT5cclxuICAgIGFwcGVuZE1zZyhtZXNzYWdlLCBuaWNrbmFtZSk7XHJcblxyXG4vLyBTZW5kIGNoYXQgbWVzc2FnZXNcclxuY29uc3QgaGFuZGxlU2VuZE1zZyA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gc3VibWl0IOyDiOuhnOqzoOy5qCDrsKnsp4BcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IHNlbmRNc2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XHJcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc2VuZE1zZywgeyBtZXNzYWdlOiB2YWx1ZSB9KTtcclxuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGFwcGVuZE1zZyh2YWx1ZSk7XHJcbn07XHJcblxyXG5pZiAoc2VuZE1zZykge1xyXG4gICAgc2VuZE1zZy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVNlbmRNc2cpO1xyXG59XHJcbiJdfQ==
            },
            { "./sockets": 7 },
        ],
        2: [
            function (require, module, exports) {
                "use strict";

                require("./login");

                require("./sockets");

                require("./chat");

                require("./paint");
                //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYmVlMjg5Ny5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9zb2NrZXRzXCI7XG5pbXBvcnQgXCIuL2NoYXRcIjtcbmltcG9ydCBcIi4vcGFpbnRcIjtcbiJdfQ==
            },
            { "./chat": 1, "./login": 4, "./paint": 6, "./sockets": 7 },
        ],
        3: [
            function (require, module, exports) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true,
                });
                exports.handleGameStarted =
                    exports.handleGameStart =
                    exports.handleGameResult =
                    exports.handleGameEnd =
                    exports.handleGameDisconnect =
                    exports.handleGameCount =
                        void 0;

                var _sockets = require("./sockets");

                var info = document.getElementById("jsInfo");
                var counter = document.getElementById("jsTimer");
                var answer = document.getElementById("jsKeyword");
                var gameResult = document.getElementById("jsResult");
                var restartBtn = document.getElementById("jsRestart");
                var ready = document.getElementById("jsReady"); // paint 초기화

                var canvas = document.getElementById("jsCanvas");
                var ctx = canvas.getContext("2d");
                var CANVAS_SIZE = 500;
                canvas.width = CANVAS_SIZE;
                canvas.height = CANVAS_SIZE;
                var isReady = false;
                var GAMEINFO = "잠시후 게임이 시작됩니다."; // function for game reset

                var gameReset = function gameReset() {
                    // board 초기화
                    info.innerText = GAMEINFO;
                    counter.innerText = "";
                    answer.innerText = ""; // ready 초기화

                    isReady = false;
                    ready.innerText = "게임 준비";
                    console.log("im not ready"); // server socket -> 변수들 초기화시키기 ?

                    (0, _sockets.getSocket)().emit(
                        window.events.restartCount,
                        {}
                    );
                    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
                };

                var handleGameStart = function handleGameStart(_ref) {
                    var timer = _ref.timer;
                    info.innerText = "".concat(
                        timer,
                        "\uCD08 \uD6C4 \uAC8C\uC784\uC774 \uC2DC\uC791\uB429\uB2C8\uB2E4."
                    );
                };

                exports.handleGameStart = handleGameStart;

                var handleGameStarted = function handleGameStarted(_ref2) {
                    var msg = _ref2.msg;
                    var word = document.createElement("span");
                    word.innerText = msg;
                    info.innerText =
                        "\uAC8C\uC784\uC774 \uC2DC\uC791\uB418\uC5C8\uC2B5\uB2C8\uB2E4.\n\uC81C\uC2DC\uC5B4\uB97C \uCE94\uBC84\uC2A4\uC5D0 \uADF8\uB824\uC8FC\uC138\uC694!";
                    answer.appendChild(word);
                };

                exports.handleGameStarted = handleGameStarted;

                var handleGameCount = function handleGameCount(_ref3) {
                    var timer = _ref3.timer;
                    counter.innerText = "".concat(timer);
                };

                exports.handleGameCount = handleGameCount;

                var handleGameEnd = function handleGameEnd() {
                    // 게임 종료 시점의 canvas dataurl 가져오기
                    var image = document.getElementById("jsCanvas"); // nickname 브라우저에서 유저 정보 가져오기

                    var nickname = localStorage.getItem("nickname"); // dataURL

                    var dataURL = image.toDataURL();
                    var user = {
                        nickname: nickname,
                        image: dataURL,
                    };
                    console.log(dataURL);
                    (0, _sockets.getSocket)().emit(window.events.uploadImg, {
                        user: user,
                    });
                };

                exports.handleGameEnd = handleGameEnd;

                var handleGameDisconnect = function handleGameDisconnect() {
                    gameReset();
                };

                exports.handleGameDisconnect = handleGameDisconnect;

                var handleGameResult = function handleGameResult(_ref4) {
                    var result = _ref4.result;
                    gameResult.className = "gameEnd";
                    var winner = document.createElement("span");
                    winner.innerText = result;
                    gameResult.appendChild(winner);
                };

                exports.handleGameResult = handleGameResult;

                if (ready) {
                    ready.addEventListener("click", function () {
                        if (!isReady) {
                            (0, _sockets.getSocket)().emit(
                                window.events.gameReady,
                                {}
                            );
                            ready.innerText = "준비 취소";
                            console.log("im ready");
                            isReady = true;
                        } else if (isReady) {
                            (0, _sockets.getSocket)().emit(
                                window.events.gameReadyNot,
                                {}
                            );
                            ready.innerText = "게임 준비";
                            console.log("im not ready");
                            isReady = false;
                        }
                    });
                } // 재시작 기능

                if (restartBtn) {
                    restartBtn.addEventListener("click", function () {
                        gameReset();
                    });
                }
                //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuanMiXSwibmFtZXMiOlsiaW5mbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb3VudGVyIiwiYW5zd2VyIiwiZ2FtZVJlc3VsdCIsInJlc3RhcnRCdG4iLCJyZWFkeSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJDQU5WQVNfU0laRSIsIndpZHRoIiwiaGVpZ2h0IiwiaXNSZWFkeSIsIkdBTUVJTkZPIiwiZ2FtZVJlc2V0IiwiaW5uZXJUZXh0IiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJyZXN0YXJ0Q291bnQiLCJmaWxsUmVjdCIsImhhbmRsZUdhbWVTdGFydCIsInRpbWVyIiwiaGFuZGxlR2FtZVN0YXJ0ZWQiLCJtc2ciLCJ3b3JkIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiaGFuZGxlR2FtZUNvdW50IiwiaGFuZGxlR2FtZUVuZCIsImltYWdlIiwibmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YVVSTCIsInRvRGF0YVVSTCIsInVzZXIiLCJ1cGxvYWRJbWciLCJoYW5kbGVHYW1lRGlzY29ubmVjdCIsImhhbmRsZUdhbWVSZXN1bHQiLCJyZXN1bHQiLCJjbGFzc05hbWUiLCJ3aW5uZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZVJlYWR5IiwiZ2FtZVJlYWR5Tm90Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWhCO0FBQ0EsSUFBTUUsTUFBTSxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBZjtBQUNBLElBQU1HLFVBQVUsR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQW5CO0FBQ0EsSUFBTUksVUFBVSxHQUFHTCxR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LElBQUFBLFNBQVM7QUFDWixHQUZEO0FBR0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzSW5mb1wiKTtcbmNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzVGltZXJcIik7XG5jb25zdCBhbnN3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzS2V5d29yZFwiKTtcbmNvbnN0IGdhbWVSZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUmVzdWx0XCIpO1xuY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNSZXN0YXJ0XCIpO1xuY29uc3QgcmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUmVhZHlcIik7XG5cbi8vIHBhaW50IOy0iOq4sO2ZlFxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmNvbnN0IENBTlZBU19TSVpFID0gNTAwO1xuXG5jYW52YXMud2lkdGggPSBDQU5WQVNfU0laRTtcbmNhbnZhcy5oZWlnaHQgPSBDQU5WQVNfU0laRTtcblxubGV0IGlzUmVhZHkgPSBmYWxzZTtcbmNvbnN0IEdBTUVJTkZPID0gXCLsnqDsi5ztm4Qg6rKM7J6E7J20IOyLnOyekeuQqeuLiOuLpC5cIjtcblxuLy8gZnVuY3Rpb24gZm9yIGdhbWUgcmVzZXRcbmNvbnN0IGdhbWVSZXNldCA9ICgpID0+IHtcbiAgICAvLyBib2FyZCDstIjquLDtmZRcbiAgICBpbmZvLmlubmVyVGV4dCA9IEdBTUVJTkZPO1xuICAgIGNvdW50ZXIuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBhbnN3ZXIuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICAvLyByZWFkeSDstIjquLDtmZRcbiAgICBpc1JlYWR5ID0gZmFsc2U7XG4gICAgcmVhZHkuaW5uZXJUZXh0ID0gXCLqsozsnoQg7KSA67mEXCI7XG4gICAgY29uc29sZS5sb2coXCJpbSBub3QgcmVhZHlcIik7XG4gICAgLy8gc2VydmVyIHNvY2tldCAtPiDrs4DsiJjrk6Qg7LSI6riw7ZmU7Iuc7YKk6riwID9cbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMucmVzdGFydENvdW50LCB7fSk7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlR2FtZVN0YXJ0ID0gKHsgdGltZXIgfSkgPT4ge1xuICAgIGluZm8uaW5uZXJUZXh0ID0gYCR7dGltZXJ97LSIIO2bhCDqsozsnoTsnbQg7Iuc7J6R65Cp64uI64ukLmA7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlR2FtZVN0YXJ0ZWQgPSAoeyBtc2cgfSkgPT4ge1xuICAgIGNvbnN0IHdvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB3b3JkLmlubmVyVGV4dCA9IG1zZztcblxuICAgIGluZm8uaW5uZXJUZXh0ID0gYOqyjOyehOydtCDsi5zsnpHrkJjsl4jsirXri4jri6QuXFxu7KCc7Iuc7Ja066W8IOy6lOuyhOyKpOyXkCDqt7jroKTso7zshLjsmpQhYDtcbiAgICBhbnN3ZXIuYXBwZW5kQ2hpbGQod29yZCk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlR2FtZUNvdW50ID0gKHsgdGltZXIgfSkgPT4ge1xuICAgIGNvdW50ZXIuaW5uZXJUZXh0ID0gYCR7dGltZXJ9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVHYW1lRW5kID0gKCkgPT4ge1xuICAgIC8vIOqyjOyehCDsooXro4wg7Iuc7KCQ7J2YIGNhbnZhcyBkYXRhdXJsIOqwgOyguOyYpOq4sFxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcbiAgICAvLyBuaWNrbmFtZSDruIzrnbzsmrDsoIDsl5DshJwg7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLBcbiAgICBsZXQgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5pY2tuYW1lXCIpO1xuICAgIC8vIGRhdGFVUkxcbiAgICBsZXQgZGF0YVVSTCA9IGltYWdlLnRvRGF0YVVSTCgpO1xuICAgIGxldCB1c2VyID0geyBuaWNrbmFtZTogbmlja25hbWUsIGltYWdlOiBkYXRhVVJMIH07XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhVVJMKTtcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMudXBsb2FkSW1nLCB7IHVzZXI6IHVzZXIgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlR2FtZURpc2Nvbm5lY3QgPSAoKSA9PiB7XG4gICAgZ2FtZVJlc2V0KCk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlR2FtZVJlc3VsdCA9ICh7IHJlc3VsdCB9KSA9PiB7XG4gICAgZ2FtZVJlc3VsdC5jbGFzc05hbWUgPSBcImdhbWVFbmRcIjtcbiAgICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB3aW5uZXIuaW5uZXJUZXh0ID0gcmVzdWx0O1xuICAgIGdhbWVSZXN1bHQuYXBwZW5kQ2hpbGQod2lubmVyKTtcbn07XG5cbmlmIChyZWFkeSkge1xuICAgIHJlYWR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmICghaXNSZWFkeSkge1xuICAgICAgICAgICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmdhbWVSZWFkeSwge30pO1xuICAgICAgICAgICAgcmVhZHkuaW5uZXJUZXh0ID0gXCLspIDruYQg7Leo7IaMXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImltIHJlYWR5XCIpO1xuICAgICAgICAgICAgaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNSZWFkeSkge1xuICAgICAgICAgICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmdhbWVSZWFkeU5vdCwge30pO1xuICAgICAgICAgICAgcmVhZHkuaW5uZXJUZXh0ID0gXCLqsozsnoQg7KSA67mEXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImltIG5vdCByZWFkeVwiKTtcbiAgICAgICAgICAgIGlzUmVhZHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyDsnqzsi5zsnpEg6riw64qlXG5pZiAocmVzdGFydEJ0bikge1xuICAgIHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZ2FtZVJlc2V0KCk7XG4gICAgfSk7XG59XG4iXX0=
            },
            { "./sockets": 7 },
        ],
        4: [
            function (require, module, exports) {
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
                        nickname: nickname,
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
                //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUxvZ291dCIsImNsZWFyIiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBQWxCLEMsQ0FDQTs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDQSxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkwsUUFBckIsQ0FBakIsQyxDQUVBO0FBQ0E7O0FBQ0EsSUFBTU0sS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0gsUUFBRCxFQUFjO0FBQ3hCLE1BQU1JLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxXQUExQixFQUF1QztBQUFFVCxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBdkM7QUFDQSw0QkFBWUksTUFBWjtBQUNILENBSkQsQyxDQU1BOzs7QUFDQSxJQUFJSixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDbkJSLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJaLFVBQWpCO0FBQ0gsQ0FGRCxNQUVPO0FBQ0hOLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJYLFNBQWpCO0FBQ0FJLEVBQUFBLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0g7O0FBRUQsSUFBTVcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDNUJBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR25CLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBQ0EsTUFBUXFCLEtBQVIsR0FBa0JELEtBQWxCLENBQVFDLEtBQVI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQUQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxZQUFZLENBQUNpQixPQUFiLENBQXFCckIsUUFBckIsRUFBK0JrQixLQUEvQjtBQUNBdkIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlgsU0FBakIsQ0FQNEIsQ0FRNUI7QUFDQTs7QUFDQUksRUFBQUEsS0FBSyxDQUFDWSxLQUFELENBQUw7QUFDSCxDQVhEOztBQVlBLElBQUlwQixTQUFKLEVBQWU7QUFDWEEsRUFBQUEsU0FBUyxDQUFDd0IsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNSLGdCQUFyQztBQUNIOztBQUVELElBQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNSLENBQUQsRUFBTztBQUN4QlgsRUFBQUEsWUFBWSxDQUFDb0IsS0FBYjtBQUNBQyxFQUFBQSxRQUFRLENBQUNDLE1BQVQ7QUFDSCxDQUhELEMsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0cyB9IGZyb20gXCIuL3NvY2tldHNcIjtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xyXG4vLyBjb25zdCBsb2dvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9nb3V0XCIpO1xyXG5cclxuY29uc3QgTklDS05BTUUgPSBcIm5pY2tuYW1lXCI7XHJcbmNvbnN0IExPR0dFRF9PVVQgPSBcImxvZ2dlZE91dFwiO1xyXG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XHJcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xyXG5cclxuLy8gc29ja2V0IGVtaXQgc2V0Tmlja25hbWUgZXZlbnQgdG8gc2VydmVyXHJcbi8vIHdpbmRvdyDqsJ3ssrQg6rO167aA7ZWY6riwIGdsb2JhbCB2YXJpYWJsZSBpbiBicm93c2Vyc1xyXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xyXG4gICAgY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xyXG4gICAgc29ja2V0LmVtaXQod2luZG93LmV2ZW50cy5zZXROaWNrbmFtZSwgeyBuaWNrbmFtZSB9KTtcclxuICAgIGluaXRTb2NrZXRzKHNvY2tldCk7XHJcbn07XHJcblxyXG4vLyBsb2NhbCBzdG9yYWdl7JeQIG5pY2tuYW1lIOygleuztOqwgCDsnojripTsp4AgY2hlY2sg7ZuEIOu2hOq4sOyLnO2CtFxyXG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX09VVDtcclxufSBlbHNlIHtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xyXG4gICAgbG9nSW4obmlja25hbWUpO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xyXG4gICAgLy8gbG9nb3V0LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICAgIC8vIHNvY2tldOyXkCDrhJjqsqjso7zquLBcclxuICAgIGxvZ0luKHZhbHVlKTtcclxufTtcclxuaWYgKGxvZ2luRm9ybSkge1xyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUxvZ291dCA9IChlKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG59O1xyXG4vLyBpZiAobG9nb3V0KSB7XHJcbi8vICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4vLyAgICAgYnV0dG9uLmlubmVyVGV4dCA9IFwi66Gc6re47JWE7JuDXCI7XHJcbi8vICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUxvZ291dCk7XHJcbi8vICAgICBsb2dvdXQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuLy8gfVxyXG4iXX0=
            },
            { "./sockets": 7 },
        ],
        5: [
            function (require, module, exports) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true,
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
                    fireNotification(
                        "".concat(
                            nickname,
                            "\uB2D8\uC774 \uC785\uC7A5\uD558\uC168\uC2B5\uB2C8\uB2E4"
                        ),
                        "rgb(0,173,181)"
                    );
                };

                exports.handleNewUser = handleNewUser;

                var handleDisconnectUser = function handleDisconnectUser(
                    _ref2
                ) {
                    var nickname = _ref2.nickname;
                    fireNotification(
                        "".concat(
                            nickname,
                            "\uB2D8\uC774 \uD1F4\uC7A5\uD558\uC168\uC2B5\uB2C8\uB2E4."
                        ),
                        "rgb(181,9,0)"
                    );
                };

                exports.handleDisconnectUser = handleDisconnectUser;
                //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3RDLE1BQU1DLFlBQVksR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FELEVBQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QkosSUFBekI7QUFDQUUsRUFBQUEsWUFBWSxDQUFDRyxLQUFiLENBQW1CQyxlQUFuQixHQUFxQ0wsS0FBckM7QUFDQUMsRUFBQUEsWUFBWSxDQUFDSyxTQUFiLEdBQXlCLGNBQXpCO0FBQ0FYLEVBQUFBLElBQUksQ0FBQ1ksV0FBTCxDQUFpQk4sWUFBakI7QUFDSCxDQU5EOztBQVFPLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDM0NYLEVBQUFBLGdCQUFnQixXQUFJVyxRQUFKLDhEQUEwQixnQkFBMUIsQ0FBaEI7QUFDSCxDQUZNOzs7O0FBSUEsSUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixRQUFrQjtBQUFBLE1BQWZELFFBQWUsU0FBZkEsUUFBZTtBQUNsRFgsRUFBQUEsZ0JBQWdCLFdBQUlXLFFBQUosK0RBQTJCLGNBQTNCLENBQWhCO0FBQ0gsQ0FGTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbmNvbnN0IGZpcmVOb3RpZmljYXRpb24gPSAodGV4dCwgY29sb3IpID0+IHtcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBub3RpZmljYXRpb24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuICAgIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld1VzZXIgPSAoeyBuaWNrbmFtZSB9KSA9PiB7XHJcbiAgICBmaXJlTm90aWZpY2F0aW9uKGAke25pY2tuYW1lfeuLmOydtCDsnoXsnqXtlZjshajsirXri4jri6RgLCBcInJnYigwLDE3MywxODEpXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZURpc2Nvbm5lY3RVc2VyID0gKHsgbmlja25hbWUgfSkgPT4ge1xyXG4gICAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX3ri5jsnbQg7Ye07J6l7ZWY7IWo7Iq164uI64ukLmAsIFwicmdiKDE4MSw5LDApXCIpO1xyXG59O1xyXG4iXX0=
            },
            {},
        ],
        6: [
            function (require, module, exports) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true,
                });
                exports.handleStrokedPath = exports.handleBeganPath = void 0;

                var _sockets = require("./sockets");

                var canvas = document.getElementById("jsCanvas");
                var ctx = canvas.getContext("2d");
                var remove = document.getElementById("jsRemove");
                var INITIAL_COLOR = "#2c2c2c";
                var CANVAS_SIZE = 500;
                canvas.width = CANVAS_SIZE;
                canvas.height = CANVAS_SIZE;
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
                ctx.strokeStyle = INITIAL_COLOR;
                ctx.lineWidth = 10;
                ctx.lineCap = "round";
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
                //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwicmVtb3ZlIiwiSU5JVElBTF9DT0xPUiIsIkNBTlZBU19TSVpFIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibGluZUNhcCIsInBhaW50aW5nIiwic3RvcFBhaW50aW5nIiwic3RhcnRQYWludGluZyIsImJlZ2luUGF0aCIsIngiLCJ5IiwibW92ZVRvIiwic3Ryb2tlUGF0aCIsImxpbmVUbyIsInN0cm9rZSIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImhhbmRsZVJlbW92ZSIsImhhbmRsZUNNIiwicHJldmVudERlZmF1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQmVnYW5QYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFFQSxJQUFNSSxhQUFhLEdBQUcsU0FBdEI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsR0FBcEI7QUFFQVAsTUFBTSxDQUFDUSxLQUFQLEdBQWVELFdBQWY7QUFDQVAsTUFBTSxDQUFDUyxNQUFQLEdBQWdCRixXQUFoQjtBQUVBSixHQUFHLENBQUNPLFNBQUosR0FBZ0IsT0FBaEI7QUFDQVAsR0FBRyxDQUFDUSxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkosV0FBbkIsRUFBZ0NBLFdBQWhDO0FBQ0FKLEdBQUcsQ0FBQ1MsV0FBSixHQUFrQk4sYUFBbEI7QUFDQUgsR0FBRyxDQUFDVSxTQUFKLEdBQWdCLEVBQWhCO0FBQ0FWLEdBQUcsQ0FBQ1csT0FBSixHQUFjLE9BQWQ7QUFFQSxJQUFJQyxRQUFRLEdBQUcsS0FBZjs7QUFFQSxTQUFTQyxZQUFULEdBQXdCO0FBQ3BCRCxFQUFBQSxRQUFRLEdBQUcsS0FBWDtBQUNIOztBQUVELFNBQVNFLGFBQVQsR0FBeUI7QUFDckJGLEVBQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0g7O0FBRUQsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDeEJqQixFQUFBQSxHQUFHLENBQUNlLFNBQUo7QUFDQWYsRUFBQUEsR0FBRyxDQUFDa0IsTUFBSixDQUFXRixDQUFYLEVBQWNDLENBQWQ7QUFDSCxDQUhEOztBQUtBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNILENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3pCakIsRUFBQUEsR0FBRyxDQUFDb0IsTUFBSixDQUFXSixDQUFYLEVBQWNDLENBQWQ7QUFDQWpCLEVBQUFBLEdBQUcsQ0FBQ3FCLE1BQUo7QUFDSCxDQUhEOztBQUtBLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQ3hCLE1BQU1QLENBQUMsR0FBR08sS0FBSyxDQUFDQyxPQUFoQjtBQUNBLE1BQU1QLENBQUMsR0FBR00sS0FBSyxDQUFDRSxPQUFoQjs7QUFDQSxNQUFJLENBQUNiLFFBQUwsRUFBZTtBQUNYRyxJQUFBQSxTQUFTLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUFULENBRFcsQ0FFWDtBQUNILEdBSEQsTUFHTztBQUNIRSxJQUFBQSxVQUFVLENBQUNILENBQUQsRUFBSUMsQ0FBSixDQUFWLENBREcsQ0FFSDtBQUNIO0FBQ0o7O0FBRUQsU0FBU1MsWUFBVCxHQUF3QjtBQUNwQjFCLEVBQUFBLEdBQUcsQ0FBQ1EsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJKLFdBQW5CLEVBQWdDQSxXQUFoQztBQUNIOztBQUVELFNBQVN1QixRQUFULENBQWtCSixLQUFsQixFQUF5QjtBQUNyQkEsRUFBQUEsS0FBSyxDQUFDSyxjQUFOO0FBQ0g7O0FBRUQsSUFBSS9CLE1BQUosRUFBWTtBQUNSQSxFQUFBQSxNQUFNLENBQUNnQyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ1AsV0FBckM7QUFDQXpCLEVBQUFBLE1BQU0sQ0FBQ2dDLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDZixhQUFyQztBQUNBakIsRUFBQUEsTUFBTSxDQUFDZ0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNoQixZQUFuQztBQUNBaEIsRUFBQUEsTUFBTSxDQUFDZ0MsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0NoQixZQUF0QztBQUNBaEIsRUFBQUEsTUFBTSxDQUFDZ0MsZ0JBQVAsQ0FBd0IsYUFBeEIsRUFBdUNGLFFBQXZDO0FBQ0g7O0FBRUQsSUFBSXpCLE1BQUosRUFBWTtBQUNSQSxFQUFBQSxNQUFNLENBQUMyQixnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0gsWUFBakM7QUFDSDs7QUFFTSxJQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFBR2QsQ0FBSCxRQUFHQSxDQUFIO0FBQUEsTUFBTUMsQ0FBTixRQUFNQSxDQUFOO0FBQUEsU0FBY0YsU0FBUyxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBdkI7QUFBQSxDQUF4Qjs7OztBQUNBLElBQU1jLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFHZixDQUFILFNBQUdBLENBQUg7QUFBQSxNQUFNQyxDQUFOLFNBQU1BLENBQU47QUFBQSxTQUFjRSxVQUFVLENBQUNILENBQUQsRUFBSUMsQ0FBSixDQUF4QjtBQUFBLENBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1JlbW92ZVwiKTtcclxuXHJcbmNvbnN0IElOSVRJQUxfQ09MT1IgPSBcIiMyYzJjMmNcIjtcclxuY29uc3QgQ0FOVkFTX1NJWkUgPSA1MDA7XHJcblxyXG5jYW52YXMud2lkdGggPSBDQU5WQVNfU0laRTtcclxuY2FudmFzLmhlaWdodCA9IENBTlZBU19TSVpFO1xyXG5cclxuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XHJcbmN0eC5zdHJva2VTdHlsZSA9IElOSVRJQUxfQ09MT1I7XHJcbmN0eC5saW5lV2lkdGggPSAxMDtcclxuY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcblxyXG5sZXQgcGFpbnRpbmcgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIHN0b3BQYWludGluZygpIHtcclxuICAgIHBhaW50aW5nID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0UGFpbnRpbmcoKSB7XHJcbiAgICBwYWludGluZyA9IHRydWU7XHJcbn1cclxuXHJcbmNvbnN0IGJlZ2luUGF0aCA9ICh4LCB5KSA9PiB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKHgsIHkpO1xyXG59O1xyXG5cclxuY29uc3Qgc3Ryb2tlUGF0aCA9ICh4LCB5KSA9PiB7XHJcbiAgICBjdHgubGluZVRvKHgsIHkpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgIGNvbnN0IHggPSBldmVudC5vZmZzZXRYO1xyXG4gICAgY29uc3QgeSA9IGV2ZW50Lm9mZnNldFk7XHJcbiAgICBpZiAoIXBhaW50aW5nKSB7XHJcbiAgICAgICAgYmVnaW5QYXRoKHgsIHkpO1xyXG4gICAgICAgIC8vIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5iZWdpblBhdGgsIHsgeCwgeSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3Ryb2tlUGF0aCh4LCB5KTtcclxuICAgICAgICAvLyBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc3Ryb2tlUGF0aCwgeyB4LCB5IH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVSZW1vdmUoKSB7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ00oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmlmIChjYW52YXMpIHtcclxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcclxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0UGFpbnRpbmcpO1xyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYWludGluZyk7XHJcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcclxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgaGFuZGxlQ00pO1xyXG59XHJcblxyXG5pZiAocmVtb3ZlKSB7XHJcbiAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVJlbW92ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVCZWdhblBhdGggPSAoeyB4LCB5IH0pID0+IGJlZ2luUGF0aCh4LCB5KTtcclxuZXhwb3J0IGNvbnN0IGhhbmRsZVN0cm9rZWRQYXRoID0gKHsgeCwgeSB9KSA9PiBzdHJva2VQYXRoKHgsIHkpO1xyXG4iXX0=
            },
            { "./sockets": 7 },
        ],
        7: [
            function (require, module, exports) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true,
                });
                exports.updateSocket =
                    exports.initSockets =
                    exports.getSocket =
                        void 0;

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
                    return (socket = aSocket);
                }; // login.js에서 초기화 실행함 + 소켓 통신 시작

                exports.updateSocket = updateSocket;

                var initSockets = function initSockets(aSocket) {
                    var _window = window,
                        events = _window.events;
                    updateSocket(aSocket);
                    aSocket.on(events.newUser, _notifications.handleNewUser);
                    aSocket.on(
                        events.disconnected,
                        _notifications.handleDisconnectUser
                    );
                    aSocket.on(events.newMsg, _chat.handleNewMessage);
                    aSocket.on(events.uploadImg, _uploadImg.handleUploadImg);
                    aSocket.on(events.userUpdate, _users.handleUserUpdate);
                    aSocket.on(events.startCount, _game.handleGameStart);
                    aSocket.on(events.gameStarted, _game.handleGameStarted);
                    aSocket.on(events.gameCount, _game.handleGameCount);
                    aSocket.on(events.gameEnd, _game.handleGameEnd);
                    aSocket.on(events.gameResult, _game.handleGameResult);
                    aSocket.on(
                        events.gameDisconnect,
                        _game.handleGameDisconnect
                    );
                };

                exports.initSockets = initSockets;
                //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RVc2VyIiwibmV3TXNnIiwiaGFuZGxlTmV3TWVzc2FnZSIsInVwbG9hZEltZyIsImhhbmRsZVVwbG9hZEltZyIsInVzZXJVcGRhdGUiLCJoYW5kbGVVc2VyVXBkYXRlIiwic3RhcnRDb3VudCIsImhhbmRsZUdhbWVTdGFydCIsImdhbWVTdGFydGVkIiwiaGFuZGxlR2FtZVN0YXJ0ZWQiLCJnYW1lQ291bnQiLCJoYW5kbGVHYW1lQ291bnQiLCJnYW1lRW5kIiwiaGFuZGxlR2FtZUVuZCIsImdhbWVSZXN1bHQiLCJoYW5kbGVHYW1lUmVzdWx0IiwiZ2FtZURpc2Nvbm5lY3QiLCJoYW5kbGVHYW1lRGlzY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQVFBOztBQUNBOztBQUVBLElBQUlBLE1BQU0sR0FBRyxJQUFiLEMsQ0FFQTs7QUFDTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQixDLENBQ1A7Ozs7O0FBRU8sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsT0FBRDtBQUFBLFNBQWNILE1BQU0sR0FBR0csT0FBdkI7QUFBQSxDQUFyQixDLENBRVA7Ozs7O0FBQ08sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsT0FBRCxFQUFhO0FBQ3BDLGdCQUFtQkUsTUFBbkI7QUFBQSxNQUFRQyxNQUFSLFdBQVFBLE1BQVI7QUFDQUosRUFBQUEsWUFBWSxDQUFDQyxPQUFELENBQVo7QUFDQUEsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ0UsT0FBbEIsRUFBMkJDLDRCQUEzQjtBQUNBTixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDSSxZQUFsQixFQUFnQ0MsbUNBQWhDO0FBQ0FSLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNNLE1BQWxCLEVBQTBCQyxzQkFBMUI7QUFDQVYsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ1EsU0FBbEIsRUFBNkJDLDBCQUE3QjtBQUNBWixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDVSxVQUFsQixFQUE4QkMsdUJBQTlCO0FBQ0FkLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNZLFVBQWxCLEVBQThCQyxxQkFBOUI7QUFDQWhCLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNjLFdBQWxCLEVBQStCQyx1QkFBL0I7QUFDQWxCLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNnQixTQUFsQixFQUE2QkMscUJBQTdCO0FBQ0FwQixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDa0IsT0FBbEIsRUFBMkJDLG1CQUEzQjtBQUNBdEIsRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ29CLFVBQWxCLEVBQThCQyxzQkFBOUI7QUFDQXhCLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNzQixjQUFsQixFQUFrQ0MsMEJBQWxDO0FBQ0gsQ0FkTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU5ld01lc3NhZ2UgfSBmcm9tIFwiLi9jaGF0XCI7XG5pbXBvcnQgeyBoYW5kbGVEaXNjb25uZWN0VXNlciwgaGFuZGxlTmV3VXNlciB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7XG4gICAgaGFuZGxlR2FtZVN0YXJ0LFxuICAgIGhhbmRsZUdhbWVTdGFydGVkLFxuICAgIGhhbmRsZUdhbWVDb3VudCxcbiAgICBoYW5kbGVHYW1lRW5kLFxuICAgIGhhbmRsZUdhbWVSZXN1bHQsXG4gICAgaGFuZGxlR2FtZURpc2Nvbm5lY3QsXG59IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCB7IGhhbmRsZVVwbG9hZEltZyB9IGZyb20gXCIuL3VwbG9hZEltZ1wiO1xuaW1wb3J0IHsgaGFuZGxlVXNlclVwZGF0ZSB9IGZyb20gXCIuL3VzZXJzXCI7XG5cbmxldCBzb2NrZXQgPSBudWxsO1xuXG4vLyBzb2NrZXQg6rCA7KC47Jik6riwXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xuLy8gZ2V0U29ja2V0LmVtaXQoKSAuLi4uXG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTb2NrZXQgPSAoYVNvY2tldCkgPT4gKHNvY2tldCA9IGFTb2NrZXQpO1xuXG4vLyBsb2dpbi5qc+yXkOyEnCDstIjquLDtmZQg7Iuk7ZaJ7ZWoICsg7IaM7LyTIO2GteyLoCDsi5zsnpFcbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IChhU29ja2V0KSA9PiB7XG4gICAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgICB1cGRhdGVTb2NrZXQoYVNvY2tldCk7XG4gICAgYVNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XG4gICAgYVNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdGVkLCBoYW5kbGVEaXNjb25uZWN0VXNlcik7XG4gICAgYVNvY2tldC5vbihldmVudHMubmV3TXNnLCBoYW5kbGVOZXdNZXNzYWdlKTtcbiAgICBhU29ja2V0Lm9uKGV2ZW50cy51cGxvYWRJbWcsIGhhbmRsZVVwbG9hZEltZyk7XG4gICAgYVNvY2tldC5vbihldmVudHMudXNlclVwZGF0ZSwgaGFuZGxlVXNlclVwZGF0ZSk7XG4gICAgYVNvY2tldC5vbihldmVudHMuc3RhcnRDb3VudCwgaGFuZGxlR2FtZVN0YXJ0KTtcbiAgICBhU29ja2V0Lm9uKGV2ZW50cy5nYW1lU3RhcnRlZCwgaGFuZGxlR2FtZVN0YXJ0ZWQpO1xuICAgIGFTb2NrZXQub24oZXZlbnRzLmdhbWVDb3VudCwgaGFuZGxlR2FtZUNvdW50KTtcbiAgICBhU29ja2V0Lm9uKGV2ZW50cy5nYW1lRW5kLCBoYW5kbGVHYW1lRW5kKTtcbiAgICBhU29ja2V0Lm9uKGV2ZW50cy5nYW1lUmVzdWx0LCBoYW5kbGVHYW1lUmVzdWx0KTtcbiAgICBhU29ja2V0Lm9uKGV2ZW50cy5nYW1lRGlzY29ubmVjdCwgaGFuZGxlR2FtZURpc2Nvbm5lY3QpO1xufTtcbiJdfQ==
            },
            {
                "./chat": 1,
                "./game": 3,
                "./notifications": 5,
                "./uploadImg": 8,
                "./users": 9,
            },
        ],
        8: [
            function (require, module, exports) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true,
                });
                exports.handleUploadImg = void 0;

                var handleUploadImg = function handleUploadImg() {};

                exports.handleUploadImg = handleUploadImg;
                //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZEltZy5qcyJdLCJuYW1lcyI6WyJoYW5kbGVVcGxvYWRJbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU0sQ0FBRSxDQUFoQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBoYW5kbGVVcGxvYWRJbWcgPSAoKSA9PiB7fTtcclxuIl19
            },
            {},
        ],
        9: [
            function (require, module, exports) {
                "use strict";

                Object.defineProperty(exports, "__esModule", {
                    value: true,
                });
                exports.handleUserUpdate = void 0;
                var users = document.getElementById("jsUsers"); // 스타일링은 아래에서 자바스크립트로 진행해주세요.

                var handleUserUpdate = function handleUserUpdate(_ref) {
                    var sockets = _ref.sockets;
                    console.log(sockets);
                    users.innerHTML = "";
                    var count = document.createElement("span");
                    count.innerText = "\uD604\uC7AC ".concat(
                        sockets.length,
                        "\uBA85 \uC811\uC18D\uC911\n"
                    );
                    count.style.color = "white";
                    count.style.fontSize = "26px";
                    users.appendChild(count);
                    sockets.map(function (socket) {
                        var user = document.createElement("span");
                        user.style.color = "white";
                        user.innerText = "".concat(
                            socket.nickname,
                            " \uB2D8,    "
                        );
                        users.appendChild(user);
                    });
                };

                exports.handleUserUpdate = handleUserUpdate;
                //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbInVzZXJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZVVzZXJVcGRhdGUiLCJzb2NrZXRzIiwiY29uc29sZSIsImxvZyIsImlubmVySFRNTCIsImNvdW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImxlbmd0aCIsInN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSIsImFwcGVuZENoaWxkIiwibWFwIiwic29ja2V0IiwidXNlciIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUFkLEMsQ0FDQTs7QUFFTyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQzdDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBSixFQUFBQSxLQUFLLENBQUNPLFNBQU4sR0FBa0IsRUFBbEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixNQUF2QixDQUFkO0FBQ0FELEVBQUFBLEtBQUssQ0FBQ0UsU0FBTiwwQkFBd0JOLE9BQU8sQ0FBQ08sTUFBaEM7QUFDQUgsRUFBQUEsS0FBSyxDQUFDSSxLQUFOLENBQVlDLEtBQVosR0FBb0IsT0FBcEI7QUFDQUwsRUFBQUEsS0FBSyxDQUFDSSxLQUFOLENBQVlFLFFBQVosR0FBdUIsTUFBdkI7QUFDQWQsRUFBQUEsS0FBSyxDQUFDZSxXQUFOLENBQWtCUCxLQUFsQjtBQUVBSixFQUFBQSxPQUFPLENBQUNZLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVk7QUFDcEIsUUFBTUMsSUFBSSxHQUFHakIsUUFBUSxDQUFDUSxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQVMsSUFBQUEsSUFBSSxDQUFDTixLQUFMLENBQVdDLEtBQVgsR0FBbUIsT0FBbkI7QUFDQUssSUFBQUEsSUFBSSxDQUFDUixTQUFMLGFBQW9CTyxNQUFNLENBQUNFLFFBQTNCO0FBQ0FuQixJQUFBQSxLQUFLLENBQUNlLFdBQU4sQ0FBa0JHLElBQWxCO0FBQ0gsR0FMRDtBQU1ILENBZk0iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1c2VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNVc2Vyc1wiKTtcclxuLy8g7Iqk7YOA7J2866eB7J2AIOyVhOuemOyXkOyEnCDsnpDrsJTsiqTtgazrpr3tirjroZwg7KeE7ZaJ7ZW07KO87IS47JqULlxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZVVzZXJVcGRhdGUgPSAoeyBzb2NrZXRzIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNvY2tldHMpO1xyXG4gICAgdXNlcnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBjb3VudC5pbm5lclRleHQgPSBg7ZiE7J6sICR7c29ja2V0cy5sZW5ndGh966qFIOygkeyGjeykkVxcbmA7XHJcbiAgICBjb3VudC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuICAgIGNvdW50LnN0eWxlLmZvbnRTaXplID0gXCIyNnB4XCI7XHJcbiAgICB1c2Vycy5hcHBlbmRDaGlsZChjb3VudCk7XHJcblxyXG4gICAgc29ja2V0cy5tYXAoKHNvY2tldCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB1c2VyLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIHVzZXIuaW5uZXJUZXh0ID0gYCR7c29ja2V0Lm5pY2tuYW1lfSDri5gsICAgIGA7XHJcbiAgICAgICAgdXNlcnMuYXBwZW5kQ2hpbGQodXNlcik7XHJcbiAgICB9KTtcclxufTtcclxuIl19
            },
            {},
        ],
    },
    {},
    [2]
);
