const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum += item, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, item) => product *= item, 1);
};

const power = function(a, b) {
  let final = a;
	while(b > 1) {
    final = a * final;
    b--;
  }
  return final;
};

const factorial = function(num) {
  if (num === 0) return 1;
	let arr = [];
  let counter = 1;
  while(counter < num) {
    arr.push(counter);
    counter++;
  }
  return multiply(arr) * num;
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
