class ListNode<T> {
    constructor(public data: T, public next: ListNode<T> = null, public head: ListNode<T> = null){}
}

class LinkedList <T>{
    get root(): ListNode<T> {
        return this._root;
    }
    constructor(init: T){
        this._root = new ListNode(init);
    }
    private readonly _root: ListNode<T>;

    public add(data){
        let currNode = this.root;
        if(!currNode.next) {
            currNode.next = new ListNode(data);
        } else {
            currNode = currNode.next;
        }
    }
}

const ll = new LinkedList(10)

ll.add(20)
ll.root
