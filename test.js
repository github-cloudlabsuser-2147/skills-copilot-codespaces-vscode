const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

function performOperation(operation, a, b) {
    switch (operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Invalid operation';
    }
}

function promptUser() {
    rl.question('Enter operation (+, -, *, /) or "exit" to quit: ', (operation) => {
        if (operation === 'exit') {
            rl.close();
            return;
        }

        rl.question('Enter first number: ', (firstInput) => {
            const a = parseFloat(firstInput);
            rl.question('Enter second number: ', (secondInput) => {
                const b = parseFloat(secondInput);
                const result = performOperation(operation, a, b);
                console.log(`Result: ${result}`);
                promptUser();
            });
        });
    });
}

promptUser();