/**
 * 箭头函数 (Lambda表达式)
 * () => {}
 *
 * 1.箭头函数只有一句代码时可以省略大括号 并且还可以将这一句代码作为返回值
 * 2.形参若只有一个,那么可以省略小括号
 */

const fn = () => {
    console.log(12312)
}

fn()

const sum = (num1, num2) => num1 + num2

console.log(sum(8, 10))
console.log('-------------------------')

/**
 * 箭头函数和 this 关键字
 * 箭头函数在哪里定义的,那么this关键字就指向哪里
 */
function f1() {
    console.log(this)

    return () => {
        console.log(this)
    }
}

const obj = {name: '张三'}

const f2 = f1.call(obj)

f2()




