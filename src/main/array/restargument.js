/**
 * 剩余参数 (类比Java里的可变参数)
 *
 */

const sum = (...args) => {
    return args.reduce((prev, cur, index, array) => prev + cur, 0)
}

console.log(sum(1, 2, 3, 4))
console.log('--------------------')

//剩余参数和结构表达式结合起来
let students = ['洛必达', '牛顿', '莱布尼茨']
let [s1, ...s2] = students
console.log(s1, s2)
console.log('--------------------')

//扩展运算符可以将数组或者对象转化为用逗号分隔的参数序列,输出没有逗号
let array = [1, 2, 3, 4, 5]
console.log(...array)
console.log('------------------------')

//扩展运算符用于合并数组
let array1 = [1, 2, 3, 4]
let array2 = [5, 6, 7]
let array3 = [...array1, ...array2]
array3.push(array1)  //或者用push()方法
console.log(array3)
console.log('-------------------------')

//Array.from()方法  Array的实例方法
let arrayLike = {
    "0": "1",
    "1": "2",
    "2": "3",
    "length": 3
}

//类似于map()
let array4 = Array.from(arrayLike, item => item * 2)
console.log(array4)

