const { floor, abs, pow, log10, max } = Math

const getDigit = (num, i) => floor(abs(num) / pow(10, i)) % 10;

const digitCount = (num) => num === 0 ? 1 : floor(log10(abs(num))) + 1;

const mostDigits = (nums) => {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

module.exports = radixSort = (arr) => {
    // * Define a function thats accepts list of numbers     
    // * Store how many digits the largest number has
    // * Loop from K = 0 up to this largest number of digits
    // * For each iteration of the loop:
    //      * Create nuckets for each digit ( 0 to 9 )
    //      * Place each number in the corresponding bucket based on its Kth digit
    // * Replace our exisiting array with values in our buckets, 
    // ** starting with 0 and going up to 9
    // *  return list at the end

    let maxDigitCount = mostDigits(arr);
    for (let k = 0; k < maxDigitCount; k++) {
        let buckets = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < arr.length; i++) {
            buckets[getDigit(arr[i], k)].push(arr[i]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}
