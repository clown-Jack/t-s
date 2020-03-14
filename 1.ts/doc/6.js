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
//类
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    return Person;
}());
//getter setter
var User = /** @class */ (function () {
    function User(myname) {
        this.myname = myname;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this.myname;
        },
        set: function (newName) {
            this.myname = newName;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var u = new User("a");
console.log(u.myname);
u.myname = 'b';
console.log(u.myname);
console.log(u.hasOwnProperty("name"));
console.log(Object.getPrototypeOf(u));
console.log(Object.getPrototypeOf(u).hasOwnProperty("name"));
//abstract抽象类  不能被实例化new 只能被继承
//抽象类一般是用来封装一些公共的，给子类使用的方法 属性的
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.age = 38;
        this.money = 10;
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.getClassName = function () {
        console.log(this.className);
    };
    Dog.prototype.getName = function () {
        console.log(this.name);
    };
    Dog.prototype.getAge = function () {
        console.log(this.age);
    };
    Dog.className = 'Dog';
    return Dog;
}(Animal));
var a = new Animal("ss");
// a.name = "x"
// a.age
//通过类型的继承来讲一下访问修饰符  public  protected  private
//public 里里外外都能访问 自己  自己的子类  其他类都能
//protected 自己和子类能访问 其他地方不能访问
//private 私有的 只有自己能访问 子类的其他都不能访问
