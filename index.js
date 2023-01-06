const express = require('express');
const http = require('http');

const app = express();
const path = require('path');    // node 기본 모듈 path
const server = http.createServer(app);  // express가 http를 이용해 서버를 돌릴 수 있도록 구현


const PORT = process.env.PORT || 5000;

// 여기 폴더를 기본으로 사용하도록 설정
app.use(express.static(path.join(__dirname, 'src')));

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`)
});