// 객체는 속성을 갖고있다.
// func.apply() - 함수객체가 갖고있는 속성함수 즉, 메소드

function sum1(a,b){
    return a+b;
}
console.log(sum1(1,2));
console.log(sum1.apply(null,[1,2]));

// apply를 왜쓸까?
o1 = {val1:1, val2:2, val3:3};
o2 = {v1:10, v2:50, v3:100, v4:25};
function sum(){
    var _sum = 0;
    for(name in this){ // this는 호출 시 정해진다.
        _sum += this[name];
    }
    return _sum;
}
console.log(sum.apply(o1)); // o1이 this, o1이라는 객체의 sum함수가 됨, 특정 객체의 메소드처럼 쓸 수 있다
console.log(sum.apply(o2)); // o2가 this, o2라는 객체의 sum함수가 됨
