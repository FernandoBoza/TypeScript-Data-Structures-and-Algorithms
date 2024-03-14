class StackNode {
    private value: any;
    public next: StackNode;
    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    private first: StackNode;
    private last: StackNode;
    private size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push = <T>(val: T): number => {
        let newNode = new StackNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let currentFirst = this.first;
            this.first = newNode;
            this.first.next = currentFirst;
        }

        return ++this.size;
    }

    pop = () => {
        if (!this.first) return null;
        const currentFirst = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return currentFirst;
    }
}

let list = new Stack();
list.push(1);
list.push(2);
list.push(3);
list.pop()
// list.pop()
// list.pop()
console.log(list);