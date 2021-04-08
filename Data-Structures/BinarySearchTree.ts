class Node<T> {
    constructor(
        public data: Node<T> = null,
        public left: Node<T> = null,
        public right: Node<T> = null){
    }
    duplicates = 0;
}

export default class BinarySearchTree<T> {
    constructor(initializer?: any) {
        if (initializer) this.add(initializer);
    }

    private _root: Node<T> = null;
    public size = 0;
    public isEmpty = true;

    get root(): Node<T> {
        return this._root;
    }

    // O (log n)
    public add = (data, comp?) => {
        if(!data) throw new Error("argument is null")
        const newNode = new Node(data);
        this.size += 1
        this.isEmpty = false
        if(!this._root) {
            this._root = newNode;
            return this;
        }
        let currentNode = this._root;
        while (true) {
            if (currentNode.data[comp] == newNode.data[comp]) {
                currentNode.duplicates += 1;
                return this;
            } else if (newNode.data[comp] < currentNode.data[comp]) {
                if (currentNode.left == null) {
                    currentNode.left = newNode;
                    return true;
                } else {
                    currentNode = currentNode.left;
                }
            } else if (newNode.data[comp] > currentNode.data[comp]) {
                if (currentNode.right == null) {
                    currentNode.right = newNode;
                    return true;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }
}


interface User {
    f : string,
    l : string
}

let user1: User = {f: "ber", l: "boz"},
    user2: User = {f: "aerr", l: "boza"},
    user3: User = {f: "clpha", l: "omega"}

const bst = new BinarySearchTree<User>(user1)
bst.add(user2, 'f')
bst.add(user3,'f')

bst.root
