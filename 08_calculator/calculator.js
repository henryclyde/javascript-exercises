const add = function(...nums) {
	let total = 0;
  for(i in nums) total += nums[i];
  return total;
};

const subtract = function(a=0,b=0) {
  return a - b;
};

const sum = function(nums) {
  if (nums.length == 0) return 0;
  else return nums.reduce((total,item) => total + item);	
};

const multiply = function(nums) {
  return nums.reduce(function(total,item) {
    return total * item;
  });
};

const power = function(...nums) {
	let total = nums[0];
  for(i = 1; i < nums[1]; i++) {
    total *= nums[0];
  }
  return total;
};

const factorial = function(num) {
	let total = num;
  if (total == 0) return 1;
  else {
    for(let i = num-1; i > 0; i--)
    {
      total *= i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
