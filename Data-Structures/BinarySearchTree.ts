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
        if(this.isEmpty) return false;
        let currentNode = this._root,
            found = false;

        while(!found){
            if(data < currentNode?.data[comp]) {
                currentNode = currentNode.left
            } else if (data > currentNode?.data[comp]){
                currentNode = currentNode.right;
            } else if(data == currentNode?.data[comp]) {
                found = true
            }
        }
        return found;
    }

}
interface User { f : string, l : string }
const bst = new BinarySearchTree<User>()
bst.add({f: "ber", l: "boz"},'f')
bst.add({f: "dillon", l: "omega"},'f')
bst.add({f: "aerr", l: "boza"},'f')
bst.add({f: "clpha", l: "omega"},'f')
bst.find("aerr","f")
bst.find("aerre","f")
bst.find("aerre","e")
bst.find("sf3r","f")
