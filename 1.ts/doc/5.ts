//类型推论
export { }
//在JS时有一个自动装箱的过程 如果你对一个基本类型调用方法的话
//它的内部会迅速做一次包装 把这个基本类型包装成对象类型 然后就可以调用方法
let x = "hello";
console.log(x.toLowerCase());

console.log(new String(x).toLowerCase);  //这是内部实现的，我们不用管

//断言  我强行告诉ts是一个什么类型
let zname: number | string | null;
console.log((zname as string).length)
console.log((zname as number).toFixed(2));


//定义函数有二种方法 1种是函数定义
function hello(name: string): string {
    return "hello" + name
}

//2种是函数表达式
//定义一个类型 用来约束一个函数表达式  参数有两个firstname lastname 返回一个字符串
type GetFunction = (firstname: string, lastname: string) => string;
let getUsername: GetFunction = function (firstname: string, lastname: string): string {
    return firstname + lastname
}

//可选参数
function print(name: string, age?: number): void {
    console.log(name, age)
}
print("ss", 10)
print("www")

//默认参数
function ajax(url: string, method: string = 'GET') {
    console.log(url, method)
}
ajax("/users")

//剩余参数
function sum(...numbers: Array<number>) {
    console.log(numbers)
}
sum(1, 2, 3)

//函数的重载
//在java里  重载指的是两个函数 方法名是一样的 但是参数的数量或者类型不一样

function sum1(a,b){

}
function sum1(a,b,c){

}

//在TS里，仅仅指是为一个函数提供多个函数定义
let obj = {name:"zzz",age:10}
function attr(val:string):void
function attr(val:number):void;
function attr(val:any):void{
    if(typeof val=="string"){
        obj.name = val
    }else if(typeof val == 'number'){
        obj.age = val
    }
}
attr("sss");
attr(20);
attr(true)
console.log(obj)



