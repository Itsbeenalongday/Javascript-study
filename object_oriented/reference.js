// 참조와 복제

// 원시 데이터 타입일 때,
// 서로 다른 데이터공간을 가리키기에 원본에 영향을 미치지 않는다.
var a = 1;
var b = a; // 같은 값을 copy and paste한다.
b = 2;
console.log(a);
console.log(b);

// 객체
// 참조
// symbolic link(바로가기)
var o1 = {'id' : 1};
var o2 = o1; // 서로 같은 객체를 가리키게 만든다.
o2.id = 3;
console.log(o1.id); // 2로 변경
o2 = {'id' : 2}; // 새로 만들었기에 15번 line무시됨.
console.log(o2.id);
console.log(o1.id);
/*
변수에 담겨있는 데이터가 원시형이면 그 안에는 실제 데이터가 들어있음
객체면 변수 안에는 데이터에 대한 참조 방법이 들어있음
*/

// 함수
// 원시데이터 타입이 인자로 넘어간경우
var a1 = 1;
function func1(b1){ // b = a1
    b1 = 2;
}
func1(a1);
console.log(a1); // 1
// 객체가 인자로 넘어간경우 - 함수내에서 새로운 객체가 생성되는 경우
var a2 ={'id' : 1};
function func2(b2){
    b2 = {'id' : 2};
}
func2(a2);
console.log(a2.id); // 1

// 원시데이터 타입이 인자로 넘어간경우 - 함수내에서 객체의 속성이 변경되는 경우
var a3 ={'id' : 1};
function func3(b3){
    b3.id = 2;
}
func3(a3);
console.log(a3.id); // 2
