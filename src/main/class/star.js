/**
 * 声明明星类Star
 * 通过 class 关键字创建一个类,类名我们可以是习惯性地开头大写
 * 类里面有一个 constructor 函数,可以接收传递过来的参数,同时返回实例对象
 * constructor 函数只要 new 生成实例时,就会自动调用这个函数,如果我们不写这个函数,类也会自动生成这个函数
 * 构造函数不要用 function 修饰!!
 * 类里面的函数不要用 function 关键字修饰!
 * 在ES6中没有变量的提升,所以必须要先定义类,才能通过类实例化对象
 * 类里面的共有的属性和方法一定要加 this 关键字!
 */
class Star {

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sing(song) {
        console.log(song)
    }


}

let liuDeHua = new Star('刘德华', 19)
let zhangXueYou = new Star('张学友', 17)

console.log(liuDeHua)
console.log(zhangXueYou)

liuDeHua.sing('恭喜发财')
zhangXueYou.sing('李香兰')
