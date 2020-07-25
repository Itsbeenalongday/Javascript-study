/*
* var을 쓰고 안 쓰고의 차이
* 지역내에서 var쓰면 지역변수를 만듦
* 지역밖에서 var쓰면 전역변수를 만듦
 */

 var vscope = 'global'; // 전역변수, 이것은 var을 쓰나 안쓰나 차이가 없음

 function fscope(){
     var vscope = 'local'; // 여기서는 var을 쓰고 안쓰고의 차이가 있음
     vscope = 'local';
 }

 fscope();
 console.log(vscope);

 // 무한루프
 /*
 function initialize(){
     i = 0;
 }*/
 for(var i= 0; i<5; ++i){ // 전역변수
    //initialize(); 
    console.log(i);
 }
console.log(i);

// 나만의 변수들을 함수로 묶어서 지역변수로 활용하는 방법 - 함수로 묶고 바로 호출
// 자바스크립트에서 모듈화하는 일반적인 방법ㄴ
(function(){
var MYAPP = {} // 객체
MYAPP.calculator = { // 객체내의 변수 - 속성
    'left' : null, // 객체내의 객체
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}
 
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
console.log(sum());
}());

// 지역범위를 제한할 수 있는 코드블록은 오직 함수뿐이다.
// 다른언어와의 차이 for문내의 변수도 전역변수가 되는 이유

// i는 무엇이 나올까?
/*
* static scoping(lexical scoping)
* 함수내의 변수는 호출시점이 아닌 선언 시점에서의 유효범위를 갖는다
* 아래코드를 보자
* b가 선언될 때 당시의 전역변수는 5이므로 결과는 5가 나온다.
* a가 b를 호출하기에 i가 10을 출력할거라고 헷갈리기 쉽다.
*/
var i = 5;
a();
function a(){
    var i = 10;
   b();
}
a();
function b(){
    console.log(i);
}
a();

/* c++ 코드
int i = 5;

void b() {
    ios::sync_with_stdio(false);
    cout.tie(nullptr);
    cout << i << '\n';
}

void a() {
    int i = 10;
    b();
}

int main() {
    a();
}
// 결과는 5
*/