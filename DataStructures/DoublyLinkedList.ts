class ListNode <T> {
    public data: T;
    public prev: ListNode<T>;
    public next: ListNode<T>;
    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export class DoublyLinkedList<T> {
    private head: ListNode<T>;
    private tail: ListNode<T>;
    private length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push = (data: T) => {
        let newNode = new ListNode(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return list;
    }

    pop = () => {
        if (!this.head) return undefined;

        let poppedNode = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift = () => {
        if (this.length === 0) return undefined;

        let currentHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = currentHead.next;
            this.head.prev = null;
            currentHead.next = null;
        }

        this.length--;
        return currentHead;
    }

    unshift = (data: T) => {
        let newNode = new ListNode(data);

        if (this.length === 0) {
            return this.push(newNode.data);
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    get = (index: number) => {
        if (index > this.length - 1 || index < 0) return undefined;

        let current;
        if (index < Math.floor(this.length - 1 / 2)) {
            current = this.getHelper(index, 0, this.head, 'next',);
        } else {
            current = this.getHelper(index, this.length - 1, this.tail, 'prev',);
        }
        return current;
    }

    getHelper = (index: any, count: number, current: ListNode<T>, child: string) => {
        if (child == 'next') {
            while (count != index) {
                current = current[child];
                count++;
            }
        } else {
            while (count != index) {
                current = current[child];
                count--;
            }
        }
        return current;
    }
}

const list = new DoublyLinkedList();
list.push(100);