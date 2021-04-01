class Node<T> {
    constructor(public data: T = null, public next: Node<T> = null){}
}

export default class LinkedList <T>{
    constructor(init?: T){
        this._root = new Node(init);
    }
    private _root: Node<T>;

    get root(): Node<T> {
        return this._root;
    }
    private traverse<T>(){}

    public insertInBegin(data: T) {}
    public insertInEnd(data: T) {}
    public deleteNode(node: T) {}
    public size() {}
    public search(data: T) {}
}

const ll = new LinkedList()
console.log(ll.root)
