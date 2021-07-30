class Father {

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    getMoney() {

    }

    sum() {
        console.log(this.x + this.y)
    }

    say() {
        console.log("我是爸爸!")
    }
}

class Son extends Father {

    constructor(x, y) {
        super(x, y);
    }

    say() {
        console.log("我是儿子")
    }


}

let son = new Son(1, 2);
son.sum()
son.say()
