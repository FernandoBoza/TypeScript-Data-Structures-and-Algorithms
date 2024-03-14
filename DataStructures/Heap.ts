class MaxBinaryHeap {
  readonly values: any[];
  constructor() {
    this.values = []
  }

  insert(el) {
    this.values.push(el);
    this.bubbleUp();
  }

  bubbleUp() {
    let currIndex = this.values.length - 1,
      currElement = this.values[currIndex];
    while (currIndex > 0) {
      let parentIndex = Math.floor((currIndex - 1) / 2),
        parentElement = this.values[parentIndex];

      if (currElement <= parentElement) break;

      this.values[parentIndex] = currElement
      this.values[currIndex] = parentElement
      currIndex = parentIndex;
    }
  }

  extractMax(){
    let max = this.values[0],
      end = this.values.pop();

    if(this.values.length === 0) return []
    this.values[0] = end;
    this.bubbleDown()
    return max;
  }

  bubbleDown(){
    let currIndex = 0;
    const length = this.values.length,
      currElement = this.values[0];

    while(true){
      let leftChildIndex = 2 * currIndex + 1,
        rightChildIndex = 2 * currIndex + 2,
        leftChild, rightChild, swap = null;

      if(leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if(leftChild > currElement) swap = leftChildIndex;
      }

      if(rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if(
          !swap && rightChild > currElement ||
          swap && rightChild > leftChild) {
          swap = rightChildIndex;
        }
      }
      if(!swap) break;
      this.values[currIndex] = this.values[swap];
      this.values[swap] = currElement;
      currIndex = swap;
    }
  }
}

let heap = new MaxBinaryHeap();

heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)

console.log(heap.values)
