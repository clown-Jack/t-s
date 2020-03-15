//如果扩展全局变量 局部的变量类型
declare global {
    interface String {
        double(): string
    }
}
String.prototype.double = function () {
    return this + this
}
console.log("hello".double())

export { }

//合并声明 同一名称的两个独立声明会合并成一个单一声明
//class是一个类 类可以作为类型来使用
class Person12 {
    name: string = "hello"
}

let p1: Person12
//此处Person12就是一个值了
let p2 = new Person12();
