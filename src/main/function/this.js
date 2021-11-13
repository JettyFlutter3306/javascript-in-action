/**
 * this的指向问题
 * 在浏览器的环境
 */


//1.普通函数 this 的指向 window
function fn() {
    console.log("普通函数的this: " + this)
}

fn()

//2. 对象的方法 this指向的是对象 o
let o = {
    sayHi: function () {
        console.log('人生的巅峰')
    }
}

o.sayHi()

//3.构造函数  this 指向实例对象
function Star() {

}

let luo = new Star();

//4.绑定事件的函数  this 指向函数的调用者
//button.onclick = function() {} 点击了按钮就可以调用这个函数

//5.定时器函数  自动定时调用  this 指向 window
setInterval(() => {

}, 1000)

//6. 立即执行函数  this 还是指向 window
(function () {
    console.log("人生巅峰")
})()
