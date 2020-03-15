//通过命名空间扩展类
class From{
    username:From.Item="";
    password:From.Item="";
}
declare namespace From{
    export class Item{}
}

//通过命名空间扩展函数
declare function  jQuery2(selector:string):void
declare namespace jQuery2{
    let name:string
}

//通过命名空间扩展枚举
enum Color{
    red = 1,
    yellow = 2,
    blue = 3
}
namespace Color {
    export const green = 4;
    export const purple = 5;
}
console.log(Color.green)