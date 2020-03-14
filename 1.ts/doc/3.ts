// let root:(HTMLElement|null) = document.getElementById("root");
// root!.style.color = "red"  //!告诉ts root有值 不要警告我了

//any 任何类型
let zss:any = "321";
zss=321;
zss=true;

let x:number;
x = 10;
 //undefined null是number类型的子类型
x= undefined;
x= null;

//void没有任何类型
//当一个函数没有返回值的时候 ts认为它的返回类型为void
function greeting(name:string):void{
   return ;
}