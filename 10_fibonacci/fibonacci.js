// The Fibonacci sequence is a series of numbers where each number is the sum of the two numbers that come before it. The sequence starts with 0 and 1, and then continues with 1, 2, 3, 5, 8, 13, 21, and so on.
    // Use recursion
    function fibonacci(n) {
        if (n < 0) return "OOPS";
        n = Math.round(n);
        if (n <= 1) {
          return n;
        } else {
          return fibonacci(n - 1) + fibonacci(n - 2);
        }
      }
// Do not edit below this line
module.exports = fibonacci;
