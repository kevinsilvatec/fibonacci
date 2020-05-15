'use strict'

const fibonacci = () => {
    let i = 2;
    let n = 14;
    let fib = [];
    
    fib[0] = 0;
    fib[1] = 1;
    
    for(i = 2; i <= n; i++){
        fib[i] = fib[i - 2] + fib[i - 1];
    }    
    
    return fib;
}

const isFibonnaci = (num) => {
    const fibonacciSequence = fibonacci();

    for (let i = 0; i < fibonacciSequence.length; i++) {
        const e = fibonacciSequence[i];
        
        if(e === num){    
            return true;
        }
        
    }
        
    return false;
        
}

module.exports = {
    fibonacci,
    isFibonnaci
}
