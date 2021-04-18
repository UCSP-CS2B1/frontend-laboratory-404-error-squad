// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {
<<<<<<< HEAD
    let size = inputArr.length
    for (let i = 1; i < size; i++) {
        let current = inputArr[i]
        let j = i - 1
        while (j >= 0 && current < inputArr[j]) {
            inputArr[j + 1] = inputArr[j]
            j--
        }
        inputArr[j + 1] = current
    }
    console.log(numbers)
    return numbers
=======
	let size = numbers.length
	for (let i = 1; i < size; i++) {
		let current = numbers[i]
		let j = i - 1
		while (j >= 0 && current < numbers[j]) {
			numbers[j + 1] = numbers[j]
			j--
		}
		numbers[j + 1] = current
	}
	console.log(numbers)
	return numbers
>>>>>>> 0c9aac35631ce89a62a4a0dedb67b26f9900f27d
}

// Param number: single integer
// Returns a single integer
function factorial(number) {
<<<<<<< HEAD
    let mult = 1
    for (i = 1; i <= number; i++) {
        mult = mult * i
    }
    console.log(mult)
    return mult
=======
	let mult = 1
	for (let i = 1; i <= number; i++) {
		mult = mult * i
	}
	console.log(mult)
	return mult
>>>>>>> 0c9aac35631ce89a62a4a0dedb67b26f9900f27d
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {
<<<<<<< HEAD
    if (number < 2) {
        console.log("executed")
        return number
    }
    return fibonacci(number - 1) + fibonacci(number - 2)
=======
	if (number < 2) {
		return number
	}
	return fibonacci(number - 1) + fibonacci(number - 2)
>>>>>>> 0c9aac35631ce89a62a4a0dedb67b26f9900f27d
}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(result) {
<<<<<<< HEAD
    var chars = result.split("")
    var n = [],
        op = [],
        index = 0,
        oplast = true
    n[index] = ""
    for (var c = 0; c < chars.length; c++) {
        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c]
            index++
            n[index] = ""
            oplast = true
        } else {
            n[index] += chars[c]
            oplast = false
        }
    }
    result = parseFloat(n[0])
    for (var o = 0; o < op.length; o++) {
        var num = parseFloat(n[o + 1])
        switch (op[o]) {
            case "+":
                result = result + num
                break
            case "-":
                result = result - num
                break
            case "*":
                result = result * num
                break
            case "/":
                result = result / num
                break
        }
    }
    console.log("")
    return result
=======
	let chars = result.split("")
	let n = []
	let op = []
	let index = 0
	let oplast = true
	n[index] = ""
	for (let i = 0; i < chars.length; i++) {
		if (isNaN(parseInt(chars[i])) && chars[i] !== "." && !oplast) {
			op[index] = chars[i]
			index++
			n[index] = ""
			oplast = true
		} else {
			n[index] += chars[i]
			oplast = false
		}
	}
	result = parseFloat(n[0])
	for (let o = 0; o < op.length; o++) {
		let num = parseFloat(n[o + 1])
		switch (op[o]) {
			case "+":
				result = result + num
				break
			case "-":
				result = result - num
				break
			case "*":
				result = result * num
				break
			case "/":
				result = result / num
				break
		}
	}
	console.log("")
	return result
>>>>>>> 0c9aac35631ce89a62a4a0dedb67b26f9900f27d
}

if (typeof process === "object") {
    module.exports = {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation,
    }
}
<<<<<<< HEAD
module.exports = {
    insertion_sort,
    factorial,
    fibonacci,
    evaluation,
}
=======
export { insertion_sort, factorial, fibonacci, evaluation }
>>>>>>> 0c9aac35631ce89a62a4a0dedb67b26f9900f27d
