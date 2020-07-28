function Person(name){
    this.name = name;
}

Person.prototype.name = null; // prototype은 속성
Person.prototype.introduce = function(){
    return 'My name is ' + this.name;
}

// 상속구현하기

function Programmer(name){
    this.name = name;
}

Programmer.prototype = new Person(); // 상속하는 코드 prototype속성에 person객체가 들어감
Programmer.prototype.job = 'programmer'; // 상속 개체만의 기능
console.log(new Person().job);
var p1 = new Programmer('you sung min');
console.log(p1.job);
console.log(p1.introduce()); // 부모의 introduce를 호출
