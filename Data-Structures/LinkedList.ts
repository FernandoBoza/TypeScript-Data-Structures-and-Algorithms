class Node<T> {
    constructor(public data: T = null, public next: Node<T> = null){}
}

export default class SinglyLinkedList <T>{
    constructor(init?: T){
        if(init){
           this._root = new Node(init)
        }
    }
    private _root: Node<T>;

    public size = 0;

    get root(): Node<T> {
        return this._root;
    }
    private traverse<T>(){}

    public insertInBegin(data: T) {
        this.size++;
    }
    public insertInEnd(data: T) {
        const newNode = new Node<T>(data);
        if(!!this._root) {
            this._root = newNode;
        }

        // if there are already nodes present
        let current =  this._root;
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.size++;
        return this._root
    }
    public deleteNode(node: T) {
        this.size--;
    }
    public search(data: T) {}
}

const ll = new SinglyLinkedList();
ll.insertInEnd(10)
// ll.insertInEnd(20)
ll
