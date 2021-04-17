// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {
    let size = inputArr.length
    for (let i = 1; i < size; i++) {
        let current = inputArr[i]
        let j = i - 1
        while (j > -1 && current < inputArr[j]) {
            inputArr[j + 1] = inputArr[j]
            j--
        }
        inputArr[j + 1] = current
    }
    return numbers
}

// Param number: single integer
// Returns a single integer
function factorial(number) {

    let mult = 1;
    for (i = 1; i <= number; i++) {
        mult = mult * i;
    }
    return mult;

}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {

    if (number < 2)
        return number;

    return fibonacci(number - 1) + fibonacci(number - 2);

}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(expression) {
    return -1
}

if (typeof process === "object") {
    module.exports = {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation,
    }
}
