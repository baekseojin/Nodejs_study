// 문제 2 : buffer 객체에 있는 여러 매소드 중 하나를 선택해서 그것을 자세히 설명하고 간단한 코드 작성해보기

const array = [Buffer.from("숙"), Buffer.from("제"), Buffer.from('중....')];
const buffer = Buffer.concat(array);
console.log(buffer.toString());

// concat 매소드는 배열 안에 든 버퍼를 하나로 합친다.
// 3 - Buffer.from을 이용해서 문자열을 버퍼로 바꾸고
// 4 - concat을 이용해서 array 배열 안에 버퍼를 합친 후
// 5 - 합쳐진 버퍼를 문자열로 바꿔서 출력 