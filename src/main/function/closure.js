/**
 * 闭包(closure)
 * 闭包是指有权访问另一个函数作用域中变量的函数
 *
 */

function fn() {
    let num = 10

    function f() {
        console.log(num)
    }

    return f
}

// let f = fn()
// f()

//闭包应用 计算打车的价格
//打车起步价13 (3公里内) 之后每多一公里增加 5 块钱,用户输入公里数可以计算打车价格
//如果有拥堵情况总价格多收取 10 块钱的拥堵费
let carTransaction = (function computePrice() {
    let start = 13  //起步价
    let total = 0  //总价

    return {
        price: function (distance) {  //正常的总价
            if (distance <= 3) {
                total = start
            } else {
                total = start + (distance - 3) * 5
            }

            return total
        },
        jam: function (flag) {  //拥堵的费用
            return flag ? total + 10 : total
        }
    }

})()

console.log(carTransaction.price(10));
console.log(carTransaction.jam(true));

