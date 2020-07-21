console.log('one'=="one");
console.log('one'==="one");
console.log(1=='1'); // 동등연산자, 데이터형식이 달라도 본질 값이 같다면 true, 앵간하면 쓰지마라
console.log(1==='1'); // 엄격한 동등연산자, 데이터형식과 값이 같아야 true
console.log(null == undefined); // 변수를 선언만 해놓으면 undefined
console.log(null === undefined); // 값 없는 상태를 명시적으로 표기, undefined는 값이 없는 상태
console.log(true == 1)
console.log(true == 2) // 오직 1만 true로 간주
console.log(true === 1) // Boolean과 number여서 false
console.log(NaN === NaN); // 0/0, 1000/0, 숫자가 아님 
console.log(Infinity == -Infinity);
console.log(Infinity === Infinity);