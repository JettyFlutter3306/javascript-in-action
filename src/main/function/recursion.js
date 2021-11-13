/**
 * 递归法根据id求出数据对象
 * 深度优先遍历
 */
let data = [
    {
        id: 1,
        name: '家电',
        children: [
            {
                id: 11,
                name: '冰箱',
                children: [
                    {
                        id: 111,
                        name: '美的'
                    },
                    {
                        id: 112,
                        name: '海尔'
                    },
                    {
                        id: 113,
                        name: '格力'
                    }
                ]
            },
            {
                id: 12,
                name: '洗衣机'
            }
        ]
    },
    {
        id: 2,
        name: '服饰'
    }
]

function dfs(data, id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return data[i]
        } else if (data[i].children) {  //孩子结点存在
            return dfs(data[i].children, id)
        }
    }
}

let goods = dfs(data, 112)

console.log(goods)


