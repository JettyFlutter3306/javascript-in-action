let obj = {
    id: 1,
    name: '小米',
    price: 2000
}

// 原始的方式
// obj.num = 1000
// obj.price = 1000

/**
 * 使用Object.defineProperty()方法新增或修改对象的属性
 */
Object.defineProperty(obj, 'num', {
    value: 1000,
    enumerable: true,  //如果值为false则不允许遍历,默认值是false
    configurable: false  //如果是false则不允许删除或修改,且不允许属性被二次修改!
})

Object.defineProperty(obj, 'price', {
    value: 1000
})

Object.defineProperty(obj, 'id', {
    writable: false  //不允许修改属性值
})

obj.num = 9000
delete obj.num  //释放内存,删除数据
console.log(obj)
