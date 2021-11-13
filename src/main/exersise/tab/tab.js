export class Tab {
    constructor(id) {
        //获取元素
        this.main = document.querySelector(id)
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')

        document.querySelector('#addTab').onclick = this.addTab

        this.init()
    }

    init() {  //init初始化操作让相关的元素绑定事件
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab
        }
    }

    toggleTab() {  //1.切换功能'
        this.className = 'liactive'
    }

    addTab() {  //2.添加功能
        this.ul = document.querySelector('ul')

        console.log(this.lis)

        let html = "<li>\n" +
            "                        <span>测试" + (this.lis.length + 1) + "</span>\n" +
            "                        <a href=\"javascript: void(0)\">\n" +
            "                            <span class=\"iconfont icon-guanbi\"></span>\n" +
            "                        </a>\n" +
            "                    </li>"
        this.ul.append(html)
    }

    removeTab() {  //3.删除功能
        console.log('你好')
    }

    editTab() {   //4.编辑功能

    }
}
