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
