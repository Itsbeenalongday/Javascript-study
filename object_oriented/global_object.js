// 모든 객체는 이 전역 객체의 property이다.
// 최고 조상

function func(){
    console.log('hello');
}
// window.func(); // window는 생략가능, node에서는 동작x, 브라우저에서만 동작

// console.log(global.func());

console.log(global);

global.o = {'func':function(){
    console.log('Hello');
}};

global.o.func();


/*
* node의 전역객체 - console, process, exports
* node의 전역변수 - __filename, __dirname
*/