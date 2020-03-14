//泛型 宽泛的类型  不具体类型
function createArray<T>(length:number,value:T):T[]{
    let arr:T[] = [];
    for(let i=0;i<length;i++){
        arr[i] = value
    }
    return arr
}
let arr = createArray<string>(3,'x');
console.log(arr)  //['x','x','x']

//泛型类  用到泛型的类
class MyArr<T>{
    private list:T[] = [];
    add(element:T){
        this.list.push(element)
    }
    getMax():T{
       let maxVal = this.list[0];
       for(let i = 1;i <this.list.length;i++){
           if(this.list[i]>maxVal){
               maxVal = this.list[i];
           }
       }
       return maxVal
    }
}
let arr2 = new MyArr<number>();
arr2.add(1);
arr2.add(3);
arr2.add(2);
console.log(arr2.getMax())

//泛型接口 可以用来约束函数

interface Calculate{
    <T>(a:T,b:T):T
}

let add:Calculate = function(a,b){
   return a
}

//多个泛型 不借助中间变量的方法交换两个变量的值 

function swap<A,B>(tuple:[A,B]):[B,A]{
     return [tuple[1],tuple[0]]
}
let ret = swap([0,"a"]);
ret[0].toLowerCase();
ret[1].toFixed(2)

//默认泛型

function createArray1<T=number>(length:number,value:T):T[]{
    let arr:T[] = [];
    for(let i=0;i<length;i++){
        arr[i] = value
    }
    return arr
}
let arr1 = createArray1(3,9);
console.log(arr1)  //['x','x','x']

//泛型约束
// function logger<T>(val:T){
//     console.log(val.length)
// }
interface Lengthwise{
    length:number
}
function logger2<T extends Lengthwise>(val:T){
    console.log(val.length)
}
// logger2("hello")
// logger2(true)

//泛型接口  在定义接口的时候也可以使用泛型
interface Cart<T>{
    list:T[]
}
let cart:Cart<number>={list:[1,2,3]}

//泛型的别名 type可以定义别名或者小名
type Cart2<T> = {list:T[]}|T[];
let c1:Cart2<number>= {list:[1,2,33]}
let c2:Cart2<string> = ["1"]   //继承和实现不能用别名，应该用接口