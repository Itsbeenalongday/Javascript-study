/*
Object 객체는 객체의 가장 기본적인 형태를 가지고 있는 객체이다. 다시 말해서 아무것도 상속받지 않는 순수한 객체다. 
자바스크립트에서는 값을 저장하는 기본적인 단위로 Object를 사용한다.
동시에 자바스크립트의 모든 객체는 Object 객체를 상속 받는데, 그런 이유로 모든 객체는 Object 객체의 프로퍼티를 가지고 있다.
 */

// 1. object.method() vs object.prototype.method()
// 호출 Object.keys() vs 만든객체.toString()
// Object는 생성자 함수다 즉, property를 가질 수 있다.
// var o = new Object()
// Object.keys = function(){...}
// Object.prototype.toString() = function(){...} 모든 객체들이 공통적으로 가지고 있어야 되는 기능, array든 number든..

var o ={'1':1,'2':2,'3':3};
console.log(Object.keys(o));
// console.log(o.keys()); // error
console.log(Object.toString());
console.log(o.toString());
// 모든 객체의 조상 Object
var n = 123
//console.log(n.keys()); // error - Object에서 상속되었지만 keys가 상속될 필요가 없다.
console.log(n.toString()); // toString은 상속되도 좋다.

Object.prototype.contain = function(value){
    for(var i in this){
        if(this[i] === value){
            return true;
        }
    }
    return false;
}

var arr = ['you','sung','min'];
console.log(arr.contain('min'));

var o = {'name':'you', 'age':25};
// 위의 object확장이 위험한 이유
// 모든 객체에 영향을 미치기 때문
// 신중하게 할 것
for(var i in o){
    console.log(o[i]); // contain도 속성으로 추가되어 튀어나온다.
}
// 위를 해결할 수 있는방법이 있긴함
for(var i in o){ // contain은 부모로부터 상속받은것
    if(o.hasOwnProperty(i)){ // o가 갖고 있는 property이면 true, 직접 정의되어있는 것이냐 체크하는 함수
        console.log(o[i]);
    }
}
