/**
 * JavaScript的浅拷贝和深拷贝
 * 浅拷贝只是拷贝一层,更深层次对象级别只拷贝引用
 * 深拷贝拷贝多层,每一级别的数据都会被拷贝
 */

let obj = {
    id: 1,
    name: 'andy',
    msg: {
        age: 18,
        gender: 'man'
    }
}

let o = {}

//浅拷贝操作
// for (let key in obj) {
//     o[key] = obj[key]
// }

//ES6 语法API 浅拷贝
// Object.assign(o, obj)
// console.log(o)

//封装深拷贝函数
function deepClone(newObj, oldObj) {
    for (let k in oldObj) {
        //判断属性值是何种数据类型
        let item = oldObj[k]

        if (typeof item === Array) {  //数组类型
            newObj[k] = []

            deepClone(newObj[k], item)
        } else if (typeof item === Object) {  //Object类型
            newObj[k] = {}

            deepClone(newObj[k], item)
        } else {  //简单数据类型
            newObj[k] = item
        }
    }
}

deepClone(o, obj)
console.log(o)





