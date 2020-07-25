// 함수는 값으로 취급할 수 있다. 다양한 용도가 가능한 데이터(first - class object)

// 1. 매개변수로써의 함수
function calc(func, num){
    return func(num);
}
function increase(num){
    return num+1;
}
function decrease(num){
    return num-1;
}

console.log(calc(increase,1));
console.log(calc(decrease,1));

// 2. 객체 멤버로써의 함수(메소드)
a = {
    b:function(){
        console.log('method');
    }
};
a['b']();

// 3. return값으로써의 함수
function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}
console.log(cal('plus')(2,1));
console.log(cal('minus')(2,1));

// 4. 함수배열
var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
];
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
console.log(input);

// callback
// sort가 익명함수를 callback으로 사용
// callback: 값으로써 함수를 전달받아 호출한 함수의 동작을 바꿀 수 있다
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
console.log(numbers.sort(function(a,b){
    return a-b;
}));