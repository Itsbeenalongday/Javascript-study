// 원시 - 객체가 아닌 데이터타입
// 원시- 숫자, 문자열, 불리안, null, undefined : 이것이 아니면 모두 객체임

var str1 = 'coding';
console.log(str1.length);
console.log(str1.charAt(0));
// 문자열은 원시타입에도 불구하고, 사용꼴이 객체같음
// 임시로 객체로 만듦, 가져야할 기능들이 있기때문
// 임시로 만들어지는 객체를 wrapper object라고 한다.
// 원시데이터 타입을 감싼다.
var str2 = new String('code');
str2.prop = 'master'; // 이 순간이 끝난다음에는 객체가 제거되고, 원시타입으로 변경
console.log(str2.prop); // undefined -> 이시점에서는 삭제됨

// wrapper object
/* 
Number
String
Boolean
null, undefined는 wrapper가 존재하지 않음(순수 원시 데이터타입)
*/