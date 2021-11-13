import {Father} from "./father.js";

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

