//Place your javascript code related with HTML and CSS here
// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {
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
}

// Param number: single integer
// Returns a single integer
function factorial(number) {
	let mult = 1
	for (let i = 1; i <= number; i++) {
		mult = mult * i
	}
	console.log(mult)
	return mult
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {
	if (number < 2) {
		return number
	}
	return fibonacci(number - 1) + fibonacci(number - 2)
}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(result) {
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
}

if (typeof process === "object") {
    module.exports = {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation,
    }
}

function doInsertionSort() {
	const input = document.getElementById("insertion-sort-input").value
	const output = insertion_sort(input.split(","))
	event.preventDefault()
	document.getElementById("insertion-sort-output").innerHTML = output
}
document
	.getElementById("btn-insertion-sort")
	.addEventListener("click", doInsertionSort)
function doFactorial() {
	const input = document.getElementById("factorial-input").value
	const output = factorial(+input)
	event.preventDefault()
	document.getElementById("factorial-output").innerHTML = output
}
document.getElementById("btn-factorial").addEventListener("click", doFactorial)
function doFibonacci() {
	const input = document.getElementById("fibonacci-input").value
	const output = fibonacci(+input)
	event.preventDefault()
	document.getElementById("fibonacci-output").innerHTML = output
}
document.getElementById("btn-fibonacci").addEventListener("click", doFibonacci)
function doExpression() {
	const input = document.getElementById("expression-input").value
	const output = evaluation(input)
	event.preventDefault()
	document.getElementById("expression-output").innerHTML = output
}
document
	.getElementById("btn-expression")
	.addEventListener("click", doExpression)

// factorial - form
// fibonacci - form
// evaluation - form