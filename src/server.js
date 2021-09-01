
import http from "http";
import SocketIO from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
// 루트주소뒤에 어떤걸 붙여도 홈디렉토리로 돌아간다
app.get("/*", (_, res) => res.redirect("/"));

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", (socket) => {
    //방에 입장할 때 실행
    socket.on("join_room", (roomName) => {
        socket.join(roomName);
        socket.to(roomName).emit("welcome");
    });
    //상대 브라우저에서 반응이 왔을 때 실행
    socket.on("offer", (offer, roomName) => {
        socket.to(roomName).emit("offer", offer);
    });
    //상대 브라우저에 응답할 때 실행
    socket.on("answer", (answer, roomName) => {
        socket.to(roomName).emit("answer", answer);
    });
    //상대방이 나갈 때 영상 출력부분을 멈출 때 실행
    socket.on("ice", (ice, roomName) => {
        socket.to(roomName).emit("ice", ice);
    });
    //상대방이 새로운 메세지를 전송할 때 실행
    socket.on("new_message", (msg, room, done) => {
        socket.to(room).emit("new_message", `상대 : ${msg}`);
        done();
    });
    //상대방과의 연결이 끊어졌을 때 실행
    socket.on("disconnecting", () => {
        socket.rooms.forEach((room) =>
            socket.to(room).emit("bye")
        );
    });
});

const handleListen = () => console.log(`Listening on http://localhost:3000`);
httpServer.listen(3000, handleListen);
