//Place your javascript code related with HTML and CSS here
import * as app from "./app.js"

// $("insertion - sort - form").submit(function (event) {
// 	event.preventDefault()
// 	const input = $("insertion-sort-input").val()
// 	alert(input)
// })

function doInsertionSort() {
	const input = document.getElementById("insertion-sort-input").value
	const output = app.insertion_sort(input.split(","))
	event.preventDefault()
	document.getElementById("insertion-sort-output").innerHTML = output
}
document
	.getElementById("btn-insertion-sort")
	.addEventListener("click", doInsertionSort)
function doFactorial() {
	const input = document.getElementById("factorial-input").value
	const output = app.factorial(+input)
	event.preventDefault()
	document.getElementById("factorial-output").innerHTML = output
}
document.getElementById("btn-factorial").addEventListener("click", doFactorial)
function doFibonacci() {
	const input = document.getElementById("fibonacci-input").value
	const output = app.fibonacci(+input)
	event.preventDefault()
	document.getElementById("fibonacci-output").innerHTML = output
}
document.getElementById("btn-fibonacci").addEventListener("click", doFibonacci)
function doExpression() {
	const input = document.getElementById("expression-input").value
	const output = app.evaluation(input)
	event.preventDefault()
	document.getElementById("expression-output").innerHTML = output
}
document
	.getElementById("btn-expression")
	.addEventListener("click", doExpression)

// factorial - form
// fibonacci - form
// evaluation - form