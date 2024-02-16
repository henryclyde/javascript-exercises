const convertToCelsius = function(fdeg) {
  let temp = 5/9 * (fdeg-32);
  return parseFloat(temp.toFixed(1));
};

const convertToFahrenheit = function(cdeg) {
  let temp = (cdeg * (9/5) + 32);
  return parseFloat(temp.toFixed(1));
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
