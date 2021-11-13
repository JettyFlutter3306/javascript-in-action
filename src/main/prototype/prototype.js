/**
 * 使用构造函数创建对象
 * 实例成员就是构造函数内部通过 this 关键字添加的成员
 * 实例成员只能通过实例化的对象来访问
 *
 * 构造函数会有浪费内存空间的问题!!
 *
 * 每一个构造函数都有一个 prototype 属性,指向另一个对象
 * 一般情况下,我们公共属性定义到构造函数里面,公共的函数我们放到原型对象 prototype 上!
 * 对象身上系统自己自动添加一个 __proto__ 指向我们构造函数的原型对象 prototype
 */
function Star(name, age) {
    this.name = name
    this.age = age
}

/**
 * 原型链,有 Vue 内味儿了~~
 * 如果我们修改了原来的原型对象,给原型对象赋值的是一个对象
 * 很多情况下,我们需要手动利用 constructor 这个属性指回原来的构造函数
 */
Star.prototype = {
    constructor: Star,
    sing() {
        console.log("我会唱歌")
    },
    movie() {
        console.log("我会拍电影~")
    }
}

let luoBiDa = new Star("洛必达", 19)

console.log(luoBiDa)

luoBiDa.sing()

/**
 * 静态成员 在构造函数本身上添加成员
 * sex 就是静态成员
 * 静态成员只能通过构造函数访问
 */
Star.sex = "男"
console.log(Star.sex)

/**
 * 方法查找的规则: 首先看该对象身上是否有调用的方法,如果有就执行对象上的方法
 * 如果没有,因为有 __proto__ 的存在,那就会去构造函数原型对象 prototype 身上去查找将被调用的方法
 * 但是 __proto__ 不是一个标准属性
 *
 */
console.log(luoBiDa.__proto__ === Star.prototype)  //true



