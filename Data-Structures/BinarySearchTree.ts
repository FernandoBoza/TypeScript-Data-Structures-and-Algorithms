class TreeNode<T> {
    constructor(
        public data: TreeNode<T>,
        public left: TreeNode<T> = null,
        public right: TreeNode<T> = null){
    }
    duplicates = 0;
}

export default class BinarySearchTree<T> {
    constructor(initializer?: any){
        if(initializer){
            this.addNode(initializer);
        }
    }
    private _root: TreeNode<T>;
    public size = 0;
    public isEmpty = true;

    get root(): TreeNode<T> {
        return this._root;
    }

    public addNode = (data) => {

    }

    public delete = (data) => {
        this.size -= 1
        this.isEmpty = this.size == 0;
    }
}

class User {
    constructor(public fName: string, public lName){}
}

const newUser = new User("Fer", "Boza");


const bst = new BinarySearchTree(newUser)

console.log(bst)
