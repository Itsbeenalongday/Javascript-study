// python의 딕셔너리, c++의 map과 같은 타입
// 객체지향의 그 객체와는 다른 컨테이너를 의미

// definition의 2가지 방법
var obj1 = {'first':1, 'second':2, 'third':3};

var obj2 = new Object();
obj2['first'] = 1;
obj2['second'] = 2;
obj2['third'] = 3;

console.log(typeof obj1);
console.log(typeof obj2);

// element 참조 2가지 방법
console.log(obj1['fir'+'st']);
console.log(obj2.first);

// 반복문 - in
for(key in obj1){
    console.log('key: ' + key +', value: ' + obj1[key]);
}
// 배열에서도 사용가능
var arr = [1,2,3];
for(element in arr){
    console.log(element);
}

// 객체에는 뭐든 담을 수 있다.
var obj = {
    'list': {'you':1, 'kim':2, 'choi':3},
    'show': function(){
        for(var key in this.list){ // this는 keyword, 객체를 가리키는 변수 obj = this
            console.log(key, this.list[key]);
        }
    }
}

obj.show();
obj['show']();
// 해보니까 배열 형태의 것도 되네
var object_arr = [
    {'y':1, 'k':2, 'c':3},
    function(){
        for(var key in this[0]){ // this는 keyword, 객체를 가리키는 변수 object_arr = this
            console.log(key, this[0][key]);
        }
        console.log(this);
        console.log(this[0]);
        console.log(this[1]);
    }
];

object_arr[1]();
