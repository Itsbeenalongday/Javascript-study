// while loop
console.log('while loop 10 times!');
var i = 0;
while(i<10){
    console.log( i +' th'+ ' loop');
    i += 1;
}
console.log(i);

// for loop
console.log('for loop 10 times!');
for(var j=0; j<10; ++j){
    console.log( j +' th'+ ' loop');
}
console.log(j);

// ++i와 i++의 차이
var k = 0;
console.log(k++); // 0출력 후, console.log()끝난 후에 1이됨 사용시점에서는 증가 x
k = 0;
console.log(++k); // 1이 출력됨, 즉 사용시점에서 이미 증가되어있음

for(i = 0; i < 10; i++){
    if(i === 5) {
        break;
    }
    console.log( i +' th'+ ' loop');
}
console.log('탈출 후');
console.log( i +' th'+ ' loop');

console.log('break 문');
for(var r=0; r<3; r++){
    for(var c=0; c<3; c++){
        // 현재의 루프만 탈출하도록, r=1인 경우 아예 통째로 건너뜀,  continue와의 차이
        if(r===1){
            console.log('break문 진입');
            break;
        }
        console.log('r :' + r + ' c :' + c);
    }
}

console.log('continue 문');
for(var r=0; r<3; r++){
    for(var c=0; c<3; c++){
        // 현재의 루프만 건너 뛰도록, r=1일 때 continue니까 r=1, c=0,1,2 총 3번 continue문 진입하지
        if(r===1){
            console.log('continue문 진입');
            continue;
        }
        console.log('r :' + r + ' c :' + c);
    }
}

// 숫자를 문자로. String(숫자)
// 반대의 경우. Number(문자), 숫자로 반환할 수 없는 경우 NaN반환
for(var r=0; r<10; r++){
    for(var c=0; c<10; c++){
        console.log(String(r)+String(c));
    }
}

console.log(Number('123'));

// string + number => string