/**
 * 正则表达式
 */

//1.利用RegExp类创建正则表达式
let reg1 = new RegExp(/123/)

// console.log(reg1)

//2.利用正则表达式字面量创建
let reg2 = /123/

console.log(reg2.test(123))
console.log('------------------------------')

//3.使用边界符号 ^ $  以...开头  以...结尾  精确匹配
let reg3 = /^abc$/

console.log(reg3.test('abc'))  //true
console.log(reg3.test('aaaabcccc'))  //false
console.log(reg3.test('abcdsdfsdf'))  //false
console.log('--------------------------------')

//字符类: [] 表示有一系列字符可以选择,只要匹配其中一个就可以了
let reg4 = /[abc]/  //只要包含有 a 或者 包含有 b 或者包含有 c 都返回 true
console.log(reg4.test('andy'))  //true
console.log(reg4.test('baby'))  //true
console.log(reg4.test('color'))  //true
console.log(reg4.test('red'))  //false
console.log('-------------------------------')

let reg5 = /^[a-z]$/  //26个英文字母任何一个字母返回true
console.log(reg5.test('a'))  //true
console.log(reg5.test('z'))  //true
console.log(reg5.test(1))  //false
console.log(reg5.test('A'))  //false
console.log("---------------------------")

//字符组合
let reg6 = /^[a-zA-Z0-9_-]{3,16}$/  //常用用户名校验正则表达式

//座机号码验证 | 或者符号
let reg7 = /^\d{3}-\d{8}| \d{4}-\d{7}$/




