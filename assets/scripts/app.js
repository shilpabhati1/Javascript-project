const defaultResult = 0;
let currentResult = defaultResult;




function addition(num1, num2) {
    const result = num1 + num2;
    return result;
}


currentResult = addition(1, 2);

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);