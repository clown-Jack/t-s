//类型转换
export { }
interface Bird {
    name: string;
    fly(): void
}
interface Person {
    age: number;
    talk(): void
}
//交叉类型  把多个类型合并成一个大的总类型
type BirdMan = Bird & Person;
let bm: BirdMan = { name: "zf", fly() { }, age: 10, talk() { } }

//typeof 用来获取一个变量类型
//先定义类型再定义变量
// type Person2 = {
//     name:string;
//     age:number;
//     gender:number
// }
//先拿到一个对象 然后通过一个对象反推这个对象的类型
let p2 = { name: "zf", age: 0, gender: 0 }
type Person2 = typeof p2;
let p22: Person2 = { name: "zf", age: 0, gender: 0 }

//索引访问操作符
interface Person3 {
    name: string;
    age: number;
    job: {
        name: string
    }
    interests: { name: string, lever: number }[]
}

let FrontEndJob: Person3['job'] = { name: "FrontEnd" }

//索引类型查询操作符 keyof
interface Person4 {
    name: string;
    age: number;
    gender: number
}
// type Personkey = keyof Person4;
type Personkey = 'name' | 'age' | "gender"
function getValueByKey(p: Person4, key: Personkey) {
    return p[key]
}
let p4 = { name: 'zf', age: 10, gender: 0 }
getValueByKey(p4, name);
// getValueByKey(p4."xxx")

//映射类型
interface Person5 {
    name: string;
    age: number;
    gender: "male" | "female"
}
//批量定义
// type Person5Search={
//     [key in keyof Person5]?:Person5[key]
// }
let p5: Person5Search = { name: 'zf', age: 10 }

//内置的工具类型
type Partial<T> = { [P in keyof T]?: T[P] }
type Person5Search = Partial<Person5>

//required
interface Person6 {
    name?: string;
    age?: number;
    gender?: "male" | "female"
}
let p6: Person6Required = { name: 'zf', age: 10, gender: "male" }
type Required<T> = { [P in keyof T]-?: T[P] }
type Person6Required = Required<Person6>;


//ReadOnly
interface Person7 {
    name: string;
    age: number;
    gender: "male" | "female"
}
type ReadOnly<T> = { readonly [P in keyof T]: T[P] };
type Person7ReadOnly = ReadOnly<Person7>;
let p7: Person7ReadOnly = { name: 'zf', age: 10, gender: "male" }
// p7.name = "dsa"

//Pick 从一个大类型中检出来若干个小类型
interface Person8 {
    name: string;
    age: number;
    gender: "male" | "female"
}
type Pick<T, K extends keyof T> = { [P in K]: T[P] }
type PersonSub = Pick<Person8, 'name' | "age">;
let P8: PersonSub = { name: "zf", age: 0 }

//排除
type E = Exclude<string | number | boolean, string>;
let e: E = 10;
let e2: E = true

//Extract 提取
type E2 = Extract<string | number | boolean, string>;
let e3: E2 = "X";

interface Face1 {
    name: string
}
interface Face2 {

}
interface Face3 {

}
type E3 = Extract<Face1 | Face2 | Face3, Face1>;
let e33: E3 = {name:"X"}; 

//NonNullable  排除null和undefined
type E4 = NonNullable<null|undefined|string|number>
let e4:E4 = "321" 


//ReturnType
function getUserInfo(){
    return {name:"zf",age:10}
}
type UserInfo = ReturnType<typeof getUserInfo>;
let userinfo:UserInfo = {name:"zf",age:10}

// instanceof type

class Person10{
    name:string;
    constructor(name){
        this.name = name
    }
}
type P =InstanceType< typeof Person10>;
let p10:P = {name:"zg"};
let p11:P = new Person10("zf")