"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//更明确的判断某个分支作用域中的类型
//基本数据类型的类型保护
function double(input) {
    if (typeof input == "string") {
        return input.length;
    }
    else if (typeof input == "number") {
        return input;
    }
    else {
        return 0;
    }
}
//类类型保护
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "zf";
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.age = 10;
        return _this;
    }
    return Cat;
}(Animal));
function getName(animal) {
    if (animal instanceof Cat) {
        console.log(animal.age);
    }
    else {
        console.log(animal.name);
    }
}
getName(new Animal());
//null保护 如果开启了strictNullChecks选项的话 那么我们就不能直接调用可能为null的变量上的方法了
//1.加！
//2.加一个或判断
function getFirstLetter(str) {
    str = str || "";
    return str.charAt(0);
}
function getButton(button) {
    if (button.class == "Warning") {
        console.log(button.text1);
    }
    else {
        console.log(button.text2);
    }
}
function getNumber(animal) {
    if ("swing" in animal) {
        animal.fly();
    }
    else {
        animal.run();
    }
}
function isBird(x) {
    return x.swing == 2;
}
function getAnimal(x) {
    if (isBird(x)) {
        console.log("我是一只鸟");
    }
    else {
        console.log("我是一条狗");
    }
}
//类型保护是为了让你更具体的调用参数上属性和方法
