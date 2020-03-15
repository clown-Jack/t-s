"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bm = { name: "zf", fly: function () { }, age: 10, talk: function () { } };
//typeof 用来获取一个变量类型
//先定义类型再定义变量
// type Person2 = {
//     name:string;
//     age:number;
//     gender:number
// }
//先拿到一个对象 然后通过一个对象反推这个对象的类型
var p2 = { name: "zf", age: 0, gender: 0 };
var p22 = { name: "zf", age: 0, gender: 0 };
var FrontEndJob = { name: "FrontEnd" };
function getValueByKey(p, key) {
    return p[key];
}
var p4 = { name: 'zf', age: 10, gender: 0 };
getValueByKey(p4, name);
//批量定义
// type Person5Search={
//     [key in keyof Person5]?:Person5[key]
// }
var p5 = { name: 'zf', age: 10 };
var p6 = { name: 'zf', age: 10, gender: "male" };
var p7 = { name: 'zf', age: 10, gender: "male" };
var P8 = { name: "zf", age: 0 };
var e = 10;
var e2 = true;
var e3 = "X";
var e33 = { name: "X" };
var e4 = "321";
//ReturnType
function getUserInfo() {
    return { name: "zf", age: 10 };
}
var userinfo = { name: "zf", age: 10 };
// instanceof type
var Person10 = /** @class */ (function () {
    function Person10(name) {
        this.name = name;
    }
    return Person10;
}());
var p10 = { name: "zg" };
var p11 = new Person10("zf");
