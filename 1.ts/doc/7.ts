export {}
//1.抽象类是行为的抽象 一般来封装一些公共的属性和方法 不能被实例化
abstract class Animal{
    name:string="111";
    abstract speak():void;  //抽象类和方法不包含具体实现  必须在子类中实现
}
//接口里的方法都是抽象的
interface Flying{
    fly():void
}
interface Eating{
    eat():void
}
class Dog extends Animal{
    speak(){
        console.log("汪汪汪")   //重写:子类重写继承自父类中的方法
    }
}
class Cat extends Animal implements Flying,Eating{
    speak(){   //继承抽象类的方法必须实现
        console.log("喵喵喵")
    }
    fly(){
        console.log("我是一只飞猫")
    }
    eat(){
        console.log("我是一只吃猫")
    }
}