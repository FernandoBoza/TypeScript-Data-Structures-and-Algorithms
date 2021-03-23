class TreeNode<T> {
    constructor(public data: TreeNode<T>, public left: TreeNode<T> = null, public right: TreeNode<T> = null){}
    duplicates = 0;
}

export default class BinarySearchTree<T> {
    constructor(initializer?: any){
        if(initializer){
            this.root = new TreeNode(initializer);
        }
    }
    public root: TreeNode<T>;

    public addNode = (data): void | TreeNode<T> => {
        if (!this.root) return this.root = new TreeNode(data);
        const newNode = new TreeNode(data),
            currentNode = this.root;

        while(true){
            if(data < currentNode.data && currentNode.left == null){
                currentNode.left = newNode;
                return;
            }
        }
    }

    public delete = (data) => {

    }
}
