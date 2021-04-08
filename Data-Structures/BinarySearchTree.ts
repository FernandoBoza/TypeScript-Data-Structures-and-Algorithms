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
        if(this.isEmpty) {
            this.isEmpty = false;
            this._root = newNode;
            return this;
        }
        let currentNode = this._root;
        while (currentNode) {
            if (currentNode.data[comp] == newNode.data[comp]) {
                currentNode.duplicates += 1;
                return this;
            } else if (newNode.data[comp] < currentNode.data[comp]) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return true;
                } else {
                    currentNode = currentNode.left;
                }
            } else if (newNode.data[comp] > currentNode.data[comp]) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return true;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    public find = (data, comp) => {
        if(!this._root) return false;
        let currentNode = this._root,
            found = false;

        while(currentNode && !found){
            if(data < currentNode.data[comp]) {
                currentNode = currentNode.left
            } else if (data > currentNode.data[comp]){
                currentNode = currentNode.right;
            } else {
                found = true
            }
        }
        return found;
    }

    public delete(data, comp): void {
        this._root = this.deleteRecursively(this._root, data, comp);
    }

    private deleteRecursively(_root: Node<T>, data, comp): Node<T> {
        if (!_root) return null;

        if (_root.data[comp] === data) {
            _root = this.deleteNode(_root, comp);
        } else if (data < _root.data[comp]) {
            _root.left = this.deleteRecursively(_root.left, data, comp);
        } else {
            _root.right = this.deleteRecursively(_root.right, data, comp);
        }
        return _root;
    }

    private deleteNode(_root: Node<T>, comp): Node<T> {
        if (_root.left === null && _root.right === null) {
            return null;
        } else if (_root.left !== null && _root.right !== null) {
            const successorNode = this.getSuccessor(_root.left);
            const successorValue = successorNode.data;

            _root = this.deleteRecursively(_root, successorValue, comp);
            _root.data = successorValue;

            return _root;
        } else if (_root.left !== null) {
            return _root.left;
        }

        return _root.right;
    }

    private getSuccessor(node: Node<T>): Node<T> {
        let currentNode: Node<T> = node;
        while (currentNode) {
            if (!currentNode.right) break;
            currentNode = currentNode.right;
        }
        return currentNode;
    }
}


interface User {
    f : string,
    l : string
}
const bst = new BinarySearchTree<User>()
bst.add({f: "ber", l: "boz"},'f')
bst.add({f: "dillon", l: "omega"},'f')
bst.add({f: "aerr", l: "boza"},'f')
bst.add({f: "clpha", l: "omega"},'f')
bst.delete("aerr", "f")
console.log(bst.find("clpha","f"))
