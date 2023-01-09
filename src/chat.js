"use strict"
const socket = io();

// 먼저 서버로 데이터 보냄
socket.emit('chatting', 'from client');
// 서버에서 보낸 내용에 응답
socket.on('chatting', (data)=>{
    console.log(`server - ${data}`);
})

console.log(socket);