const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const path = require('path');    // node 기본 모듈 path
const server = http.createServer(app);  // express가 http를 이용해 서버를 돌릴 수 있도록 구현
const io = socketIO(server);    // socket에 서버 관련 내용 다시 담기

const PORT = process.env.PORT || 5000;

io.on('connection', (socket)=>{
    // console.log('connection success');
    // client에서 보낸 내용에 응답
    socket.on('chatting', (data)=>{
        console.log(`client - ${data}`);
        io.emit('chatting', `hello, client, ${data}`)
    });
});



// 여기 폴더를 기본으로 사용하도록 설정
app.use(express.static(path.join(__dirname, 'src')));

server.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`)
});