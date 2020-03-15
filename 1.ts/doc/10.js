"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAnimalName(animal) {
    return animal.name;
}
var p2 = { name: "ss", age: 10, married: true };
getAnimalName(p2);
//基本类型的兼容性检查
var num;
var str = "sss";
num = str;
var num2;
var str2 = "aaa";
num2 = str2;
var sum;
function fun1(a, b) {
    return a + b;
}
sum = fun1;
function fun2(a) {
    return a;
}
sum = fun2;
var a1;
function a2(a) {
}
var x = {};
var y = {};
x = y;
//实现原理
//   interface Empty{
//   }
//   interface Empty{
//   }
//枚举的兼容性   枚举和数字兼容
var ColorStyle;
(function (ColorStyle) {
    ColorStyle[ColorStyle["RED"] = 0] = "RED";
    ColorStyle[ColorStyle["YELLOW"] = 1] = "YELLOW";
    ColorStyle[ColorStyle["BLUE"] = 2] = "BLUE";
})(ColorStyle || (ColorStyle = {}));
var color1;
var color2 = ColorStyle.RED;
color1 = color2;
var cc;
cc = ColorStyle.BLUE;
