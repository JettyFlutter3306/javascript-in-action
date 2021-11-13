let arr = ['red','green','blue','pink']

/**
 * forEach() 和 some() 的区别
 * 在forEach()里面无法退出迭代
 * 在some()中可以退出迭代,可以使用 return 关键字退出,查找效率高
 * 46讲!
 */
arr.forEach((v) => {
    if(v === 'green'){
        return console.log("Eureka!")
    }

    console.log(11)
})

arr.some((v) => {
    if(v === 'pink'){
        return console.log("Eureka!")
    }
})




