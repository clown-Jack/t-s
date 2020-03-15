// namespace  命名空间
//是用来定义包含很多子属性的全局变量
export {}
declare namespace ${
    function ajax(url:string,setting:any):void
    let name:string
    namespace fn{
        function extend(object:any):void
    }
}
$.ajax("/user",{})
console.log($.name)
$.fn.extend({})