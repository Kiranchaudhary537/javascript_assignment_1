// Function to perform addition
function add(num1, num2) {
    return num1 + num2;
}

// Function to perform subtraction
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to perform multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to perform division
function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
}

// Function to perform modulo operation
function modulo(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot modulo by zero");
    }
    return num1 % num2;
}

// Main calculation function
function calculate() {
    try {
        // Retrieve input values and operator
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var operator = document.getElementById("operator").value;
        
        // Error if either number is not a valid number
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Please enter valid numbers");
        }

        var result;
        // Perform calculation based on operator
        switch (operator) {
            case "+":
                result = add(num1, num2);
                break;
            case "-":
                result = subtract(num1, num2);
                break;
            case "*":
                result = multiply(num1, num2);
                break;
            case "/":
                result = divide(num1, num2);
                break;
            case "%":
                result = modulo(num1, num2);
                break;
            default:
                throw new Error("Invalid operator");
        }
        
        // Display result
        document.getElementById("result").value = result;
    } catch (error) {
        // Handle errors and display error message
        document.getElementById("result").value = error.message;
    }
}
