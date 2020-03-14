"use strict";
//泛型 宽泛的类型  不具体类型
function createArray(length, value) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = value;
    }
    return arr;
}
var arr = createArray(3, 'x');
console.log(arr); //['x','x','x']
//泛型类  用到泛型的类
var MyArr = /** @class */ (function () {
    function MyArr() {
        this.list = [];
    }
    MyArr.prototype.add = function (element) {
        this.list.push(element);
    };
    MyArr.prototype.getMax = function () {
        var maxVal = this.list[0];
        for (var i = 1; i < this.list.length; i++) {
            if (this.list[i] > maxVal) {
                maxVal = this.list[i];
            }
        }
        return maxVal;
    };
    return MyArr;
}());
var arr2 = new MyArr();
arr2.add(1);
arr2.add(3);
arr2.add(2);
console.log(arr2.getMax());
var add = function (a, b) {
    return a;
};
//多个泛型 不借助中间变量的方法交换两个变量的值 
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var ret = swap([0, "a"]);
ret[0].toLowerCase();
ret[1].toFixed(2);
//默认泛型
function createArray1(length, value) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = value;
    }
    return arr;
}
var arr1 = createArray1(3, 9);
console.log(arr1); //['x','x','x']
function logger2(val) {
    console.log(val.length);
}
var cart = { list: [1, 2, 3] };
var c1 = { list: [1, 2, 33] };
var c2 = ["1"]; //继承和实现不能用别名，应该用接口
