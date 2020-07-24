function welcome(){
    return 'hellow module';
}

var PI = Math.PI;

exports.area = function(r){
    return PI * r * r;
};

exports.circumference = function (r){
    return PI * 2 *r;
};