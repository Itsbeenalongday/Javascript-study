// prototype은 원형이란 뜻
// prototype chain

function Ultra(){};
Ultra.prototype.ultarProp = true;

function Super(){};
Super.prototype = new Ultra();

function Sub(){};
Sub.prototype = new Super();

var o = new Sub(); // new + 함수 = 생성자
/*
객체 o에서 ultraProp를 찾는다.
없다면 Sub.prototype.ultraProp를 찾는다.
없다면 Super.prototype.ultraProp를 찾는다.
없다면 Ultra.prototype.ultraProp를 찾는다.
 */
console.log(o.ultarProp);
console.log(o.constructor); // undefined
console.log(o.__proto__) // 모든 객체가 갖는 것

// prototype내에 특수한 객체가 들어가있다.
// 생성자가 호출될 때, 이 객체를 꺼내서 리턴

function a(){};
a.prototype.name = 'you seong min';
var p1 = new a(); // 여기서 프로토타입내의 객체가 리턴
//p1['name'] = 'you seong min'; // 이미 프로토타입의 역할은 끝났다.
console.log(p1.constructor); // undefined
console.log(p1.__proto__)
console.log(p1.name);
console.log(p1);
