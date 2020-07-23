// topic: 재사용성

// 기본 syntax
function numbering(){
    i = 0;
    while(i<10){
        console.log(i);
        i+=1;
    }
}

// return
function simple_return(){
    return 'hello world';
}
console.log(simple_return());

// parameter
function simple_arg_return(arg){
    return arg;
}
console.log(simple_arg_return('argument'));

// definition technique
// first
n = numbering;
n();

// second
add = function (arg1, arg2){
    return arg1 + arg2;
}
console.log(add(1,2));

// third, 익명함수
/*
form

(function (params){
    codes;
})(args);

정의와 호출을 동시에 한다.
일회용으로 사용한다.
*/
console.log((function (arg1, arg2){
                return arg1 - arg2;
                })(3,1));