function welcome(){
    return 'hellow module';
}

var PI = Math.PI;
// node js에서 외부 참조가능케 하는 키워드 exports
exports.area = function(r){
    return PI * r * r;
};

exports.circumference = function (r){
    return PI * 2 *r;
};