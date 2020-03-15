//类型声明
export {}
//我们可以给JS写类型声明文件
declare const $:(selector:string)=>{
    click():void;
    width(length:number):void
}
$("#root").click();
$("#root").width(100);

declare let name:string;
declare let age:number;
declare function getName():string;
declare class Animal{name:string};
interface Person{
    name:string
}
type Student = {
    name:string
}

//外部枚举 声明在外部 是一个枚举
//外部枚举是使用declare enum 定义的枚举
// declare enum Season{
//      Spring,
//      Summer,
//      Autumn,
//      Winter
// }
// let season=[
//     Season.Spring,
//     Season.Summer,
//     Season.Autumn,
//     Season.Winter
// ]

//常量枚举
declare const enum Season{
    Spring,
    Summer,
    Autumn,
    Winter
}
let season=[
   Season.Spring,
   Season.Summer,
   Season.Autumn,
   Season.Winter
]

