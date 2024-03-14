// Queue

// Implement the following methods on the Queue class.
//
// enqueue
// This function adds the value to the end of the queue.
// This should be an O(1) operation and return the new size of the queue.

// dequeue
// This function removes the value at the beginning of the queue.
// This should be an O(1) operation and return the value removed.


class QueueNode<T> {
    public data: T;
    public next: QueueNode<T>;
    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class Queue <T> {
    private first: QueueNode<T>;
    private last: QueueNode<T>;
    public size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new QueueNode(data);

        if (!this.first) this.first = newNode;
        else this.last.next = newNode;

        this.last = newNode;
        this.size++;

        return this.size;
    }

    dequeue() {
        if (!this.first) return null;

        const removedNode = this.first;
        this.first = removedNode.next;
        this.size--;

        if (!this.size) this.last = null;

        return removedNode.data;
    }
}


const queue = new Queue();

console.log(queue.enqueue(10)); // 1
console.log(queue.size); // 1
console.log(queue.enqueue(100)); // 2
console.log(queue.size); // 2
console.log(queue.enqueue(1000)); // 3
console.log(queue.size); // 3
console.log(queue.dequeue()); // 10
queue.dequeue();
console.log(queue.size); // 1
queue.dequeue();
console.log(queue.dequeue()); // null
console.log(queue.size); // 1
