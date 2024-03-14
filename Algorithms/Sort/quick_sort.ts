function partition(items: any, left: any, right: any) {
    const pivot = items[Math.floor((right + left) / 2)];//middle element
    while (left <= right) {
        while (items[left] < pivot) {
            left++;
        }
        while (items[right] > pivot) {
            right--;
        }
        if (left <= right) {
            [items[left], items[right]] = [items[right], items[left]];
            left++;
            right--;
        }
    }
    return left;
}

const quickSort = (items, left = 0, right = items.length - 1) => {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

export default quickSort
