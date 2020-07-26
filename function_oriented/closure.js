/*
closure -
내부함수가 외부함수의 context에 접근할 수 있는것
*/

// 1. 내부 외부 함수란?
function outter1(){
    var some_string = 'outter variable';
    function inner(){
        console.log(some_string); // closure - 내부함수에서 외부함수의 지역변수 some_string에 접근가능
    }
    inner();
}
outter1();

// 2. 외부함수가 종료된 시점에서도 참조가능
function outter2(){
    var some_string = 'outter var';
    return function(){
        console.log(some_string);
    }
}
inner = outter2(); // outter2는 여기서 종료되었음
inner(); // 하지만 여기서 외부함수의 지역변수인 some_string을 사용가능

// closure의 효용 - private 변수를 사용할 수 있다.
function movie_factory(title){
    return{
        'get_movie' : function(){
            return title;
        },
        'set_movie' : function(_title){
            title = _title;
        }
    };
}

matrix = movie_factory('matrix');
transformer = movie_factory('transformer');
console.log(matrix.get_movie());
console.log(transformer.get_movie());
transformer.set_movie('트랜스포머');
console.log(matrix.get_movie());
console.log(transformer.get_movie());
/*
외부함수의 지역변수인 title에는
오직 get_movie와 set_movie만이 접근할 수 있다.
무분별한 수정 접근을 방지하여 프로그램의 안전성을 높인다.
다른 언어와 달리 private라는 키워드는 따로 없고 클로저 개념을 통해
private를 구현할 수 있다.
*/

var arr = [];
for(var i=0; i<5; ++i){
    arr[i] = function(){
        console.log(i);
    }
}
for(var index in arr){
    arr[index]();
}
// 5가 다섯 번 출력된다.
// 왜? i가 전역변수이기 때문에 for in문을 실행하고 있는 시점의 i는 5이기 때문
// 이 코드를 0 ~ 4가 나오게 고치고 싶다.

var arr = [];
for(var i =0; i<5; ++i){
    arr[i] = (function(id){
        return function(){
            return id; // 내부함수가 id를 가지고 있기 때문에 0 ~ 4를 출력할 수 있다.
        }
    })(i);
}
for(var index in arr){
    console.log(arr[index]());
    console.log(typeof arr[index]);
}
