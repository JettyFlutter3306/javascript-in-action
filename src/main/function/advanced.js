/**
 * 高阶函数
 * 高阶函数是对其他函数进行操作的函数,它接收函数作为参数或将函数作为返回值输出
 *
 */

function fn(a, b, callback) {
    console.log(a + b)

    callback && callback()
}

fn(1, 2, function () {
    console.log("我是最后调用的")
})
