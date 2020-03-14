// undefined 是个值

//never 表示永远不知道是什么类
//如果一个函数永远不知道返回 那么它的返回值类型就是never
function sum():never{
  while(true){

  }
}

//如果一个函数一定要抛出错误 那么它也永远不会正常返回 它的返回类型也是一个never
function minus():never{
    throw Error("我错了")
}

function double(x:number|string){
    if(typeof x=="number"){
        console.log(x)
    }else if(typeof x == 'string'){
        console.log(x)
    }else{
        console.log(x)
    }
}