class Node<T> {

    constructor(
        public data: T | null = null,
        public left: Node<T> | null = null,
        public right: Node<T> | null = null) {
    }
    duplicates = 0;
}

export default class BinarySearchTree<T> {

    constructor(
      initializer?: T,
      private key?: string,
      public size?: number,
      private _root?: Node<T>
    ) {
        this.size = 0
        if (key) this.key = key;
        if (initializer) this.add(initializer, key);
    }

    public isEmpty = () => this.size == 0

    get root(): Node<T> { return this._root; }

    // O (log n)
    public add = (data: T, key: string) => {

        if (!data) throw new Error("argument is null")
        const newNode = new Node(data);

        if (this.isEmpty()) {
            this._root = newNode; this.size += 1
            this.key = key;
            return this
        }

        let currentNode = this._root;
        if (!!this.key) {
            while (currentNode) {
                if (currentNode.data[this.key] == newNode.data[this.key]) {
                    currentNode.duplicates += 1;
                    return this;
                } else if (newNode.data[this.key] < currentNode.data[this.key]) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        this.size += 1
                        return this
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (newNode.data[this.key] > currentNode.data[this.key]) {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        this.size += 1
                        return this
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        } else {
            while (true) {
                if (data === currentNode.data) return undefined;
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    // O (log n)
    public find = <T>(data: T, key) => {
        if (this.isEmpty()) return false;
        let currentNode = this._root,
            found = false;

        while (currentNode && !found) {
            if (data < currentNode?.data[key]) {
                currentNode = currentNode.left
            } else if (data > currentNode?.data[key]) {
                currentNode = currentNode.right;
            } else if (data == currentNode?.data[key]) {
                found = true
            }
        }
        return found;
    }

    BFS = () => {
        let data = [],
          queue = [],
          node = this.root;

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.data);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    DFS_PreOrder = () => {
        let current = this.root,
          visited = [];

        function traverse(node) {
            visited.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return visited;
    }

    DFS_PostOrder = () => {
        let visited = [],
          current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }
        traverse(current);
        return visited;
    }

    DFS_InOrder = () => {
        let visited = [],
          current = this.root;

        function t(n) {
            if (n.left) t(n.left);
            visited.push(n.value);
            if (n.right) t(n.right);
        }

        t(current);
        return visited;
    }

    // DFS_ = () => {
    //     let start = 0;
    //     let end = arr.length - 1;
    //     let current = this.root;
    //     let visited = [];
    //
    //     this.traverse(this._root) // O(n)
    // }

    traverse(node: Node<T>) {
        if (node.left) return this.traverse(node.left);
        if (node.right) return this.traverse(node.right);
    }

}


type User = { f: string, l: string }
const bst = new BinarySearchTree<User>({ f: "hello", l: "world" }, 'l')
bst.add({ f: "hola", l: "mundo" }, 'f')
bst.add({ f: "bonjour", l: "monde" }, 'f')

// bst.find("world",'l')
// bst.find("mundo",'l')
// bst.find("monde",'l')

// bst.find("hello", 'f')
// bst.find("hola", 'f')
// bst.find("bonjour", 'f')
