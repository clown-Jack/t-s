//接口
export {}
//用接口来表示对象的形状
interface Speakable {
    speak(): void;
    name?: string
}

let speaker: Speakable = {
    //name:"bdt",
    speak() { }
}

interface Rectangle {
    width: number;
    height: number
}

let r: Rectangle = {
    width: 100, height: 10
}

//用来描述行为的抽象
interface AnimalLink {
    eat(): void;
    move(): void
}
//接口可以继承
interface PersonLike extends AnimalLink {
    speak(): void
}
class Person2 implements PersonLike {
    speak() { };
    eat() { };
    move() { }
}

//规定一个变量对应的接口类型 必须有id和name 其他属性任意
interface Person3 {
    readonly id: number;
    name: string;
    [PropName: string]: any
}
let p1: Person3 = {
    id: 1,
    name: "sss"
}

//如何用接口定义或者说规范函数
interface DiscountInterface{
    (price:number):number
}
let discount:DiscountInterface = function (price: number): number {
    return price * .8
}
interface sumInterface{
    (a:number,b:number,c:number):number
}
let sum2:sumInterface = function():number{
    let a = arguments;
    console.log(a)
    console.log(Array.prototype.slice.call(a))
   return Array.prototype.slice.call(a).reduce((val,item)=>val+item,0)
}
console.log(sum2(1,2,3))

//可索引接口 对数组或者对象进行约束

interface UserInterface{
    [index:number]:string
}

let arr:UserInterface = ['aa','bb']

interface UserInterface2{
    [index:string]:string
}
let obj:UserInterface2  = {name:"sss"}


//类的接口

//用接口来约束构造函数的类型
class Animal3{
    constructor(public name:string){}
}
interface WithClassName{
    new(name:string):Animal3
}
function createClass(clazz:WithClassName,name:string){
    return new clazz(name)
}
let a3 = createClass(Animal3,"别抖腿");
console.log(a3)