//negatives
//2 operands at a time
//dispolay calculation

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

//////// adjust the display

const appendToDisplay = function(value) {
    const input = document.getElementById("displayInput");
    if (input.value === "● ᆺ ●") {
        input.value = value;
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

const restorePlaceholder = function() {
    const input = document.getElementById("displayInput");
    // No need to manually set the value, the placeholder will handle it
}

const clearPlaceholder = function() {
    const input = document.getElementById("displayInput");
    input.style.color = "black"; // Ensure consistent color when focused
}




////////do operation

const opButtons = document.querySelectorAll(".op-btn");
opButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        const buttonText = event.target.textContent;
        return(buttonText)
    })
})


// const processInput = function() {
//     const input = document.getElementById("displayInput");
//     //getting the first operand
//     if (input.value === "") { //handles case when first operand is neg
//         return;
//     } else {
//         const operand1 = Number(input.value);
//         const operator = 
//     }
    
// }



const processOperation = function() {
    const input = document.getElementById("displayInput");
    const op_string = input.value; // store calcultion as string
    const op_noSpaces = op_string.replace(/\s+/g, '');
    const regex = /(\d+|[xX%*/+\-])/g;
    const parts = op_noSpaces.match(regex); //store operands and operators in array
    // handling negatives

    const operand_1 = Number(parts[0]);
    const operand_2 = Number(parts[2]);
    const operator = parts[1];
    const answer = operate(operand_1, operator, operand_2);
    clearDisplay();
    appendToDisplay(answer)
}

const backspace = function() {
    const input_value = document.getElementById("displayInput").value;
    const new_input = input_value.slice(0, -1);
    clearDisplay();
    appendToDisplay(new_input);
}
