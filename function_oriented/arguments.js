// 가변인자는 arguments로 정의됨
function sum(){
    var sum = 0;
    console.log(typeof arguments); // object타입이다. 유사 배열
    for(var i=0; i<arguments.length; ++i){
        sum += arguments[i];
    }
    return sum;
}
console.log('result : ' + sum(1,2,3,4));

function one(arg1){
    console.log('one.length', one.length, // 함수에서 정의한 매개변수의 수
                'arguments.length', arguments.length // 함수를 호출할 때 넘긴 매개변수의 수
    );
}
one('val1', 'val2');