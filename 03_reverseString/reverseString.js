const reverseString = function(str = "hello there") {
    let reverse = "";
    for (let i = str.length; i >= 0; i--) {
        reverse += str.charAt(i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
