/**
 * 创建Set数据结构
 * 内部成员唯一不可重复
 */

const set1 = new Set()
console.log(set1.size)

const set2 = new Set(['a', 'b'])
console.log(set2.size)

const set3 = new Set(['a', 'b', 'c', 'd', 'a', 'a'])
console.log(set3.size)

//使用扩展运算符
const array1 = [...set3]
console.log(array1)

//add()方法添加值
set1.add(1).add(3).add(899)
console.log(set1)

//delete()方法删除值
console.log(set2.delete('a'));

//has()表示是否含有
console.log(set2.has(8))

//clear()清除值
set3.clear()
console.log(set3)

//遍历Set
set2.forEach(v => console.log(v))
