/*
* Top-Down Recursive Merge Sort
* Time complexity: O(n log n)
* Space complexity: O(n)
*/

export const mergeSort = <T>(items: T[]): T[] => {
    function divide <T>(items: T[]): T[] {
        let middle = Math.ceil(items.length / 2),
            low = items.slice(0, middle),
            high = items.slice(middle);

        if (middle > 1) {
            low = divide(low);
            high = divide(high);
        }
        return combine(low, high);
    }
    function combine<T>(low: T[], high: T[]): T[] {
        let indexLow = 0,
            indexHigh = 0,
            combined = [];

        while (indexLow < low.length || indexHigh < high.length) {
            let lowItem = low[indexLow],
                highItem = high[indexHigh];

            if (lowItem) {
                if (!highItem) {
                    combined.push(lowItem);
                    indexLow++;
                } else {
                    if (lowItem <= highItem) {
                        combined.push(lowItem);
                        indexLow++;
                    } else {
                        combined.push(highItem);
                        indexHigh++;
                    }
                }
            } else {
                if (highItem) {
                    combined.push(highItem);
                    indexHigh++;
                }
            }
        }
        return combined;
    }
    return divide(items);
}

/*
* Bottom-Up Iterative Merge Sort
* Time complexity: O(n log n)
* Space complexity: O(n)
*/

export const mergeSortBottomUp = list => {
    function merge(list, aux, low, middle, high){
        for(let k = low; k <= high; k++){
            aux[k] = list[k]
        }

        let i = low,
            j = middle + 1;

        for(let k = low; k <= high; k++){
            if(i > middle)              { list[k] = aux[j++];
            } else if (j  > high)       { list[k] = aux[i++]
            } else if (aux[j] < aux[i]) { list[k] = aux[j++]
            } else                      { list[k] = aux[i++]
            }
        }
        return list
    }
    function sort(list){
        let n = list.length,
            aux = new Array(n);
        for(let len = 1; len < n; len *= 2){
            for(let low = 0; low < n - len; low += len + len){
                let middle = low + len-1,
                    high = Math.min(low+len+len-1, n-1);
                merge(list, aux, low, middle, high);
            }
        }
        return list
    }
    return sort(list)
}
