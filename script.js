function multiply() {
    // Get the values from input fields
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);

    // Calculate multiplication
    let result = num1 * num2;

    // Display the result
    document.getElementById("result").innerText = "Multiplication Result: " + result;
}

function divide() {
    // Get the values from input fields
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);

    // Check for division by zero and calculate division
    let result = num2 !== 0 ? num1 / num2 : "Error: Division by zero is not allowed.";

    // Display the result
    document.getElementById("result").innerText = "Division Result: " + result;
}
