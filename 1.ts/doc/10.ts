//接口的兼容性
export {}
interface Animal{
    name:string;
    age:number
}
interface Person{
    name:string;
    age:number;
    married:boolean
}

function getAnimalName(animal:Animal){
    return animal.name
 }
 let p2:Person={name:"ss",age:10,married:true};
getAnimalName(p2)

//基本类型的兼容性检查
let num : string|number;
let str:string="sss";
num= str

let num2:{
    toString():string
}
let str2:string="aaa";
num2 = str2


//函数兼容性  先比较参数再比较返回值  只能少不能多
type sumFunction= (a:number,b:number)=>number;
let sum:sumFunction;
function fun1(a:number,b:number){
    return a+b;
}
sum = fun1
function fun2(a:number){
    return a;
}
sum = fun2

//函数目标参数的协变
type loginFunc = (a:number|string)=>void;
let a1:loginFunc;
function a2(a:number){

}
//a1=a2   //少参数不能，多参数可以


//泛型兼容性
//接口内容为空就可以赋值 不为空就不可以赋值
interface Empty<T>{

}
let x:Empty<string>={};
let y:Empty<number>={};
x=y

  //实现原理
//   interface Empty{

//   }
//   interface Empty{
      
//   }

//枚举的兼容性   枚举和数字兼容
enum ColorStyle{
    RED,
    YELLOW,
    BLUE
}
let color1:ColorStyle;
let color2=ColorStyle.RED;
color1= color2;

let cc:number;
cc = ColorStyle.BLUE