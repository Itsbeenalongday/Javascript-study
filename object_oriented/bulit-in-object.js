// jsp가 기본적으로 가지고 있는 객체들을 의미한다.
/*
Object
Function
Array
String
Boolean
Number
Math
Date
RegExp
언어 자체에서 제공하는 것은 위의 것이 전부
호스트환경에서의 jsp가 가진 객체는 위의 것보다 훨 많다
*/

// array literal은 []
// 내장객체에 원하는 기능을 추가하는 방법

var arr1 = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
// Math.random() [0,1]구간사이의 임의의 값 리턴 * 랜덤하게 뽑을 수 중 최대로 하고싶은 값
// 화살표 함수 익명함수
var random_selection = arr => console.log(arr[Math.floor(arr.length*Math.random())]);
random_selection(arr1);

// 프로토타입을 통해서 Array객체에 random_selection기능을 가질 수 있도록 만듦
// 추후에 만들어지는 모든 Array객체는 random_selection기능을 갖는다.

Array.prototype.random_selecion = function()  {
    console.log(this[Math.floor(this.length*Math.random())]); // 내가 만드는 배열이 이 함수를 호출할 것이므로 호출자가 this가 된다.
};

var arr2 = Array(1,2,3,4,5,6,7,8,9,10);
arr2.random_selecion();