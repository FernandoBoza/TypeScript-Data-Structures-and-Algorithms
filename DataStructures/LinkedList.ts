
class Node<T> {
    constructor(public data: T, public next?: Node<T> | null) { }
}

export default class SinglyLinkedList<T>{
    constructor(init?: T, public tail?, public size?, private _root?: Node<T>) {
        this.size = 0
        if (init) this.push(init)
    }

    get root(): Node<T> {
        return this._root;
    }

    public isEmpty = () => this.size == 0;

    public print() {
        let arr = [],
            current = this._root;

        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }

    public push = val => {
        let newNode = new Node(val);
        if (this.isEmpty()) {
            this._root = newNode;
            this.tail = this._root;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
        return this;
    }

    public pop = () => {
        this.size--;
        if (this.size < 1) {
            this._root = null;
            this.tail = null;
            this.size = 0;
            return this;
        }
        if (!this._root) return undefined;
        let currTail = this._root,
            newTail = currTail;

        while (currTail.next) {
            newTail = currTail;
            currTail = currTail.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        return currTail;
    }

    public shift = () => {
        // remove a node from beg of a linked list
        if (!this._root) return undefined;
        this._root = this._root.next;
        this.size--;
        if (this.size < 1) {
            this.size = 0;
            this._root = null;
            this.tail = null;
        }
        return this;
    }

    public unshift = val => {
        // adds a node to the beginning
        if (val == undefined) return undefined;
        let newHead = new Node(val);
        if (!this._root) {
            this._root = newHead;
            this.tail = this._root;
        } else {
            newHead.next = this._root;
            this._root = newHead;
        }
        this.size++;
        return this;
    }

    public get = index => {
        if (index < 0 || index >= this.size) return null;

        let currentIndex = 0,
            currentHead = this._root;

        while (currentIndex != index) {
            currentHead = currentHead.next;
            currentIndex++;
        }
        return currentHead;
    }

    public set = (index, val) => {
        let node = this.get(index);
        if (node) {
            node.data = val;
            return this;
        }
        return false
    }

    public insert = (index, val) => {
        if (index < 0 || index > this.size) return false;
        if (index == this.size) return this.push(val);
        if (index == 0) return this.unshift(val);

        let prevNode = this.get(index - 1),
            currentNode = this.get(index),
            node = new Node(val);

        prevNode.next = node;
        node.next = currentNode;
        this.size++;
        return this;
    }

    public remove = index => {
        if (index < 0 || index > this.size) return false;
        if (index === this.size - 1) return this.pop();
        if (index === 0) return this.shift();

        let prevNode = this.get(index - 1);
        prevNode.next = prevNode.next.next;
        this.size--;
        return this;
    }

    public reverse = () => {
        let node = this._root,
            next = null,
            prev = null;

        this._root = this.tail;
        this.tail = node;

        for (let i = 0; i < this.size; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}
