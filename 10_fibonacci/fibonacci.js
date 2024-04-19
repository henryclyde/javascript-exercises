const fibonacci = function(n) {
    n = parseInt(n);
    if(n == 0) return 0;
    if(n<0) return "OOPS";
    const fib = [1,1];
    for(let i = fib[fib.length-2] + fib[fib.length-1];i<999999; i += fib[fib.length-2]) {
        fib.push(i);
    }
    return fib[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
