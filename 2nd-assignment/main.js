const sum = require("./sum"); // sum.js 아님
const calculator = require("./calculator");

let result = sum(1, 3);
console.log("sum result: ", result);

result = calculator.add(1, 3);
console.log("add result: ", result);

result = calculator.subtract(1, 3);
console.log("sub result: ", result);

result = calculator.multiply(1, 3);
console.log("mul result: ", result);

result = calculator.divide(1, 3);
console.log("div result: ", result);