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
    return a / b;
}

// const add = () => {};
// const sub = () => {};
// const mul = () => {};
// const div = () => {};

// const calculator = {
//     add,
//     sub,
//     mul,
//     div
// } 
// key랑 value랑 이름이 같은 경우 생략 가능

module.exports = {
    add, subtract, multiply, divide
};