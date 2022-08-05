// 문제 3 : event 매소드 중 하나를 선택해서 그것을 자세히 설명하고 간단한 코드 작성해보기

const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.on('event', () => {
    console.log("숙제 끝 !!");
});
myEvent.removeAllListeners('event');
myEvent.emit('event');

// removeAllListeners 매소드는 이벤트에 연결된 모든 이벤트 리스너를 제거한다. 


