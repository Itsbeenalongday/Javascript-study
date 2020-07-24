// definition
var array = ['you', 'sung', 'min'];
console.log(array);
console.log(typeof array); // object타입이다.

// element참조
(function(arr){
    var size = arr.length;
    console.log(size);
    for(var i =0; i<size; ++i){
        // c처럼 arr + i 가 안된다.
        console.log(arr[i]);
    }
})(array);

// return 값이 하나임에 주목, 배열을 리턴하면 여러 변수를 리턴하는 것과 같은 효과
function arr_return(){
    return ['you', 'sung', 'min', 'is', 'best']
}

var returned_arr = arr_return();
for(var i=0; i<returned_arr.length; ++i){
    console.log(returned_arr[i]);
}
// 이런식으로도 됨, 존나 신기하네 약간 익명변수라 그래야되나 이걸
for(var i=0; i<arr_return().length; ++i){
    console.log(arr_return()[i]);
}

// element추가 - push
var seq1 = [];
for(var i=1; i<=10; ++i){
    seq1.push(i);
}
console.log(seq1);

// 두 array 합체 - concat
var seq2 = [11, 12, 13, 14 ,15 ,16, 17, 18, 19, 20];
seq1 = seq1.concat(seq2);;
console.log(seq1);

// 기존원소의 앞으로 element추가 - unshift
seq1.unshift(0);
console.log(seq1);

// 배열의 중간에 부분수열 추가 - splice
// 어디부터 끼워넣을 건가, 기존 배열에서 앞에서 명시한 인덱스부터 몇개를 삭제할 것인가, 끼워넣을 원소들
// 리턴은 삭제된 원소들
console.log(seq1.splice(4,0,100,101,102));
console.log(seq1);

// 맨 뒤 element 제거 - pop
seq1.pop();
console.log(seq1);

// 맨 앞 element 제거 - shift
seq1.shift();
console.log(seq1);

// 정렬 - sort 오름차순
// sort(sortfunc)
// sortfunc은 내가 원하는 정렬 기준만드는 함수
seq1.sort();
console.log(seq1);

// 정렬 - reverse 내림차순
seq1.reverse();
console.log(seq1);

var seq = [1,2,3,4,5,6,7,8,9,10]; // 1 10 2 3 4 ... 이렇게 정렬되네, default가 문자열 유니코드 기준
console.log(seq.sort());

// 숫자의 크기를 기준으로 정렬해보기
// 특이한게 유니코드 기준이라 a<b로 한게 위의 결과고 숫자크기 기준으로 정렬하려면 두 원소를 빼야함
console.log(seq.sort(function(a,b){
    return a - b;
}));
console.log(typeof -1);
console.log(typeof seq[0]);

/*
compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
compareFunction(a, b)이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다. 참고 : ECMAscript 표준은 이러한 동작을 보장하지 않으므로 모든 브라우저(예 : Mozilla 버전은 적어도 2003 년 이후 버전 임)가 이를 존중하지는 않습니다.
compareFunction(a, b)이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다.
compareFunction(a, b)은 요소 a와 b의 특정 쌍이 두 개의 인수로 주어질 때 항상 동일한 값을 반환해야합니다. 일치하지 않는 결과가 반환되면 정렬 순서는 정의되지 않습니다.
*/ 