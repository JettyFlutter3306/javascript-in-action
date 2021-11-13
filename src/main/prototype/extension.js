/**
 * 原型对象的应用,扩展内置对象方法
 * 注意: 数组和字符串内置对象不能给原型对象覆盖操作 Array.prototype = {}
 * 只能是 Array.prototype.xxx = function(){}的方式
 * 不然的话会把原生自带的函数覆盖掉
 */
Array.prototype.sum = function() {
    let ans = 0

    for (let i = 0; i < this.length; i++) {
        ans += this[i]
    }

    return ans
}

let arr1 = [1,2,3,45,5]
let arr2 = new Array(11,22,44)

console.log(arr1.sum())
console.log(arr2.sum())
console.log(Array.prototype)

