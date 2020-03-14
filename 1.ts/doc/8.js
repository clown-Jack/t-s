"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var speaker = {
    //name:"bdt",
    speak: function () { }
};
var r = {
    width: 100, height: 10
};
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.speak = function () { };
    ;
    Person2.prototype.eat = function () { };
    ;
    Person2.prototype.move = function () { };
    return Person2;
}());
var p1 = {
    id: 1,
    name: "sss"
};
var discount = function (price) {
    return price * .8;
};
var sum2 = function () {
    var a = arguments;
    console.log(a);
    console.log(Array.prototype.slice.call(a));
    return Array.prototype.slice.call(a).reduce(function (val, item) { return val + item; }, 0);
};
console.log(sum2(1, 2, 3));
var arr = ['aa', 'bb'];
var obj = { name: "sss" };
//类的接口
//用接口来约束构造函数的类型
var Animal3 = /** @class */ (function () {
    function Animal3(name) {
        this.name = name;
    }
    return Animal3;
}());
function createClass(clazz, name) {
    return new clazz(name);
}
var a3 = createClass(Animal3, "别抖腿");
console.log(a3);
