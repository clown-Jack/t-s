//普通枚举
enum Gender{
     BOY,
     GIRL
}
let g1:Gender = Gender.BOY;
let g2:Gender = Gender.GIRL;
console.log(Gender);
console.log(g1) //0
console.log(g2) //1

//常数枚举  编译后被删除
const enum Color{
     RED,
     YELLOW,
     BLUE
}
// console.log(Color)
console.log(Color.BLUE,Color.RED,Color.YELLOW)
