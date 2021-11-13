/**
 * call方法
 * call() 可以改变这个函数的 this 的指向
 */
function fn(x, y) {
    console.log("喝咖啡")
    console.log(this)
    console.log(x + y)
}

let o = {
    name: 'Andy'
}

//fn()  or  fn.call()  此时指向了 o 这个对象
fn.call(o, 1, 2)

/**
 * 借用父构造函数继承属性
 * 指向父构造函数的对象实例
 */
function Father(name, age) {
    this.name = name
    this.age = age
}

//子构造函数,this指向子构造函数的对象实例
function Son(name, age, score) {
    Father.call(this, name, age)  //改变了父构造函数的this指向,现在指向子构造函数对象实例
    this.score = score  //新添加的属性
}
