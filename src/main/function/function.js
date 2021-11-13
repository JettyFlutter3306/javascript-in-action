/**
 * 函数定义的几种方式
 * 所有函数都是 Function 的实例(对象)
 * 函数也是对象
 */

//1.自定义函数
function fn() {

}

//2.函数表达式(匿名函数)
let fun = function () {};

//3.利用 new Function(var1, var2, 函数体) {}  基本不用
let f = new Function('a', 'b', 'console.log(a + b)');
f(1, 2)

/**
 * 函数的调用
 */

//1. fn()  fn.call()

//2. 对象的方法
let o = {
    sayHi: function () {
        console.log('人生的巅峰')
    }
}

o.sayHi()

//3.构造函数
function Star() {

}

new Star();

//4.绑定事件的函数
//button.onclick = function() {} 点击了按钮就可以调用这个函数

//5.定时器函数  自动定时调用
setInterval(() => {

}, 1000)

//6. 立即执行函数
(function () {
    console.log("人生巅峰")
})()
