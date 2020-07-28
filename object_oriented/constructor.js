// 간단한 객체 생성법
var person = {};
person.name = 'you sung min'; // property
person.introduce = function(){ // method
    return 'My name is ' + this.name;
}
// 두 가지 호출법
console.log(person.introduce());
console.log(person['introduce']());

// 생성자와 new
// 자바스크립트에서는 class가 존재하지 않는다.
function Person(){};
var p0 = new Person(); // 이 때의 Person은 생성자라고 부른다.
console.log(p0); // 빈 객체

function Person(name){ // 생성자
    this.name = name;
    this.introduce = function(){
        return 'My name is ' + this.name;
    }
}
var p1 = new Person('you sung min');
var p2 = new Person('egoing');
console.log(p1.introduce());
console.log(p2.introduce());
