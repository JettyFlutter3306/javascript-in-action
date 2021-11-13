/**
 * 模板字符串
 * 用${}作为占位符插入进字符串中
 * 模板字符串内部可以调用函数
 * 扩展方法:
 *      startsWith() 和 endsWith()
 *      repeat(n) 将字符串重复n次,并返回
 */
let name = '张三'
let sayHello = `hello, my name is ${name}`
console.log(sayHello)
console.log('---------------------')

let result = {
    name: 'zhangsan',
    age: 20
}

let html = `
    <div>
      <span>${result.name}</span>
      <span>${result.age}</span>
    </div>
`

console.log(html)

console.log("Hello ES6".startsWith("Hello"))
console.log("Hello ES6".endsWith("Hello"))
console.log("xyz".repeat(5))
