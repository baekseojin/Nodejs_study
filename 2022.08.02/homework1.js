// 문제 1 : read.txt 파일에 어떠한 문장을 적은 후, fs 모듈에서 promise 속성으로 불러보기

const fs = require('fs').promises;

fs.readFile('./read.txt')
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    })