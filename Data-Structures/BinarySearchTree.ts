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

    public add = (data, comp?) => {
        const newNode = new Node(data);
        if(!!!this._root) {
            this._root = newNode;
            this.size += 1
            this.isEmpty = false
            return;
        } else {
            this.size += 1
            this.isEmpty = false
            let currentNode = this._root;
            let traversing = true;
            while (traversing) {
                if (currentNode.data[comp] == newNode.data[comp]) {
                    currentNode.duplicates += 1;
                    traversing = false;
                    return this;
                } else if (newNode.data[comp] < currentNode.data[comp]) {
                    if (currentNode.left == null) {
                        currentNode.left = newNode;
                        traversing = false;
                        return true;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (newNode.data[comp] > currentNode.data[comp]) {
                    if (currentNode.right == null) {
                        currentNode.right = newNode;
                        traversing = false;
                        return true;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

    public delete = (data) => {
        this.size -= 1
        this.isEmpty = this.size == 0;
    }
}


interface User {
    f : string,
    l : string
}

let user1: User = {f: "fer", l: "boz"},
    user2: User = {f: "zerr", l: "boza"},
    user3: User = {f: "alpha", l: "omega"}

const bst = new BinarySearchTree<User>(user1)
bst.add(user1, 'f')
bst.add(user2,'f')

bst
