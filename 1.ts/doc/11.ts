//类型保护
export { }
//更明确的判断某个分支作用域中的类型

//基本数据类型的类型保护
function double(input: string | number | boolean): number {
    if (typeof input == "string") {
        return input.length
    } else if (typeof input == "number") {
        return input
    } else {
        return 0
    }
}

//类类型保护
class Animal {
    public name: string = "zf"
}

class Cat extends Animal {
    public age: number = 10
}
function getName(animal: Animal) {
    if (animal instanceof Cat) {
        console.log(animal.age)
    } else {
        console.log(animal.name)
    }
}
getName(new Animal())

//null保护 如果开启了strictNullChecks选项的话 那么我们就不能直接调用可能为null的变量上的方法了
//1.加！
//2.加一个或判断
function getFirstLetter(str: string | null) {
    str = str || ""
    return str.charAt(0)
}

//可辨识的联合类型
interface WarningBtn {
    class: "Warning",
    text1: "警告"
}
interface DangerBtn {
    class: "Danger",
    text2: "删除"
}
type Button = WarningBtn | DangerBtn;
function getButton(button: Button) {
    if (button.class == "Warning") {
        console.log(button.text1)
    } else {
        console.log(button.text2)
    }
}

//in操作符
interface Bird {
    swing: number;
    fly(): void
}

interface Dog {
    leg: number;
    run(): void
}

function getNumber(animal: Bird | Dog) {
    if ("swing" in animal) {
        animal.fly()
    } else {
        animal.run()
    }
}

//有些时候两个类型 没有共同属性 不同的取值 也没有可区分的特征，类型也一样

//自定义的类型保护
interface Bird2 {
    swing: number
}
interface Dog2 {
    leg: number
}
function isBird(x:Bird2|Dog2):x is Bird2{
    return (x as Bird2).swing == 2
}
function getAnimal(x:Bird2|Dog2){
   if(isBird(x)){
      console.log("我是一只鸟")
   }else{
       console.log("我是一条狗")
   }
}

//类型保护是为了让你更具体的调用参数上属性和方法