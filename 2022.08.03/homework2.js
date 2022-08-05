// 문제 2 : http 모듈을 이용해서 서버를 열고 html을 이용한 페이지를 만들고 promises 속성으로 받아서 띄워보기

const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./homework2.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);
    }
    catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(err.message);
    }
})
    .listen(8080, () => {
        console.log('8080 포트에서 서버 대기중')
    })

// http://localhost:8080


