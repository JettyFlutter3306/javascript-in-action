/**
 * 结构表达式
 * 数组解构允许我们按照一一对应的关系从数组中提取值
 * 然后将值赋值给变量
 */

let array1 = [1, 2, 3]
let [a, b, c, d, e] = array1  //一一对应
console.log(a, b, c)
console.log(d, e)  //d e没有对应的值  默认就是为 undefined
console.log('-------------------------')

let person = {
    name: '洛必达',
    age: 20
}

//对象的解构表达式
let {name, age} = person
console.log(name, age)
console.log('--------------------------')

//对象解构表达式取别名
let {name: IName, age: IAge} = person
console.log(IName, IAge)






