//variable initialisations
let operand1 = null;
let operand2 = null;
let operator = null;
let result = null;

const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const operate = (a, operator, b) => {
    const operations = {
        '*': multiply,
        'x': multiply,
        'X': multiply,
        '/': divide,
        '%': divide,
        '+': add,
        '-': subtract
    };
    
    const operation = operations[operator];
    return operation ? operation(a, b) : null; 
};

//////// adjusting the display
let shouldClearDisplay = false;
function toggleShouldClearDisplay() {
    shouldClearDisplay = !shouldClearDisplay;
}

const appendToDisplay = function(value) {
    const input = document.getElementById("displayInput");
    if (input.value === "● ᆺ ●" || shouldClearDisplay === true) {
        input.value = value;
        if (shouldClearDisplay === true) {
            toggleShouldClearDisplay();
        }
        
    } else {
        input.value += value;
    }
    input.style.textAlign = "right"
    input.style.color = "black";
}

const clearDisplay = function() {
    const input = document.getElementById("displayInput");
    input.value = "";
    input.style.color = "black";  // Reset color for user input
}

const clearResults = function() {
    operand1 = null;
    operand2 = null;
    operator = null;
    result = null;
}

const restorePlaceholder = function() {
    const input = document.getElementById("displayInput");
    // No need to manually set the value, the placeholder will handle it
}

const clearPlaceholder = function() {
    const input = document.getElementById("displayInput");
    input.style.color = "black"; // Ensure consistent color when focused
}


////////doing operation

const getOperand1 = function(op) {
    const input = document.getElementById("displayInput");

    //getting the first operand
    if (input.value === "" || isNaN(Number(input.value))) { //handles case when first operand is neg
        clearDisplay();
        appendToDisplay(op);
        return;
    } else {
        operand1 = Number(input.value);
        operator = op;
        clearDisplay();
        appendToDisplay(op);
        shouldClearDisplay = true;
    }
}

const processOperation = function() {
    const input = document.getElementById("displayInput");
    operand2 = Number(input.value);
    result = operate(operand1, operator, operand2);
    clearDisplay();
    if (result === "Infinity") {
        appendToDisplay("undefined");
    }
    appendToDisplay(result);
}

///handling backspace 

const backspace = function() {
    const input_value = document.getElementById("displayInput").value;
    const new_input = input_value.slice(0, -1);
    clearDisplay();
    appendToDisplay(new_input);
}

// Adding keyboard support
document.addEventListener("keydown", function(event) {
    event.preventDefault();
    const key = event.key;

    if (!isNaN(key)) {
        appendToDisplay(key);
    }
    if (key === '+' || key === '-' || key === '*' || key === '/' || key.toLowerCase() === 'x') {
        getOperand1(key);
    }
    if (key === 'Enter' || key === '=') {
        processOperation();
    }
    if (key === 'Backspace') {
        backspace();
    }
    if (key === 'Escape') {
        clearDisplay();
        clearResults();
    }

});

