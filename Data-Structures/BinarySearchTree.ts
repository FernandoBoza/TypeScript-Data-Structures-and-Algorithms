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

    public delete(data): void {
        this._root = this.deleteRecursively(this._root, data);
    }

    private deleteRecursively(_root: Node<T>, data): Node<T> {
        if (!_root) return null;

        if (_root.data === data) {
            _root = this.deleteNode(_root);
        } else if (data < _root.data) {
            _root.left = this.deleteRecursively(_root.left, data);
        } else {
            _root.right = this.deleteRecursively(_root.right, data);
        }

        return _root;
    }

    private deleteNode(_root: Node<T>): Node<T> {
        if (_root.left === null && _root.right === null) {
            return null;
        } else if (_root.left !== null && _root.right !== null) {
            const successorNode = this.getSuccessor(_root.left);
            const successorValue = successorNode.data;

            _root = this.deleteRecursively(_root, successorValue);
            _root.data = successorValue;

            return _root;
        } else if (_root.left !== null) {
            return _root.left;
        }

        return _root.right;
    }

    private getSuccessor(node: TreeNode): TreeNode {
        let currentNode: TreeNode = node;

        while (currentNode) {
            if (currentNode.right === null) {
                break;
            }

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
bst
