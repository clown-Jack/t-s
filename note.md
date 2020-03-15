## 安装TS
- npm i typeScript -g
- 安装之后会得到一个命令tsc 能把ts文件转化成js文件  tsc 1.js

- ts遇到export或者import会把这个ts当作一个块作用域

- tsc -init 显示ts配置文件

js本身没有模块化 出来commonjs之后 node先使用了模块化 ，但是es6又有了自己的模块化，所以要做兼容

##  元组和数组的区别

- 元组:每一项可以使不同的类型 有预定的长度  用于表示一个固定的结构
- 数组:每一项都是同一种类型 没有长度限制 用于表示一个列表

## 枚举

enum Gender{

​     BOY,

​     GIRL

}

let g1:Gender = Gender.BOY;

let g2:Gender = Gender.GIRL;

console.log(Gender);

console.log(g1) //0

console.log(g2) //1

## never和void的区别

![image-20200314111316283](/Users/songjie/Library/Application Support/typora-user-images/image-20200314111316283.png)

- void可以被赋值为null和undefined的类型 never则是一个不包含值得类型
- 拥有void返回值类型的函数能正常运行  拥有never返回值类型的函数无法正常返回，无法终止，或会抛出异常

## 重载和重写

- 重写是指子类重写继承自父类中的方法

- 重载时指为同一个函数提供多个类型定义

  

## 继承和多态

- 继承:子类继承父类 子类除了拥有父类的所有特性外，还有一些更具体的特性

- 多态:有继承而产生了相关的不同的类 对同一个方法可以有不同的行为

  

## 泛型

- 定义函数 接口或类的时候 不预先指定具体类型 而是在使用的时候再指定类型的一种特性
- 作用域只限于函数内部

## 安装声明文件
- npm i @types/xxx -S
- ![image-20200315210305436](/Users/songjie/Library/Application Support/typora-user-images/image-20200315210305436.png)

## 合并声明

![image-20200315213036344](/Users/songjie/Library/Application Support/typora-user-images/image-20200315213036344.png)