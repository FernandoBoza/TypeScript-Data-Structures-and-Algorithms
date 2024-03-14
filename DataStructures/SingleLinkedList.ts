class ListNode <T> {
    public data: T;
    public next: ListNode<T>;
    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList <T> {
    private head: ListNode<T>;
    private tail: ListNode<T>
    private length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty = () => {
        return this.length >= 1
    }

    print() {
        let arr = [],
            current = this.head;

        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        console.log(arr);
    }

    push = (val: T) => {
        let newNode = new ListNode(val);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    pop = () => {
        this.length--;
        if (this.length < 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return this;
        }
        if (!this.head) return undefined;
        let currTail = this.head,
            newTail = currTail;

        while (currTail.next) {
            newTail = currTail;
            currTail = currTail.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        return currTail;
    }

    shift = () => {
        // remove a node from beg of a linked list
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length < 1) {
            this.length = 0;
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    unshift = val => {
        if (val === undefined) return undefined;
        let newHead = new ListNode(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    get = index => {
        if (index < 0 || index >= this.length) return null;

        let currentIndex = 0,
            currentHead = this.head;

        while (currentIndex != index) {
            currentHead = currentHead.next;
            currentIndex++;
        }
        return currentHead;
    }

    set = (index, val) => {
        let node = this.get(index);
        if (node) {
            node.data = val;
            return this;
        }
        return false
    }

    insert = (index, val) => {
        if (index < 0 || index > this.length) return false;
        if (index == this.length) return this.push(val);
        if (index == 0) return this.unshift(val);

        let prevNode = this.get(index - 1),
            currentNode = this.get(index),
            node = new ListNode(val);

        prevNode.next = node;
        node.next = currentNode;
        this.length++;
        return this;
    }

    remove = index => {
        if (index < 0 || index > this.length) return false;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let prevNode = this.get(index - 1),
            currentNode = prevNode.next;

        prevNode.next = currentNode.next;
        this.length--;
        return this;
    }

    reverse = () => {
        let node = this.head,
            next = null,
            prev = null;

        this.head = this.tail;
        this.tail = node;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}

let list = new SinglyLinkedList();
list.push('Zero');
list.push('Une');
list.push('Deux');
list.push('Trois');
list.push('Quarte');
list.push('Cinq');
list.push('Seix');
list.reverse();





