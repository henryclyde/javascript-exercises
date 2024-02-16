const sumAll = function(num1,num2) {
    let lower, higher;
    if (num1 < num2) {
        lower = num1;
        higher = num2;
    } else {
        lower = num2;
        higher = num1;
    }
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    let sum = 0
    for (i = lower; i <= higher; i++) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
