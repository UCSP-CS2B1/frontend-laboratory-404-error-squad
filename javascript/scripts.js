//Place your javascript code related with HTML and CSS here
const {insertion_sort, factorial, fibonacci, evaluation} = require("app.js")

function do_insertion_sort() {
    document.getElementById("insertion-sort-form").submit()
    insertion_sort(numbers.split(","))
}

function do_fibonacci() {
    document.getElementById("fibonacci-form").submit()
    fibonacci(+number)
}

function do_factorial() {
    document.getElementById("factorial-form").submit()
    factorial(+number)
}

function do_evaluation() {
    document.getElementById("evaluation-form").submit()
    evaluation(expression)
}

module.exports = {
    do_insertion_sort,
    do_fibonacci,
    do_factorial,
    do_evaluation,
}
