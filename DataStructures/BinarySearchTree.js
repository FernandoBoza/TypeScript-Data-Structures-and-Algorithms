class Node {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
    duplicates = 0;
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root ? new Node(root) : null;
    }

    // O (log n)
    insert = value => {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // O (log n)
    find = value => {
        if (!this.root) return false;
        let current = this.root,
            found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
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
            data.push(node.value);

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

    traverse(node) {
        if (node.left) return traverse(node.left);
        if (node.right) return traverse(node.right);
    }

    // DFS_ = () => {
    //     let start = 0,
    //         end = arr.length - 1,
    //         current = this.root,
    //         visited = [];


    //     this.traverse(node){
    //         if (node.left) return traverse(node.left);
    //         if (node.right) return traverse(node.right);
    //     }
    // }
}

const tree = new BinarySearchTree(10);
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.BFS())
console.log(tree.DFS_PreOrder())
console.log(tree.DFS_PostOrder())
console.log(tree.DFS_InOrder())

module.exports = BinarySearchTree;

//              10
//          6         15
//      3       8          20
// 
//



// public void delete(Key key) {
//     if (key == null) throw new IllegalArgumentException("calls delete() with a null key");
//     root = delete(root, key);
//     assert check();
// }


// private Node delete(Node x, Key key) {
//     if (x == null) return null;
//
//     int cmp = key.compareTo(x.key);
//     if      (cmp < 0) x.left  = delete(x.left,  key);
//     else if (cmp > 0) x.right = delete(x.right, key);
//     else {
//         if (x.right == null) return x.left;
//         if (x.left  == null) return x.right;
//         Node t = x;
//         x = min(t.right);
//         x.right = deleteMin(t.right);
//         x.left = t.left;
//     }
//     x.size = size(x.left) + size(x.right) + 1;
//     return x;
// }
