/*
this는 함수 내에서 함수 호출 맥락(context)를 의미한다. 맥락이라는 것은 상황에 따라서 달라진다는 의미인데 
즉 함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라진다는 뜻이다. 
함수와 객체의 관계가 느슨한 자바스크립트에서 this는 이 둘을 연결시켜주는 실질적인 연결점의 역할을 한다.
*/

// 1. 함수 메소드 호출과 this
function func(){
    if(global === this){
        console.log("global === this"); // browser에서는 window
    }
}
func();

var o = {
    func : function(){
        if(o === this){
            console.log("o === this");
        }
    }
}
o.func();

// 2. 생성자와 this
var funcThis = null; 
 
function Func(){
    funcThis = this;
}
var o1 = Func();
if(funcThis === global){
    console.log('global');
}
 
var o2 = new Func();
if(funcThis === o2){
    console.log('o2');
}

// 생성자가 모두 실행되고 객체를 변수에 저장

// 3. apply, call
console.log(
(function (x,y){ // function(){} : 함수리터럴
    return x+y;
}).apply(null,[1,2]));

var sum = new Function('x','y','return x+y;'); // 함수리터럴은 이 과정을 간단히 해준것이다. 리턴문대신에 복잡한 함수코드가 왔다고 하면 불편하잖오
console.log(sum(1,2));

var o = {};
var p = {};
function func(){
    switch(this){
        case o:
            console.log('o');
            break;
        case p:
            console.log('p');
            break;
        case global:
            console.log('global');
            break;
    }   
}
func.apply(null);
func.apply(o);
func.apply(p);