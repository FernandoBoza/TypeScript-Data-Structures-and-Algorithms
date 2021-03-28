/*
* Binary Search for T in Arr[] return last index of T;
* Time complexity: O(log n)
* Space complexity: O(log n)
*/

export default function BinarySearch<T>(list: T[], key: T): T | number {
    let low = 0,
        high = list.length - 1;

    while(low <= high){
        let middle = Math.floor(low + (high - low) / 2);
        if(key < list[middle]) {
            high = middle - 1;
        } else if(key > list[middle]) {
            low = middle + 1;
        } else {
            return middle
        }
    }
    return -1;
}

console.log(BinarySearch([ 3, 9, 10, 27, 38, 43, 82 ], 3))
console.log(BinarySearch([ 'a', 'b', 'c', 'e','z' ], "e"))
