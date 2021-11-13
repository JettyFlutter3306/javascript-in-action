/**
 * forEach迭代
 */
let arr1 = [1,2,3,4]
arr1.forEach((value, index, array) => {
    console.log("每一个数组元素" + value)
    console.log("每个数组元素的索引号" + index)
    console.log("数组本身" + array)
})

/**
 * filter函数是把所有满足条件的元素返回
 */
let arr2 = [12,323,55,11,1,6]
let newArr = arr2.filter((value, index) => {
    return value >= 20
})

console.log(newArr)

/**
 * some函数表示是否存在满足条件的元素
 * 查找第一个满足条件的元素就返回
 */
let arr3 = [10,20,30]
let flag = arr3.some((value, index, array) => {
    return value >= 20
})

console.log(flag)

