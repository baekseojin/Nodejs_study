// dns : 도메인 이름에 대한 IP 주소를 얻어내는데 사용한다.
// dns 모듈 : dns 조회 및 도메인 관련 작업 수행

var dns = require('dns');

var google = dns.lookup('naver.com', function(err, addresses, family) {
    console.log(err);
    console.log(addresses);
    console.log(family);
});

// dns.lookup(호스트 이름, 콜백함수) -> 호스트 이름 조회, 콜백함수는 IP 주소를 포함해 호스트 이름에 대한 정보를 포함