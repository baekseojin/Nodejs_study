// 문제 1 : http 모듈을 이용해서 서버를 열고 간단하게 글 써보기

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text'})
    res.write('<h1>homework</h1>');
    res.end();
})
    .listen(8080, () => {
        console.log('8080번 포트에서 서버 연결 대기 중입니다!');
    })

// http://localhost:8080 