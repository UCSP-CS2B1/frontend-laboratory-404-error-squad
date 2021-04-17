// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {
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
	return numbers
}

// Param number: single integer
// Returns a single integer
function factorial(number) {
	let mult = 1
	for (i = 1; i <= number; i++) {
		mult = mult * i
	}
	return mult
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {
	if (number < 2) return number
	return fibonacci(number - 1) + fibonacci(number - 2)
}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation (result) {
	var chars = result.split("");
	var n = [], op = [], index = 0, oplast = true;
	n[index] = "";
	for (var c = 0; c < chars.length; c++) {
	  if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
      op[index] = chars[c];
      index++;
      n[index] = "";
      oplast = true;
	  } else {
      n[index] += chars[c];
      oplast = false;
	  }
	}
	result = parseFloat(n[0]);
	for (var o = 0; o < op.length; o++) {
	  var num = parseFloat(n[o + 1]);
	  switch (op[o]) {
      case "+":
        result = result + num;
        break;
      case "-":
        result = result - num;
        break;
      case "*":
        result = result * num;
        break;
      case "/":
        result = result / num;
        break;
	  }
	}
	return result;
}


if (typeof process === "object") {
	module.exports = {
		insertion_sort,
		factorial,
		fibonacci,
		evaluation,
	}
}
