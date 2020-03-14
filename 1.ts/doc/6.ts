//类
class Person{
    // name:string="默认值";
    name:string;
    constructor(name:string){
       this.name = name
    }
    getName():void{
        console.log(this.name)
    }
}

//getter setter
class User{
    myname:string;
    constructor(myname:string){
        this.myname = myname
    }
    get name(){
        return this.myname
    }
    set name(newName:string){
        this.myname = newName
    }
}
let u = new User("a");
console.log(u.myname)
u.myname = 'b'
console.log(u.myname)
console.log(u.hasOwnProperty("name"))
console.log(Object.getPrototypeOf(u))
console.log(Object.getPrototypeOf(u).hasOwnProperty("name"))


//abstract抽象类  不能被实例化new 只能被继承
//抽象类一般是用来封装一些公共的，给子类使用的方法 属性的
abstract class Animal{
    public readonly name:string;
    protected age:number = 38;
    private money:number = 10;
    constructor(name:string){
        this.name = name
    }
}
class Dog extends Animal{
    static className = 'Dog'
    static getClassName(){
        console.log(this.className)
    }
    getName(){
        console.log(this.name)
    }
    getAge(){
        console.log(this.age)
    }
}
let a = new Animal("ss");
// a.name = "x"
// a.age

//通过类型的继承来讲一下访问修饰符  public  protected  private
//public 里里外外都能访问 自己  自己的子类  其他类都能
//protected 自己和子类能访问 其他地方不能访问
//private 私有的 只有自己能访问 子类的其他都不能访问