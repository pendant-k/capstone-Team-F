import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

import socketController from "./socketController";
import events from "./events";

// consts
const PORT = 3000;
// express server variable
const app = express();

// server setting
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));

// Routes
// events 객체 넘겨주기
// app.get("/game", (req, res) =>
//     res.render("home", { events: JSON.stringify(events) })
// );
app.get("/", (req, res) =>
    // events 객체(global values) JSON 형식으로 보내기
    res.render("home", { events: JSON.stringify(events) })
);

const handleListening = () =>
    console.log(`server is running on : http://localhost:${PORT}`);

// ws 서버와 http 서버 동일한 port에 사용 가능
const server = app.listen(PORT, handleListening);

// io 서버 구현 -> on express server
// io -> 서버 전체 모든 client에게 emit 할 수 있음
const io = socketIO(server);

// control events
io.on("connection", (socket) => socketController(socket, io));

// game page에서 뒤로가기 했을 때
