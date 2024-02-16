const removeFromArray = function(arr, ...args) {
    const afterRemove = arr.filter(value => !args.includes(value));
    return afterRemove;
};

console.log(removeFromArray([1, 2, 3, 4], 1,2,3,4));
// Do not edit below this line
module.exports = removeFromArray;
