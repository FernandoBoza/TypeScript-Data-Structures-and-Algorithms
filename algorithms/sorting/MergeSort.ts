/*
* Top-Down Recursive Merge Sort
* O(N) in Space and Time complexity
*/

export default function MergeSort <T>(items: T[]): T[] {
    return divide(items);
}

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
        let lowItem = low[indexLow];
        let highItem = high[indexHigh];
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
