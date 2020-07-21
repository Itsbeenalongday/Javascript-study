// 변수 선언
// 어떠한 형태의 데이터든간에 변수내에 담을 수 있다.
var a  = 1; // var은 생략가능, 그러나 생략 시, 유효범위가 달라짐
console.log(a);
a = 10;
console.log(a);
a = 'hello';
console.log(a);
b = 2;
console.log(a+b); 
console.log(typeof (a+b));
a =1, b= 2;
console.log(a+b);
a= 1; console.log(a+b); // 여러줄 multiple 명령

// 변수는 코드의 재활용성을 높여준다.
// 예를들어서 100에 10을 더하고, 10을 나눈 후에 다시 10을 빼고 거기에 10을 곱해야 한다고 치자. 그리고 각 단계마다 
// 그 결과를 출력해야 한다면 코드는 아래와 같을 것이다.
console.log(100+10);
console.log((100+10)/10);
console.log(((100+10)/10)-10);
console.log((((100+10)/10)-10)*10);
// 그런데 계산해야 할 값을 100이 아니라 1000으로 바꿔야 한다면 위의 코드를 모두 수정해야 할 것이다. 변수를 적용해보자.
// 위 아래 코드 중 무엇이 편한가?
a = 100;
a= a+10;
console.log(a);
a /= 10;
console.log(a);
a -= 10;
console.log(a);
a *= 10;
console.log(a);